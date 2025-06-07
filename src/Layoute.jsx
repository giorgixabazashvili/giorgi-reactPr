import { Outlet } from "react-router";
import Header from "./component/Header";
export default function Layoute() {
  return (
    <div className="d-flex flex-column justfy-content-between min-vh-100">
      <Header />
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}
