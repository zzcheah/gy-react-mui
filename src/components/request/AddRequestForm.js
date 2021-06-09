import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Container,
  createMuiTheme,
  Divider,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  MuiThemeProvider,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_REQUEST } from "../../graphql/mutation";
import { addToast, toggleLoading } from "../../slices/appSlice";
import DrawerLayout from "../layout/DrawerLayout";
import axios from "axios";
import { BACKEND_HOST } from "../../app/constants";
import { GET_DOCKER_IMAGES } from "../../graphql/query";
import { Redirect, useHistory } from "react-router-dom";
import Form from "@rjsf/material-ui";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return axios.post(BACKEND_HOST + "files/add", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const muiTheme = createMuiTheme({
  // @ts-ignore
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          maxWidth: 350,
        },
      },
    },
  },
});

export default function AddRequestForm() {
  const { data } = useQuery(GET_DOCKER_IMAGES);
  const [createRequest] = useMutation(CREATE_REQUEST);
  const dispatch = useDispatch();
  const history = useHistory();
  // @ts-ignore
  const userStatus = useSelector((state) => state.auth.user.status);
  const [state, setState] = useState({
    name: "Untitled",
    progress: 0,
    fileInfo: "",
    rawParam: "",
    file: [],
    message: "",
    selectedImage: "",
    selectedTag: "",
    imageItem: "",
    tagItem: "",
    schema64: null,
  });

  const selectFile = (event) => {
    const file = event.target.files[0];
    const { name, size } = file;
    const fileInfo = `${name}, size: ${size}`;
    setState({
      ...state,
      file,
      fileInfo,
    });
  };

  const uploadFile = () => {
    const file = state.file;

    setState({
      ...state,
      progress: 0,
    });

    return upload(file, (event) => {
      setState({
        ...state,
        progress: Math.round((100 * event.loaded) / event.total),
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(toggleLoading());
    uploadFile()
      .then((data) => {
        console.log("successfully uploading file, creating request");
        // @ts-ignore
        const tag = state.tagItem.tag;
        // @ts-ignore
        const image = state.imageItem.name;
        const input = {
          name: state.name,
          image: image + ":" + tag,
          param: Buffer.from(JSON.stringify(state.rawParam)).toString("base64"),
          inputFiles: [data.data],
        };
        console.log(input);
        return createRequest({ variables: { input } });
      })
      .then(() => {
        dispatch(
          addToast({
            message: "Successfully Created Request",
            severity: "success",
          })
        );
        dispatch(toggleLoading());
        history.push("/dashbaord");
      })
      .catch((err) => {
        console.log(err);
        addToast({
          message: err.toString(),
          severity: "error",
        });
        setState({
          ...state,
          progress: 0,
          message: err.toString(),
        });
        dispatch(toggleLoading());
      });
  };

  const allImages = data ? data.dockerImages : [];

  // @ts-ignore
  const allTags = state.imageItem !== "" ? state.imageItem.tags : [];

  if (userStatus !== "Active") {
    alert("User is not allowed to make request until approved by admin");
    return <Redirect to="/dashboard" />;
  }

  return (
    <DrawerLayout>
      <Container sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ pb: 2 }}>
          <b>Add New Request</b>
        </Typography>

        <form id="request-form" onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ m: 2 }}>
            <b>Docker Image</b>
          </Typography>

          <TextField
            autoComplete="name"
            name="name"
            required
            variant="standard"
            id="name"
            label="Name"
            value={state.name}
            autoFocus
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
            sx={{ m: 2, width: 450 }}
          />
          <br />

          <FormControl sx={{ minWidth: 400, m: 2 }}>
            <InputLabel>Docker Image</InputLabel>
            <Select
              required
              value={state.imageItem}
              onChange={(e) => {
                setState({ ...state, imageItem: e.target.value });
              }}
            >
              <MenuItem value="" disabled>
                <em>Docker Images</em>
              </MenuItem>
              {allImages.map((item) => (
                <MenuItem key={item.id} value={item}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 300, m: 2 }}>
            <InputLabel>Tags</InputLabel>
            <Select
              required
              value={state.tagItem}
              onChange={(e) => {
                const tagItem = e.target.value;
                // @ts-ignore
                setState({ ...state, tagItem, schema64: tagItem.schema64 });
              }}
            >
              <MenuItem value="" disabled>
                <em>Image Tags</em>
              </MenuItem>
              {allTags.map((item) => (
                <MenuItem key={item.id} value={item}>
                  {item.tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>

        <Box sx={{ height: 32 }} />
        <Divider />

        {state.schema64 && (
          <MuiThemeProvider theme={muiTheme}>
            <Typography variant="h5" sx={{ m: 2, pt: 1 }}>
              <b>Parameters</b>
            </Typography>
            <Box sx={{ minWidth: 300, m: 2, pt: 1 }}>
              <Form
                // @ts-ignore
                schema={JSON.parse(atob(state.schema64))}
                formData={state.rawParam}
                onChange={(e) => {
                  setState({ ...state, rawParam: e.formData });
                }}
              >
                <Fragment />
              </Form>
            </Box>
          </MuiThemeProvider>
        )}

        {/* 
        <FormControl sx={{ minWidth: 300, m: 2 }}>
          <Typography color="text.secondary" gutterBottom>
            JSON Parameters
          </Typography>
          <JSONInput
            id="a_unique_id"
            theme="light_mitsuketa_tribute"
            colors={{
              default: "#000000",
            }}
            style={{
              body: {
                fontSize: "14px",
              },
            }}
            width="622px"
            locale={locale}
            height="420px"
            onChange={(e) => {
              setState({ ...state, rawParam: e.jsObject });
            }}
          />
        </FormControl> */}
        <Box sx={{ height: 32 }} />
        <Divider />
        <Box sx={{ m: 2, pt: 1 }}>
          <Typography variant="h5" gutterBottom>
            <b>Input File</b>
          </Typography>

          <Typography variant="body1" gutterBottom>
            {state.file.length === 0 ? "No file selected.. " : state.fileInfo}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={state.progress}
            sx={{ height: "10px", m: "15px 0 ", width: "400px" }}
          />
          <Button component="label" variant="outlined" size="small">
            Upload File
            <input type="file" hidden onChange={selectFile} />
          </Button>
        </Box>
        <br />
        <Button
          type="submit"
          variant="contained"
          // @ts-ignore
          color="success"
          size="large"
          sx={{ float: "right", mt: 3 }}
          form="request-form"
        >
          Submit
        </Button>

        {/* {loading ? <div>Loading...</div> : null}
        {error ? `Error! ${error.message}` : null}
        {data ? <div /> : null} */}
      </Container>
    </DrawerLayout>
  );
}
