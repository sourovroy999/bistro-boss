import { Outlet, useLocation } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/navbar/Navbar";

const MainLayout = () => {
    const location=useLocation()

    const noHeaderFooter= location.pathname.includes('login') || location.pathname.includes('register') 

    return (
       <div>
        {
            noHeaderFooter || <Navbar/> 
        }
      
            <Outlet/>

        {
            noHeaderFooter || <Footer/>
        }    
        
            
        </div>
    );
};

export default MainLayout;