import styled from 'styled-components';
import {BsFacebook, BsTwitter, BsYoutube, BsBehance} from 'react-icons/bs';

const Footer = () => {
    return (
        <Section>
            <span>&copy; React Website</span>
            <div className='networks'>
                <BsFacebook/>
                <BsTwitter/>
                <BsYoutube/>
                <BsBehance/>
            </div>
        </Section>
    );
};
const Section = styled.section`
height:20vh;
display:flex;
justify-content:space-evenly;
align-items:center;
background-color: var(--primary-color);
color:#fff;

.networks{
    display:flex;
    gap: 2rem;
    svg{
        font-size:1.4rem;
        &:hover{
            color:var(--secondary-color);
        }
    }
}

`;

export default Footer;