import { Container, Grid, Typography } from "@material-ui/core";
import DrawerLayout from "../../components/layout/DrawerLayout";
import AvatarPicker from "../../components/user/AvatarPicker";
import EditProfileForm from "../../components/user/EditProfileForm";

const EditProfile = () => {
  return (
    <DrawerLayout>
      <Container sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          <b>Edit Profile</b>
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={4}>
            <AvatarPicker />
          </Grid>
          <Grid item xs={12} lg={8}>
            <EditProfileForm />
          </Grid>
        </Grid>
      </Container>
    </DrawerLayout>
  );
};

export default EditProfile;
