import styled from 'styled-components';
import home from '../assets/home.png';
import play from '../assets/play.png';
import Services from './Services';
import Portfolio from './Portfolio';
import Milestones from './Milestones';
import Blog from './Blog';
import Pricing from './Pricing';
import Testimonial from './Testimonial';
import Skills from './Skills';
import { motion } from 'framer-motion';
import {homeAnimation, homeInfoAnimation } from '../Animations';
const Home = () => {

    return (
        <>
            <Section /*background pinceau rose*/>
                <motion.div className='content-home'
                variants={homeAnimation}
                transition={{delay:0.3, duration:0.6, type:"tween"}}
                >
                        <h1>Blossoms Parlour</h1>
                        <p>All the beauty Parlour, we believe in beauty with a conscience.
                            We have created a salon that offers the high quality hair services
                        </p>
                        <img src = {play} width="50"  alt="arrow button"/>
                </motion.div>
                <motion.div className='vignette'
                 variants={homeInfoAnimation}
                 transition={{delay:0.3, duration:0.6, type:"tween"}}
                >
                    <div className='grid-infos'>
                        <div className='col'>
                            <strong>Parlour</strong>
                            <p>Blossom Academy</p>
                        </div>
                        <div className='col'>
                            <strong>Email</strong>
                            <p>Blossom@gmail.com</p>
                        </div>
                        <div className='col'>
                            <strong>Mobile</strong>
                            <p>+91 889766</p>
                        </div>
                        <div className='col'>
                            <strong>Adress</strong>
                            <p>322, Long Fly<br/>London</p>
                        </div>
                        <div className='col'>
                            <strong>Services</strong>
                            <p>SPA cream</p>
                        </div>
                        <div className='col'>
                            <strong>Working Hours</strong>
                            <p>Monday to Friday<br/> 9 am to 19 pm</p>
                        </div>
                    </div>
                </motion.div>
            </Section>

            <Services/>
            <Portfolio/>
            <Milestones/>
            <Blog/>
            <Pricing/>
            <Testimonial/>
            <Skills/>
           
        </>
    )
};

const Section = styled.section`
    background:url(${home}) center;
    height:100vh;
    background-size:cover;
    position:relative;

    .content-home{
        color:#fff;
        display:flex;
        flex-direction:column;
        margin-left:20%;
        gap:2rem;
        h1{
            margin-top:5%;
            font-size:5rem;
            line-height:5.3rem;
        }
        p{
            width:30%;
        }
    }
    .vignette{
        position: absolute;
        right:0;
        bottom:-50px;
        background-color: var(--secondary-color);
        padding: 4rem;
        .grid-infos{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 1rem;
            color: #fff;
        } 
    }
@media screen and (max-width:768px){
    height:130vh;

    .content-home{
        margin:0 auto;
    }
}

    `;

export default Home;

