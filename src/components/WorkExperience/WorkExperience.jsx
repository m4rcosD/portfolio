import React, {useRef} from 'react'
import './WorkExperience.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { WORK_EXPERIENCE } from "../../utils/data"
import Slider from 'react-slick'
import ArrowBack from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';

const WorkExperience = () => {

const sliderRef = useRef();
        
const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    slideToShow: 2,
    slideToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
    ],
};

    const slideRight = () => {
        sliderRef.current.slickNext();
    };
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

  return (
        <section className='Experience-container' id='Work-Experience-section'>
            <h5>Work Experience</h5>

            <div className='experience-content' >
                <div className='arrow-right' onClick={slideRight}>
                    <span>
                        <ArrowForward className='ArrowBack'></ArrowForward>
                    </span>
                </div>

                <div className='arrow-left' onClick={slideLeft}>
                    <span>
                        <ArrowBack className='ArrowForward'></ArrowBack>
                    </span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard key={item.tittle} details={item} />
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience