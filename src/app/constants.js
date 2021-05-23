import {
  Dashboard,
  NotificationsActive,
  People,
  Work,
} from "@material-ui/icons";
import MyDashboard from "../pages/Dashboard";
import NotificationsPage from "../pages/NotificationsPage";
import UsersPage from "../pages/UsersPage";
import WorkersPage from "../pages/WorkersPage";

export const BACKEND_HOST = "http://42.189.159.124:2358/";

export const GENERAL_PAGES = [
  {
    icon: <Dashboard />,
    text: "Dashboard",
    path: "/dashboard",
    page: MyDashboard,
  },
  {
    icon: <NotificationsActive />,
    text: "Notifications",
    path: "/notifications",
    page: NotificationsPage,
  },
  {
    icon: <People />,
    text: "Users",
    path: "/users",
    page: UsersPage,
  },
  {
    icon: <Work />,
    text: "Workers",
    path: "/workers",
    page: WorkersPage,
  },
];
