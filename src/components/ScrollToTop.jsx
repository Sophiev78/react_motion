import styled from "styled-components";
import {FaChevronUp} from 'react-icons/fa';
import { useState } from "react";

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);


    window.addEventListener("scroll", ()=>{
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false); ;
    })

    return (
        <Div>
            <a href="#nav" className={`${visible ? "":"hide"}`}><FaChevronUp/> </a>
        </Div>
    );
};

const Div = styled.div`

a{
    background-color:var(--primary-color);
    color:var(--secondary-color);
    opacity:0.7;
    border-radius:50%;
    width:5%;
    height:10%;
    display:block;
    position:fixed;
    bottom:10px;
    right:10px;
    font-size:3.2rem;
    text-align:center;
    z-index:1;
}

.hide{
    display:none;
}

@media screen and (max-width:768px){
    a{
        width:10%;
        height:7.5%;
        font-size:2.2rem;
    }
}
@media screen and (min-width:769px) and (max-width:1200px){
    a{
        width:6%;
        height:9%;
        font-size:3rem;
    }
}

`;
export default ScrollToTop;