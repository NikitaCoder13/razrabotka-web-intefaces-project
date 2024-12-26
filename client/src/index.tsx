import { ConfigProvider, theme } from "antd";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Auth } from "./features/auth/auth";
import "./index.css";
import { AddEmployee } from "./pages/add-employee";
import { EditEmployee } from "./pages/edit-employee";
import { Employee } from "./pages/employee";
import { Employees } from "./pages/employees";
import { Login } from "./pages/login";
import Marketing from "./pages/marketing";
import { Register } from "./pages/register";
import { Status } from "./pages/status";
import { Paths } from "./paths";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
  {
    path: Paths.employeeAdd,
    element: <AddEmployee />,
  },
  {
    path: `${Paths.employee}/:id`,
    element: <Employee />,
  },
  {
    path: `${Paths.employeeEdit}/:id`,
    element: <EditEmployee />,
  },
  {
    path: `${Paths.status}/:status`,
    element: <Status />,
  },
  {
    path: Paths.marketing,
    element: <Marketing />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
