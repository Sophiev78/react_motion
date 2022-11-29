import styled from 'styled-components';

const Title = (props) => {
    return (
        <Div>
            <h1>{props.value}</h1>
        </Div>
    );
};

const Div = styled.div `
h1{
    margin-top:50px;
    text-align: center;
    letter-spacing: 0.5rem;
    font-size:5rem;
    color: var(--secondary-color);

`;


export default Title;