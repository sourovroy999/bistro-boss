import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaRegTrashCan, FaUser, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })

    const handleDeleteUser=(user)=>{
          console.log(user);
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
        
            axiosSecure.delete(`/users/${user._id}`)
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

    const handleMakeAdmin=(user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount >0){
                refetch()
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${user.name} is admin now`,
  showConfirmButton: false,
  timer: 3000
});
            }
        })

    }

    return (
        <div>
            <div className="flex justify-evenly my-4">

                <h1>All userss</h1>
                <h1>Total users: {users.length}</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className="">Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=> <tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
             {
                user.role=== 'admin' ? 'admin': <button onClick={()=>handleMakeAdmin(user)} className="btn  btn-lg">
               <FaUsers className='text-orange-500 text-2xl' />
             </button>
             }
              </td>

           <td>
              <button onClick={()=>handleDeleteUser(user)} className="btn  btn-lg"><FaRegTrashCan className='text-red-500' />
            </button>
           </td>
              </tr>
              
            )
              }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;