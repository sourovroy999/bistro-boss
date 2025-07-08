
const MenuItems = ({item}) => {
    
    const{name, recipe, image, price} = item
    // console.log(image);
    
    return (

        <div>

        <div className="flex space-x-4">
            
                <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[60px] h-[60px] md:h-[100px] md:w-[100px]   " src={image} alt="Could not load the image" />

            <div>
            <h3 className="uppercase">{name}-------</h3>
            <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
            
            </div>

        </div>


    );
};

export default MenuItems;