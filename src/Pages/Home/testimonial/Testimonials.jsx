import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';



import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


const Testimonials = () => {
    const [reviews, setReviews]=useState([])

    console.log(reviews);
    

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data=> setReviews(data))

    },[])


    return (
       <section>
         <SectionTitle heading={'What Our Client Say'} subHeading={'Testimonials'}>

         </SectionTitle>


         <Swiper navigation={true} modules={[Navigation]} className="mySwiper -mt-20 max-w-3xl mx-auto ">

              {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}

            {
                reviews.map(review=> 
        <SwiperSlide key={review._id}>
            <div className='m-24 flex  flex-col gap-3 items-center '>

                   <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
            readOnly
    />
                
               <FontAwesomeIcon className='text-6xl' 
                 icon={faQuoteLeft} />
              


                <p>{review.details}</p>
                <h2 className='text-2xl text-orange-500'>{review.name}</h2>
            </div>

        </SwiperSlide>

                 )
            }

     
        
      </Swiper>
       </section>
    );
};

export default Testimonials;