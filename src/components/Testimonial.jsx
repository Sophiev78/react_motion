import styled from 'styled-components';
import loadmore from '../assets/loadmore.png';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {testimonialAnimation} from '../Animations';
import UseScroll from './UseScroll.jsx';


const Testimonial = () => {

    const [element, controls]= UseScroll();

    const [selected, setSelected] = useState(0);

    const testimonials = [
        {
            designation:'SPA',
            name: "Julie Baker",
            review:"Perfection is by far one the best retreats round, professionnal in every aspect."
        },
        {
            designation:'Full make-up',
            name: "Natalia",
            review:"this is by far one the best retreats round, professionnal in every aspect."
        },
        {
            designation:'Skin',
            name: "Sofia",
            review:"Perfection is by far one the best retreats round, professionnal in every aspect."
        }
    ]

    return (
        <Section ref={element}>
            <motion.div className='testimonials'
            variants={testimonialAnimation}
            animate={controls}
            transition ={{delay:0.03, type:"tween", duration:0.8}}
            >
                {testimonials.map(({designation,name,review},index)=>(
                    <div className={`testimonial ${selected === index ? "" : "hidden"}`} key={index}>
                        <div id="loadmore">
                            <img src={loadmore} alt="loadmore"/>
                        </div>
                        <h2>{designation}</h2>
                        <h3>{name}</h3>
                        <p>{review}</p>
                    </div>
                ))}
            </motion.div>
            <div className='buttons'>
                <button className={selected === 0 ? "active":""} onClick={()=> setSelected(0)}></button>
                <button className={selected === 1 ? "active":""} onClick={()=> setSelected(1)}></button>
                <button className={selected === 2 ? "active":""} onClick={()=> setSelected(2)}></button>
            </div>
        </Section>
    );
};

const Section = styled.section `
height: 100vh;
overflow:hidden;
background-color: var(--primary-color);

.testimonials{
    margin-top: 5%;
    display:flex;
    justify-content:space-evenly;
    color:#fff;

    .testimonial{
        height:60vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;

        #loadmore{
            height:25%;
            width:20%;
            background-color:#8860e6b0;
            border-radius:50%;
                img{
                    margin:30% 32%;
                }
        }
        p{
            text-align:center;
            width:30%;
       }
    }

.hidden{
    display:none;
    }
}

.buttons{
    display:flex;
    justify-content:center;
    button{
        background-color:#8860e6b0;
        height:50px;
        width:50px;
        border:none;
        border-radius:50%;
        margin:0.5%;
    }
    .active{
        background-color:var(--secondary-color);
        border:solid 1px #fff;

    }
}

`;

export default Testimonial;