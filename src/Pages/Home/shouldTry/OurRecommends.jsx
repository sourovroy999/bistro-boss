import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import RecommendCard from './RecommendCard';
import salad from '../../../assets/menu/salad-bg.jpg'

const OurRecommends = () => {
    return (
        <div className='mb-20 -mt-20'>
            <SectionTitle subHeading={'Should Try'} heading={'Cheff recommends'}/>

            <div className='grid max-w-4xl mx-auto px-5  md:grid-cols-3 gap-5'>


            <RecommendCard image={salad} details={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'} title={'Caeser Salad' }/>
            <RecommendCard image={salad} details={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'} title={'Caeser Salad' }/>
            <RecommendCard image={salad} details={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'} title={'Caeser Salad' }/>
       
            </div>
            
        </div>
    );
};

export default OurRecommends;