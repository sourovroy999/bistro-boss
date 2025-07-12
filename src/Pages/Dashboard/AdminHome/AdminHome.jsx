import useAuth from '../../../Hooks/useAuth';
import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaDollarSign, FaUsers, FaUtensils, } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, ResponsiveContainer, Legend  } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


// pie chart



// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

//custom shape for the pie chart

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};




const AdminHome = () => {
    const{user}=useAuth();
    const axiosSecure=useAxiosSecure();


    const {data:stats={revenue:0}}=useQuery({
        queryKey:['admin-stats'],
        queryFn: async()=>{
            const res=await axiosSecure.get('/admin-stats');

            return res.data;

        }
    })

    const{data: chartData=[]}=useQuery({
      queryKey:['order-stats'],
      queryFn: async()=>{
        const res=await axiosSecure.get('/order-stats');

        return res.data;
      }
    })
    console.log(chartData);
    
   

    const {users, menuItems, orders, revenue}=stats;
    //  const roundedrevenue=Number(revenue.toFixed(4));
    console.log(typeof(revenue));
    // const orev=revenue.toFixed(4);
    // console.log(orev);
    const roundedRevenue=revenue? parseFloat(revenue.toFixed(4)) :0 ; 

    // console.log(orev);


    //custom shape for the bar 
    const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const pieChartData=chartData.map(data=>{
  return {name:data.category, value:data.totalRevenue}
})
    
    


    console.log(stats);
    
    return (
        <div>
            <h2 className="text-3xl">Hi, {user?.displayName} welcome back </h2>

            <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary text-3xl">
     <FaDollarSign className='text-4xl'/>

     
     
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">{roundedRevenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaUsers className='text-4xl'/>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <MdPayments className='text-4xl' />
      
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaUtensils className='text-4xl'/>
      
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{menuItems}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
            </div>

            <div className="flex">
              <div>

                 <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="totalQuantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>

              </div>


{/* pie chart */}
              <div>
    {/* <ResponsiveContainer width="100%" height="100%"> */}
      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend/>
      </PieChart>
    {/* </ResponsiveContainer> */}

              </div>
            </div>


        </div>
    );
};

export default AdminHome;