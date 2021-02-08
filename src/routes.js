import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Inbox",
    component: Dashboard,
    layout: "/admin",
    drop: null
  },
  {
    path: "/user",
    name: "Spam",
    component: UserProfile,
    layout: "/admin",
    drop: null
  },
  {
    path: "/table",
    name: "Deleted Items",
    component: TableList,
    layout: "/admin",
    drop: null,
  },
  {
    path: "/maps",
    name: "Custom Folder",
    component: Maps,
    layout: "/admin",
    drop: null
  }
];

export default dashboardRoutes;
