import FoodCards from "../../../Components/FoodCard/FoodCards";

const OrderTab = ({items}) => {

    return (
        <div className=' grid px-4 md:px-5 lg:px-40 gap-6 grid-cols-1 md:grid-cols-3'> 
        
                {
                    items.map(item=> <FoodCards 
                    key={item._id}
                    item={item}
                    ></FoodCards>)
                }
        
                </div>
    );
};

export default OrderTab;