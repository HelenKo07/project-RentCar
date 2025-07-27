import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <Outlet />
      {children}
    </div>
  );
}
