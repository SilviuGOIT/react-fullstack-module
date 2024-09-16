import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const SharedLayout = () => {
  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <Outlet />
      </section>
    </main>
  );
};

export default SharedLayout;
