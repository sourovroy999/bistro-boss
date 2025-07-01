import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg  from '../../../assets/home/featured.jpg'

import './Featured.css'


const Featured = () => {
    return (
        <div className='mb-20 md:pb-40 pt-6 mt-20 featured-item bg-fixed text-white'>
            <SectionTitle  subHeading={'chek it out'} heading={'Featured Item'}/>
 
            <div className='md:flex justify-center bg-slate-500 opacity-80 items-center pb-12 pt-12 px-10 md:px-36 '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div  className='md:ml-10 '>
                    <p>March 20, 2023</p>
                    <p className='uppercase '>Can I get some</p>
                    <p>we believe food is more than just fuel — it's an experience. Every dish is crafted with care, using fresh, high-quality ingredients to bring you authentic flavors you'll love.

👉 Want to know how we started and what makes us special?</p>

<button className='uppercase  mt-3 btn btn-outline  border-0 border-b-4 '>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;