import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import {FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";


const Navbar = () => {
  const{user, logOut}=useContext(AuthContext)
  const[cart]=useCart()
  const[isAdmin, isAdminLoading]=useAdmin()

  const navigate=useNavigate()

  const handleLogout=()=>{
    logOut()
    .then(()=>{
      toast.success('log out successfull');
      navigate('/login')
    })
    .catch(err=>{
      console.log(err);
      
    })
  }

    const navOptions= <>
            

              <li><Link to={'/'}>HOME</Link></li>
              <li><Link>CONTACT US</Link></li>
              <li><Link>DASHBOARD</Link></li>
              <li><Link to='/menu'>OUR MENU</Link></li>
              <li><Link to={'/order/salad'}>ORdER</Link></li>
              
           {
            //eivbeo kora jay
             //user? condition ? 'double true'? 'one true' : false

           }
           {
            user && isAdmin &&  <li><Link to={'/dashboard/adminHome'}>Dashboard</Link></li>
           }
           {
            user && !isAdmin &&  <li><Link to={'/dashboard/userHome'}>Dashboard</Link></li>
           }
              
           
       
              {/* <li><a>Item 3</a></li> */}

    </>


    return (
        <div className="navbar inter-font md:px-4 max-w-7xl mx-auto    fixed z-10   text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content uppercase  rounded-box z-1 mt-3 w-52 p-2 gap-1 shadow  bg-black">

            {navOptions}

     </ul>
    </div>
    <div className=" text-xl min-w-[278px] uppercase"> <p className='tracking-widest '>Bistro Boss</p> 
    <span className='tracking-widest'>Restaurant</span>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu uppercase menu-horizontal px-1 gap-1">

          {navOptions}

    
    </ul>
  </div>
  <div className="navbar-end">
      {
                user? <div className="flex items-center gap-5">
                  <p>{user.displayName}</p>
                  
                
                  <Link to={'/dashboard/cart'} className="btn">

                  <FaCartShopping className="mr-2 text-pink-800 text-2xl" />
               <div className="badge badge-sm badge-secondary"> +{cart.length}</div>
                   </Link>

                   <button onClick={handleLogout} className="btn ">LogOut</button>

                </div> 
                
                : 
                
                <Link className="btn" to={'/login'}>login</Link>
                
              }
  </div>
        </div>
    );
};

export default Navbar;