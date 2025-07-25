import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure()

    const {data:payments=[]}=useQuery({
        queryKey:['payments', user.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>         
            <h2 className="text-3xl">Total Payments: {payments.length}</h2>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>

        {
            payments.map((payment, index)=> <tr key={payment._id}>
        <td>{index+1}</td>
        <td>${payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.date}</td>
        <td>{payment.status}</td>
      </tr> )
        }
      
    
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;