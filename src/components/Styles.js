import styled from 'styled-components';

export const Heading = styled.h1`
// text-align: center;
color: green;
`;

export const Content = styled.div`
overflowY: scroll;
height: 0px;
`;

export const Button = styled.div`
position: fixed;
width: 100%;
left: 5%;
bottom: 50px;
height: 15px;
font-size: 2.5rem;
z-index: 1;
cursor: pointer;
color: #337ab7;

@media screen and (max-width: 480px) {
    left: 5%;
    bottom: 50px;


`