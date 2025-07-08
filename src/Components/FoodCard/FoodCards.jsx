
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCards = ({item}) => {
  const navigate=useNavigate()
  const location=useLocation()
  // console.log('state in the location login page', location.state);

  const axiosSecure=useAxiosSecure()
  const[, refetch] =useCart()
  

       const{name, recipe, image, price, _id} = item
      const {user}=useAuth();
       const handleAddTocart=()=>{
        if(user && user.email){
          //send cart item to the data base
          
          const cartItem={
              menuId: _id,
              email:user.email,
              name,
              image,
              price,

          }
          axiosSecure.post('/carts', cartItem)
          .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
           position: "top-end",
           icon: "success",
           title: "This menu has been added to cart",
             showConfirmButton: false,
             timer: 2500
        });
        // refetch the cart to update the cart items count
        refetch()
            }
            
          })

        }
        else{
          Swal.fire({
  title: "You are not logged in",
  text: "Do you want to log in?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, login!"
}).then((result) => {
  if (result.isConfirmed) {
    navigate('/login', {state: {from:location}})
  }
});
        }

        

       }


    return (
      <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={image}
      alt={name} />
  </figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 px-4 rounded-2xl py-2 mt-4">$ {price}</p>
  <div className="card-body text-center">
    <h2 className="card-title justify-center ">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button
      onClick={handleAddTocart}
      className='uppercase text-base-content mx-auto flex justify-center mb-20 mt-3  btn btn-outline  border-0 border-b-4 '>Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCards;