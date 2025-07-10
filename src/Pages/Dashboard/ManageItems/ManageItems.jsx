import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router';

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure=useAxiosSecure()
    // console.log(menu);

    const handleItemDelete=(item)=>{
        console.log(item);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then( async (result) => {
  if (result.isConfirmed) {
    //delete here
    const res=await axiosSecure.delete(`/menu/${item._id}`)
    console.log(res.data);
    if(res.data.deletedCount>0){
        //refetch to update the ui
        refetch()
   Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${item.name} has been deleted`,
  showConfirmButton: false,
  timer: 1500
});
    }

    

    
  }
});
        

    }
    
    const handleUpdateItem=(item)=>{
        console.log(item);

        

    }

    return (
        <div>
            <div className='-mt-10'>

            <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up!'} />
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        menu.map((item,index)=>
                        <tr key={item._id}>
                            
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
                            <td>
                               <Link to={`/dashboard/updateItem/${item._id}`} onClick={()=>handleUpdateItem(item)} className="btn btn-ghost ">
                                    <FaRegEdit  className='text-orange-500 ' />
                                </Link>
                            </td>
                            <td>
                               <button onClick={()=>handleItemDelete(item)} className="btn  btn-ghost "><FaRegTrashCan className='text-red-600' />
                                        </button>
                            </td>
                        </tr>)
                      }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;