import styled from 'styled-components';
import play from '../assets/play.png';
import home from '../assets/home.png';
import Title from './Title';
import { motion } from 'framer-motion';
import {blogAnimation} from '../Animations';
import UseScroll from './UseScroll.jsx';

const Blog = () => {

    const [element, controls]= UseScroll();

    const articles = [

        {   image:home,
            title:"Parlour journal",
            type:'SPA',
            descripion: "lorem ipsum"
        },
        {   image:home,
            title:"Reflexology sky",
            type:'Relax',
            descripion: "lorem ipsum"
        },
        {   image:home,
            title:"meditation sun",
            type:'Yoga',
            descripion: "lorem ipsum"
        },
    ]

    return (
        <Section ref={element}
        variants={blogAnimation}
        animate= {controls}
        transition={{delay:0.3, duration:0.6, type:"tween"}}
        >
            <Title value="BLOG"/>
            <div className='articles'>
                {articles.map(({image,title,type,descripion})=>(
                    <div className='article'>
                        <img src={image} alt="home" width={400}/>
                        <h3>{title}</h3>
                        <span>{type}</span>
                        <p>{descripion}</p>
                        <img id="play"src={play} alt="arrow_read_more"/>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const Section = styled(motion.section)`
height:100vh;
border-bottom:5px solid var(--secondary-color);

.articles{
    margin-top:100px;
    display:flex;
    justify-content:space-evenly;
    height:50vh;
    }

    .article{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        h3{
            color: var(--secondary-color);
            text-transform:uppercase;
        }
        span{
            font-weight:bold;
            text-transform:uppercase;
        }
        #play{
            width:50px;
        }


    }
}

@media screen and (max-width:768px){
    height:210vh;

.articles{
    margin-top:70%;
    display:flex;
    flex-direction:column;
    align-items: center;
    gap:4rem;
    }
}

@media screen and (min-width:769px) and (max-width:1200px){
    height:250vh;

.articles{
    margin-top:50%;
    display:flex;
    flex-direction:column;
    align-items: center;
    gap:4rem;
    }
}


`;

export default Blog;