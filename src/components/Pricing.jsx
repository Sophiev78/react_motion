import styled from "styled-components";
import Title from "./Title";
import pricing1 from '../assets/pricing1.png';
import pricing2 from '../assets/pricing2.png';
import play from '../assets/play.png';
import { motion } from 'framer-motion';
import {pricingAnimation1,pricingAnimation2} from '../Animations';
import UseScroll from './UseScroll.jsx';


const Pricing = () => {

    const [element, controls]= UseScroll();

const plans = [
    {
        name:"Basic",
        price:13
    },
    {
        name:"Pro",
        price:35
    },
    {
        name:"Expert",
        price:77
    }
]

const data = [

    {
        value:"Full face Rs.250",
        type: "Basic"
    },
    {
        value:"Cheeks Rs.90",
        type: "Basic"
    },
    
    {
        value:"Under arms Rs.100",
        type: "Basic"
    },
    
    {
        value:"Full legs Rs.450",
        type: "Basic"
    },
    
    {
        value:"Half legs Rs.300",
        type: "Pro"
    },
    
    {
        value:"Daily backups",
        type: "Expert"
    },
    
    {
        value:"One Click Setup",
        type: "Expert"
    }
]

    return (
        <Section ref={element}>
            <Title value="PRICING"/>
            <div className="pricing_title">
                <p>Find your pricing plan</p>
                <h2>Finding the best salons in your city could be time consuming...</h2>
            </div>
            <div className="pricings">
                {plans.map(({name,price}, index)=>(
                    <div className="regroupe_les_3_columns">
                        <motion.div className="pricing" key={index}
                        variants={pricingAnimation1}
                        animate = {controls}
                        transition ={{delay:0.05, type:"tween", duration:0.8}}
                        >
                            <h2>{name}</h2>
                            <span>$<p>{price}</p></span>
                        </motion.div>
                        <motion.ul className={`${name}`}
                        variants={pricingAnimation2}
                         animate = {controls}
                         transition ={{delay:0.03, type:"tween", duration:0.8}}
                        >
                            {data.map(({value, type}, index2)=>(
                                <div key={index2}>
                                    {name === "Basic"?(
                                        type === name ? (
                                            <li>{value}</li>
                                        ) : (
                                            <li className="line">{value}</li>
                                        )
                                    ) : name === "Pro"?(
                                        type === "Basic" || type === name ?(
                                            <li>{value}</li>
                                        ): (
                                            <li className="line">{value}</li>
                                        )
                                    ) : (
                                            name === "Expert" && <li>{value}</li>
                                    )}
                                </div>
                            ))}
                        </motion.ul>
                        <div className="actions">
                            <span>Order Now</span><br/>
                            <img src={play} alt="arrow"></img>
                        </div>
                    </div>
                    ))}
                </div>
            </Section>
    );
};

const Section = styled.section`
padding:5 rem 0;
background: url(${pricing1})no-repeat;

.pricing_title{
    text-align:center;
    padding:20px;
    p{
        color: var(--secondary-color);
        text-transform:uppercase;
        letter-spacing:0.2rem;
    }
}
.pricings{
    margin-top:50px;
    display:flex;
    justify-content:space-evenly;
    background: url(${pricing2})no-repeat right bottom;

    .pricing{
        background-color:#000;
        border-radius:50%;
        height:30vh;
        width:150%;
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
    
        h2{
            color:var(--secondary-color);
            font-size:2rem;
        }
        span{
            color:#fff;
            p{
                color:#fff;
                font-size:2rem;
            }
        }
    }
    
    ul{
        list-style:none;
        text-align:center;
        border-right:2px solid;
        height:30vh;
        width:150%;
        margin-top:10%;
        line-height:2rem;

    }

    .actions{
        line-height:2rem;
        margin:20px auto;
        text-transform:uppercase;
        height:30vh;
        width:150%;
        text-align:center;
    }
    
}

}
@media screen and (max-width:768px){
    height:330vh;

    .pricings{
        display:flex;
        flex-direction:column;
        align-items:center;

        ul{
            border:none;
        
        }

    }
}
`;
export default Pricing;