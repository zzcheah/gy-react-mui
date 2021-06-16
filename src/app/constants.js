import { Dashboard, People, Work } from "@material-ui/icons";
import UnderMaintenance from "../components/util/UnderMaintenance";
import MyDashboard from "../pages/Dashboard";
import EditProfile from "../pages/subpages/EditProfile";
import WorkerDetail from "../pages/subpages/WorkerDetail";
import UsersPage from "../pages/UsersPage";
import WorkersPage from "../pages/WorkersPage";

export const BACKEND_HOST = "http://3.219.108.65:2358/";

const USERS = {
  icon: <People />,
  text: "Users",
  path: "/users",
  page: UsersPage,
};

const WORKERS = {
  icon: <Work />,
  text: "Workers",
  path: "/workers",
  page: WorkersPage,
};

export const GENERAL_PAGES = {
  ADMIN: [USERS, WORKERS],
  USER: [WORKERS],
};

export const COMMON_PAGES = [
  {
    path: "/editProfile",
    page: EditProfile,
  },
  { path: "/workers/:id", page: WorkerDetail },
  {
    path: "/settings",
    page: UnderMaintenance,
  },
];
