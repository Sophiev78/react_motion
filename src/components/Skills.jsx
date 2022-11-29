import styled from "styled-components";
import Title from './Title';
import { motion } from 'framer-motion';
import {skillsAnimation1,skillsAnimation2} from '../Animations';
import UseScroll from './UseScroll.jsx';

const Skills = () => {

    const [element, controls]= UseScroll();

    const skills = [
        {
            name: "Facial",
            amount:75
        },
        {
            name: "Skin",
            amount:50
        },
        {
            name: "SPA",
            amount:85
        },
        {
            name: "Cosmetic",
            amount:70
        },
        {
            name: "Salon",
            amount:90
        }
    ]
    return (
        <Section ref={element}>
            <Title value="SKILLS"/>

            <div className="skills_title">
                <h2>Our Skills</h2>
                <p>Check our super awesome skills</p>
            </div>
            <div className="skills">
                <div className="skill">
                    {skills.map(({name, amount})=>(
                        <motion.div className="skills_bar" key={name}
                        variants={skillsAnimation1}
                        animate={controls}
                        transition={{delay:0.03, duration:0.6, type:"tween"}}
                        >
                            <progress value={amount} max="100"/>
                            <span>{name}</span>
                            <h3>{amount}%</h3>
                        </motion.div>
                    ))}
                </div>
                <motion.div className="skills_content"
                 variants={skillsAnimation2}
                 animate={controls}
                 transition={{delay:0.03, duration:0.6, type:"tween"}}
                >
                    <p>Beauty Services and products</p><br/>
                    <p>To be successful beautician, you should have a wide range of skills in beauty services, good
                        communication skills and the ability to advise clients on suitable hairstyles.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};

const Section = styled.section`
overflow:hidden;
background-color: var(--secondary-color);

h1,h2{
    color:#fff;
}
p{
    color:#fff;
}

.skills_title{
    display:flex;
    flex-direction: column;
    align-items:center;
    text-transform:uppercase;
    h2{
        color:var(--primary-color);

    }
}
.skills{
    display:flex;
    align-items:center;
    padding:0 5% 0 20%;
    gap:5rem;
    .skill{
        transform:rotate(-90deg);
    }
    .skills_bar{
        margin: 10%;
            progress{
                width:30rem;
                border-radius:20px;
                }
            span{
                text-transform:uppercase;
            }
            h3{
                color:#fff;
                font-weight:bold;
            }
        }
}

.skills_content{
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:2rem;
    p{
        width:50%;
    }
}

@media screen and (max-width:768px){
    height:210vh;

    .skills{
        display:flex;
        flex-direction:column;
        align-items:center;
        .skill{
            transform:rotate(0deg);
        }
}
`;
export default Skills;