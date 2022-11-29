import styled from "styled-components";
import Title from './Title';

const Contact = () => {
    return (
        <Section>
            <Title value ="CONTACT"/>

            <div className="contact">
                <h2>Stay in touch with me</h2>
                <p>Quick Contact</p>
                <div className="form">
                    <div className="blabla">
                        <h3>Just to say it</h3>
                        <p>If you have any questions simply use<br/> the following contact details.</p>
                        <p>Business Owners to take their  Online<br/> presence to the next level.</p>
                        <p><strong>Adress : </strong> 33, Flyover Road</p>
                        <p><strong>Email : </strong>blossom@gmail.com</p>
                        <p><strong>Website : </strong> www.blossom.com</p>
                    </div>
                    <form>
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                        <textarea placeholder="message"/>
                        <button>Send</button>
                    </form>
                </div>        
            </div>
        </Section>
    );
};

const Section = styled.section`
height:100vh;
overflow:hidden;
background-color: var(--primary-color);
border-top: 1px solid var(--secondary-color);

.contact{
    margin:0 18rem;
    text-transform:uppercase;
    h2{
        margin-top:5%;
        color:#fff;
    }
    p{
    color: var(--secondary-color);
    }
}

.form{
    display: flex;
    justify-content:space-between;
    .blabla{
        margin-top:5%;
        display:flex;
        flex-direction: column;
        gap:2rem;
        h3{
            color:#fff;
        }
        strong{
            color:#fff;
        }
    }

    form{
        width:50%;
        display:flex;
        flex-direction:column;
        gap:4rem;
        input,textarea{
            background-color: var(--primary-color);
            border:none;
            border-bottom: 2px solid var(--secondary-color);
            &:focus{
                outline:none;
            }
        }
        input{
            height:10%;
        }
        input[type],textarea{
            text-transform: uppercase;
            color:#fff;
        }
        button{
            width:50%;
            height:10%;
            margin:0 auto;
            border:1px solid var(--secondary-color);
            background-color: var(--primary-color);
            text-transform:uppercase;
            color:#fff;
            transition: background-color 0.2s ease-in-out;
            &:hover{
                background-color: var(--secondary-color);
            }
        }
    }
}

@media screen and (max-width: 748px) {
    height:200vh;

    .contact{
        width:50%;
        margin:0 auto;
    }
    .form{
        margin-top:10%;
        display: flex;
        flex-direction:column;
        
        form{
            margin-top:20%;
            width:100%;
                button{
                    width:100%;
                }
        }
       

    }
}
`;

export default Contact;