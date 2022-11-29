import styled from 'styled-components';
import loadmore from '../assets/loadmore.png';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';
import portfolio7 from '../assets/portfolio7.jpg';
import portfolio8 from '../assets/portfolio8.jpg';
import portfolio9 from '../assets/portfolio9.jpg';
import portfolio10 from '../assets/portfolio10.jpg';
import { motion } from 'framer-motion';
import { portfolioAnimation } from '../Animations';
import UseScroll from './UseScroll';

const Portfolio = () => {

    const [element, controls] = UseScroll();

    const images =[
        {image: portfolio3},
        {image:portfolio4},
        {image:portfolio5},
        {image:portfolio6},
        {image:portfolio7},
        {image:portfolio8},
        {image:portfolio9},
        {image:portfolio10}
    ]

    return (
        <Section ref={element}>
            <div className='grid'>
                {images.map(({image})=>(
                    <motion.img src={image} alt="images"
                     variants={portfolioAnimation}
                     animate = {controls}
                     transition ={{delay:0.03, type:"tween", duration:0.8}}
                    />
                ))}
            </div>
            <div className ='load'>
                <span>Load more</span><br/>
                <img src={loadmore} alt="loadmore" />
            </div>
        </Section>
    );
};

const Section = styled.section `
background-color: var(--secondary-color);

.load{
    text-align:center;
  }

 .grid{
    display: grid;
    grid-template-columns: repeat (4,1fr);
    grid-template-areas: 
    "one one two two"
    "one one three four"
    "five six seven seven"
    "eight six seven seven";

    img{
        width:100%;

        &:nth-child(1){
            grid-area:two;
        } &:nth-child(2){
            grid-area:one;
            height:100%;
        } &:nth-child(3){
            grid-area:three;
        } &:nth-child(4){
            grid-area:four;
        } &:nth-child(5){
            grid-area:five;
        } &:nth-child(6){
            grid-area:six;
            :100%;
        } &:nth-child(7){
            grid-area:seven;
            height:75%;
        } &:nth-child(8){
            grid-area:eight;
        }
 }


`;

export default Portfolio;