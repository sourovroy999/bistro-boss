import MenuItems from '../../Shared/menuitems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='pb-'>
           {title &&   <Cover title={title} img={coverImg}/>}

            
       <div className='grid px-5 md:px-16 lg:px-12 max-w-6xl mx-auto grid-cols-1 lg:grid-cols-2 mt-16 gap-5 md:gap-10 my-10 '>
        {
            items.map(item=> <MenuItems key={item._id} item={item}></MenuItems> )
        }
       </div>

        <Link to={`/order/${title}`}>

         <button className='uppercase mx-auto flex justify-center mb-20 mt-3 btn btn-outline  border-0 border-b-4 '>Order Now</button>
        </Link>
            
        </div>
    );
};

export default MenuCategory;