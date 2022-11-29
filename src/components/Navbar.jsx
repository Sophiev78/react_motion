import styled from 'styled-components';
import logo from '../assets/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {navAnimation} from '../Animations';
import UseScroll from './UseScroll.jsx';


const Navbar = () => {

    const [element, controls]= UseScroll(); // animation au scroll

    const [navIsOpen, setNavIsOpen] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    useEffect(()=>{

        const changeWidth = ()=>{
            setLargeur(window.innerWidth)
        }

        window.addEventListener('resize',changeWidth)

        return()=>{
            window.removeEventListener('resize',changeWidth)
        }
    },[])

    return (
       <Nav id="nav" ref={element}
       variants={navAnimation}
       animate = {controls}
       transition={{delay:0.1}}
       >
            <div className='container'>
                <a href="#" className='logo'>
                    <img src= {logo} alt="logo"/>
                </a>
                {(navIsOpen || largeur > 900) && (
                    <div className="links">
                        <NavLink to='/' className={(nav)=>nav.isActive ? "active":""}>Home</NavLink>
                        <NavLink to='/Services' className={(nav)=>nav.isActive ? "active":""}>Services</NavLink>
                        <NavLink to='/Portfolio' className={(nav)=>nav.isActive ? "active":""}>Portfolio</NavLink>
                        <NavLink to='/Blog'className={(nav)=>nav.isActive ? "active":""}>Blog</NavLink>
                        <NavLink to='/Skills'className={(nav)=>nav.isActive ? "active":""}>Skills</NavLink>
                        <NavLink to='/Contact'className={(nav)=>nav.isActive ? "active":""}>Contact</NavLink>
                    </div>
                )}
                <div className='menuBurger' onClick={()=>setNavIsOpen(!navIsOpen)}>{navIsOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                </div>
            </div>
       </Nav>
    );
};

const Nav =styled(motion.nav)`
background-color: var(--primary-color);
height: 15vh;
.container{
    display: flex;
    justify-content: space-evenly;
    align-items:center;
}
.logo{
    margin-top: 15px;
}

.menuBurger{
    display:none;
}

.links a{
    margin:10px;
    text-decoration:none;
    color:#fff;
    text-transform: uppercase;
    font-weigth: 400;
}

.links a:hover{
    color: var(--secondary-color);

}
.links .active{
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);

}

@media screen and (max-width:900px) {
   
    height:20vh;
    overflow:scroll;

    .container{
        display: flex;
        flex-direction:column;
    }
    .menuBurger{
        display:block;
        margin-top: 2%;
        color:#fff;
        font-size:2rem;
    }

    .links{
        display:flex;
        flex-direction:column;
        width: 100%;
    }
}
`;

export default Navbar;