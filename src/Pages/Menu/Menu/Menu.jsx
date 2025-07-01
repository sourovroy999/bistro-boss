import React from 'react';

import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuCoverImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import drinkImg from '../../../assets/menu/drinks.jpeg'

const Menu = () => {

    const [menu]=useMenu();
    const desserts=menu.filter(item=> item.category ==='dessert')
    const pizza=menu.filter(item=> item.category ==='pizza')
    const soup=menu.filter(item=> item.category ==='soup')
    const salad=menu.filter(item=> item.category ==='salad')
    const offered=menu.filter(item=> item.category ==='offered')
    const drinks=menu.filter(item=> item.category ==='drinks')


    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss Restaurant</title>
            </Helmet>

            <Cover title={'Our menu'} img={menuCoverImg}/>

            {/* main cover */}
            <SectionTitle subHeading
            ={'Dont Miss'} heading={'todays offer'}  />
            {/* offered menu items */}
            <MenuCategory items={offered} />

            {/* dessert menu items */}
            <MenuCategory items={desserts} title={'dessert'}  coverImg={dessertImg} />

            {/* pixxa menu items */}
            <MenuCategory coverImg={pizzaImg} items={pizza} title={'pizza'}/>

            {/* salad menu items */}
            <MenuCategory items={salad} title={'salad'} coverImg={saladImg} />

            {/* soup menu items */}
            <MenuCategory items={soup} title={'soup'} coverImg={soupImg}/>

            {/* menu items: drinks */}
            <MenuCategory items={drinks} title={'drinks'} coverImg={drinkImg}/>

            
        </div>
    );
};

export default Menu;