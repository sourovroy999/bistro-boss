import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
      
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;