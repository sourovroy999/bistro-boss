// import { Helmet } from "react-helmet-async";
import About from "./about/About";
import Banner from "./Banner/Banner";
import CallNow from "./Callnow/CallNow";
import Category from "./category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import OurRecommends from "./shouldTry/OurRecommends";
import Testimonials from "./testimonial/Testimonials";

const Home = () => {
    return (
        <div className="">

               {/* <Helmet>
            <title>Home | Bistro Boss Restaurant</title>
                </Helmet> */}
           
            <Banner/>

            <Category/>

            

            <About/>


            <PopularMenu/>

            <CallNow/>
            <Featured/>

            <Testimonials/>

            <OurRecommends/>
        </div>


    );
};

export default Home;