import { FaBook, FaBowlFood, FaCalendar, FaCartShopping, FaHouse, FaList, FaMessage, FaPhone, FaShop, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [cart]=useCart()

    //todo: get this admit value from the database
    const [isAdmin]=useAdmin();


    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 p-4 min-h-screen bg-orange-400">
                <ul className="menu uppercase">

                    {
                        isAdmin ? 
                        <>
                        <li>
                        <NavLink to={'/dashboard/adminHome'}>
                        <FaHouse/>
                        Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/addItems'}>
                        <FaUtensils/>
                        Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/manageItems'}>
                        <FaList/>
                        Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/manageBookings'}>
                        <FaBook/>
                        Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/users'}>
                        <FaUsers/>
                        All Users</NavLink>
                    </li>

                        </> 
                        :
                        <>
                        <li>
                        <NavLink to={'/dashboard/userHome'}>
                        <FaHouse/>
                        User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}>
                        <FaCalendar/>
                        Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}>
                        <FaCartShopping/>
                        My Cart({cart.length}) </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}>
                        <FaMessage/>
                        ADD a review</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/paymentHistory'}>
                        <FaList/>
                        Payment History</NavLink>
                    </li>

                        </>
                    }

                    {/* shared Nav Link */}
                    <div className="divider"></div>


                    <li>
                        <NavLink to={'/'}>
                        <FaHouse/>
                        Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/contact'}>
                        <FaPhone/>
                        Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}>
                        <FaBowlFood/>
                        Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                        <FaShop/>
                        Shop</NavLink>
                    </li>
                    
                </ul>

            </div>

            {/* dashboard content */}

            <div className="flex-1 p-10">
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Dashboard;