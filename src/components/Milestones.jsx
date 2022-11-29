import milestone1 from '../assets/milestone1.png';
import milestone2 from '../assets/milestone2.png';
import milestone3 from '../assets/milestone3.png';
import milestoneBackground from '../assets/milestone-background.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {milestonesAnimation} from '../Animations';
import UseScroll from './UseScroll.jsx';


const Milestones = () => {

    const [element, controls]= UseScroll();

    const milestones = [
        {
            image : milestone1,
            data: "Client Served",
            amount:"877"
        },
        {
            image : milestone2,
            data: "Of raw data",
            amount:"1.4M"
        },
        {
            image : milestone3,
            data: "Reviews",
            amount:"5.4K"
        }
    ]

    return (
        <Section ref={element}>
            <div className='milestones'>
            {milestones.map(({image, data,amount})=>(
                    <motion.div className='milestone'
                     variants={milestonesAnimation}
                     animate = {controls}
                     transition ={{delay:0.03, type:"tween", duration:0.8}}
                    >
                        <p>{amount}</p>
                        <span>{data}</span>
                        <img src={image} alt="Milestone"/>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

const Section = styled.section`
background: url(${milestoneBackground}) no-repeat left;
background-size: 30%;
background-position-y:bottom;
background-color : var(--primary-color);
height:100vh;

.milestones{
   padding-top:200px;
   display:flex;
   justify-content:space-evenly;
   align-items:center;

   .milestone{

        p{
            color:#fff;
            font-size:5rem;
            font-weight:bold;
        }
        span{
            text-align:center;
            color:#fff;
        }
        
    display:flex;
    flex-direction: column;
    }

   
}
@media screen and (max-width:768px){
    height:210vh;
   
    .milestones{
        display:flex;
        flex-direction:column;
        gap:6rem;
    }
}

`;

export default Milestones;