import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"; // Import your footer
import NavBar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      {/* Any header or nav bar can go here */}
      <NavBar />
      <Outlet /> {/* This is where nested routes will be rendered */}
      <Footer /> {/* Footer will show on all pages */}
    </div>
  );
};

export default Layout;
