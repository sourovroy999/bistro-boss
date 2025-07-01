import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/menuitems/MenuItems';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../../Menu/MenuCategory/MenuCategory';

const PopularMenu = () => {

    const [menu]=useMenu();
    const popular= menu.filter(item => item.category === 'popular')


    return (
        <section>

       <SectionTitle
       heading={'From our menu'}
       subHeading={'Popular Menu'}>

       </SectionTitle>

        <MenuCategory items={popular}/>


            <button className="btn mt-10 btn-outline flex hover:bg-blue-400  hover:text-white border-0 border-b-4  justify-center mx-auto">VIEW FULL MENU</button>


        </section>


      
    );
};

export default PopularMenu;