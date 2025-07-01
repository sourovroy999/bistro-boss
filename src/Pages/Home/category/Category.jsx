
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import categoryOne from '../../../assets/home/slide1.jpg'
import categoryTwo from '../../../assets/home/slide2.jpg'
import categoryThree from '../../../assets/home/slide3.jpg'
import categoryFour from '../../../assets/home/slide4.jpg'
import categoryFive from '../../../assets/home/slide5.jpg'




// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {

  return (
    <>
      <section>
        <SectionTitle
        subHeading={'From 11.00 am to 10.00pm'}
        heading={'ORDER ONLINE'} >


        </SectionTitle>

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:1500,
          disableOnInteraction:false
        }}
         speed={1800} // ✅ Smooth transition duration in ms
        modules={[Pagination, Autoplay]}
        className="mySwiper my-20 max-w-4xl"
      >
        <SwiperSlide>
            <img src={categoryOne} alt="" />
            <h3 className='-mt-20 text-center text-white  text-3xl uppercase'>Salad</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={categoryTwo} alt="" />
             <h3 className='-mt-20 text-center text-white  text-3xl uppercase'>Pizza</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={categoryThree} alt="" />
             <h3 className='-mt-20 text-center text-white  text-3xl uppercase'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={categoryFour} alt="" />
            <h3 className='-mt-20 text-center text-white  text-3xl uppercase'>Dry Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={categoryFive} alt="" />
             <h3 className='-mt-20 text-center text-white  text-3xl uppercase'>Salad</h3>
        </SwiperSlide>
        
      </Swiper>
      </section>
    </>
  );
};

export default Category;
