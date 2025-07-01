import { Link } from "react-router";

const Navbar = () => {

    const navOptions= <>
            

              <li><Link to={'/'}>HOME</Link></li>
              <li><Link>CONTACT US</Link></li>
              <li><Link>DASHBOARD</Link></li>
              <li><Link to='/menu'>OUR MENU</Link></li>
              <li><Link to={'/order/salad'}>ORdER</Link></li>
       
              {/* <li><a>Item 3</a></li> */}

    </>


    return (
        <div className="navbar inter-font md:px-20 max-w-7xl mx-auto bg-black opacity-50  fixed z-10  text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content uppercase  rounded-box z-1 mt-3 w-52 p-2 shadow gap-4 bg-black">

            {navOptions}

     </ul>
    </div>
    <div className=" text-xl min-w-[278px] uppercase"> <p className='tracking-widest '>Bistro Boss</p> 
    <span className='tracking-widest'>Restaurant</span>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu uppercase menu-horizontal px-1 gap-4">

          {navOptions}

    
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
        </div>
    );
};

export default Navbar;