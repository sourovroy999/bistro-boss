import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories=['salad', 'pizza','soup', 'dessert', 'drinks' ]
      const {category}= useParams()

      const initialIndex=categories.indexOf(category)


      const [tabIndex, setTabIndex] = useState(initialIndex);

      console.log(category);
      

      const [menu]=useMenu();
       const desserts=menu.filter(item=> item.category ==='dessert')
    const pizza=menu.filter(item=> item.category ==='pizza')
    const soup=menu.filter(item=> item.category ==='soup')
    const salad=menu.filter(item=> item.category ==='salad')
    const drinks=menu.filter(item=> item.category ==='drinks')



    return (
        <div>

            <Helmet>
      <title>Order Food | Bistro Boss Restaurant</title>
                        </Helmet>
            <Cover title={'Order Food'} img={orderCover}/>
            
       

{/* react tabs */}

           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'flex my-10 gap-10  justify-center flex-col items-center'}>
    <TabList className={'flex gap-2'}>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>



    <TabPanel>
        <OrderTab items={salad}/>
    </TabPanel>

    <TabPanel>
        <OrderTab items={pizza}/>
    </TabPanel>

    <TabPanel>
      <OrderTab items={soup}/>
    </TabPanel>

    <TabPanel>
      <OrderTab items={desserts}/>
    </TabPanel>

    <TabPanel>
      <OrderTab items={drinks}/>
    </TabPanel>


  </Tabs>
        </div>
        
    );
};

export default Order;