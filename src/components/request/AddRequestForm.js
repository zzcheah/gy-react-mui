import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_REQUEST } from "../../graphql/mutation";
import { addToast, toggleLoading } from "../../slices/appSlice";
import DrawerLayout from "../layout/DrawerLayout";
import axios from "axios";
import { BACKEND_HOST } from "../../app/constants";
import { GET_DOCKER_IMAGES } from "../../graphql/query";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import { Redirect, useHistory } from "react-router-dom";

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
    image: "",
    tag: "",
    rawParam: "",
    file: [],
    message: "",
    selectedImage: "",
    selectedTag: "",
    index: "",
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

  const uploadFile = (e) => {
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
        console.log(data);
        const input = {
          name: state.name,
          image: state.image + ":" + state.tag,
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

  const allTags = state.index !== "" ? data.dockerImages[state.index].tags : [];

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

        <form onSubmit={handleSubmit}>
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
              value={state.index}
              onChange={(e) => {
                const index = e.target.value;
                const image = allImages[index].name;
                setState({ ...state, index, image, tag: "" });
              }}
            >
              <MenuItem value="" disabled>
                <em>Docker Images</em>
              </MenuItem>
              {allImages.map((item, index) => (
                <MenuItem key={item.id} value={index}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 300, m: 2 }}>
            <InputLabel>Tags</InputLabel>
            <Select
              required
              value={state.tag}
              onChange={(e) => {
                setState({ ...state, tag: e.target.value });
              }}
            >
              <MenuItem value="" disabled>
                <em>Image Tags</em>
              </MenuItem>
              {allTags.map((item) => (
                <MenuItem key={item.id} value={item.tag}>
                  {item.tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
          </FormControl>

          <Box sx={{ m: 2 }}>
            <Typography variant="body1" gutterBottom>
              {state.file.length === 0 ? "No file selected.. " : state.fileInfo}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={state.progress}
              sx={{ height: "10px", m: "15px 0 ", width: "300px" }}
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
          >
            Submit
          </Button>
        </form>

        {/* {loading ? <div>Loading...</div> : null}
        {error ? `Error! ${error.message}` : null}
        {data ? <div /> : null} */}
      </Container>
    </DrawerLayout>
  );
}
