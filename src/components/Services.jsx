import styled from 'styled-components';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import play from '../assets/play.png';
import Title from './Title';
import { motion } from 'framer-motion';
import {servicesAnimation} from '../Animations';
import UseScroll from './UseScroll.jsx';

const Services = () => {
    const [element, controls]= UseScroll();


    const services = [
        {
        type:"Blowout",
        text : "Shampoo and blow dry. If you are looking to celebrate your special day with us,Please have 3 stylistes",
        image : service1
        },
        {
        type:"Olaplex",
        text : "Hair treatment helping keep coloured hair healthy from the inside for the complete hydratation",
        image : service2
        },
        {
        type:"Retouch",
        text : "We bring to a bouquet of services to remain worry free about your looks",
        image : service3
        }
    ];

    return (
        <Section ref = {element}
        variants = {servicesAnimation}
        animate = {controls}
        transition={{delay:0.1}}
        type="tween"
        >
            <Title value="SERVICES"/>
            <div className='services'>
            {services.map(({type,text,image}, index)=>(
                    <div className='OneService'>
                        <img src = {image} alt="Service"/>
                        <h2><span>0{index + 1}. </span>{type}</h2>
                        <p>{text}</p>
                        <img id="play"src={play} alt="Read more"/>
                    </div>
                ))}
            </div>
        </Section>
    );
};


const Section = styled(motion.section)`
height:100vh;
width:100%;

.services{
    margin-top: 50px;
    display:flex;
    justify-content: center;
}
.OneService{
    height:70vh;
    width:100%;
    margin: 0 auto;
    text-align:center; 
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    
    img{
        width:150px;
    }
    h2{
        color: var(--secondary-color);
        text-transform: uppercase;
    }
    #play{
        width:50px;
    }
}
.OneService:nth-child(2){
    background-color: var(--primary-color);
    color:#fff;
}

@media screen and (max-width:768px){
    height:250vh;

    h1{
        margin-top:30%;
    }
    .services{
        display:flex;
        flex-direction:column;
    }
}

`;

export default Services;