import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../../styles/global.css'

import sliderimg1 from '../../../assets/home/01.jpg'
import sliderimg2 from '../../../assets/home/02.jpg'
import sliderimg3 from '../../../assets/home/03.png'
import sliderimg4 from '../../../assets/home/04.jpg'
import sliderimg5 from '../../../assets/home/05.png'
import sliderimg6 from '../../../assets/home/06.png'



const Banner = () => {
    return (
         <Carousel
      showThumbs={true}
      infiniteLoop
      showStatus={false}
      className='custom-caousel '
      
      
      
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              zIndex: 2,
              top: 'calc(50% - 30px)',
              left: 15,
              width: 60,
              height: 60,
              fontSize: 32,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              zIndex: 2,
              top: 'calc(50% - 30px)',
              right: 15,
              width: 60,
              height: 60,
              fontSize: 32,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            ›
          </button>
        )
      }
    >

                <div>
                    <img src={sliderimg1} draggable={false}/>
                </div>

                <div>
                    <img src={sliderimg2} draggable={false}/>
                </div>

                <div>
                    <img draggable={false} src={sliderimg3} />
                </div>
                <div>

                    <img draggable={false} src={sliderimg4} />
                </div>

                <div>

                    <img draggable={false} src={sliderimg5} />
                </div>
                <div>

                    <img draggable={false} src={sliderimg6} />
                </div>
            </Carousel>
    );
};

export default Banner;