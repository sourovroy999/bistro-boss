import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router';


const Cart = () => {
    const [cart, refetch]=useCart()
    console.log(cart);
    
    const totalPrice=cart.reduce((total, item)=>total+item.price , 0)
    console.log(totalPrice);
    const sum=totalPrice.toFixed(2)
    const axiosSecure=useAxiosSecure()


    const handleDelete=(id)=>{
        console.log(id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    axiosSecure.delete(`/carts/${id}`)
    .then(res=>{
      if(res.data.deletedCount > 0){
        refetch()
          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
      
    })
  }
});

    }
    
    return (
        <div>
            <div className='flex justify-evenly mb-10'>
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {sum}</h2>
                {
                cart.length  ?
                 <Link to={'/dashboard/payment'}>
                <button  className="btn btn-primary my-3 btn-wide">Pay</button>
                </Link>
                 : 
                <button disabled className="btn btn-primary my-3 btn-wide">Pay</button>
                }
            </div>

            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='uppercase'>
        <th>
          #
        </th>
        <th>IMAGE</th>
        <th>Name</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item, index) => <tr key={item._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>

          </div>
        </td>
        <td>
          {item.name}
        </td>
        <td>${item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item._id)} className="btn  btn-ghost btn-lg"><FaRegTrashCan className='text-red-600' />
         </button>
        </th>
      </tr>

      )}

    </tbody>
  
  </table>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;