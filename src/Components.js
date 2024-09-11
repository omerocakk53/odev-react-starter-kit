import style, { css, styled } from "styled-components"




export const Div = styled.div`
display:flex;
justify-content:center;
margin-top:10px;
`

export const Color = styled.button`
margin-top:50px;
font-size:2rem;
font-weight:bolder;
border-radius:15px;
border-width:3px;
border-color:white;

height:50px;
width:100px;
${props => props.theme === 'red' && css`
    background:red;
    color:white;
    
`}
${props => props.theme === 'green' && css`
    background:green;
    color:black;
`}

${props => props.theme === 'blue' && css`
    background:blue;
    color:white;
`}

${props => props.theme === 'yellow' && css`
    background:yellow;
    color:black;
`}


`

export const SayacButton = styled.button`

font-size:2rem;
font-weight:bolder;
border-width:3px;
border-color:white;


${props => props.theme === 'sayacArti' && css`
    background:green;
    color:black;
    height:50px;
    width:50px;
    margin-top:50px;
    border-bottom:0;
    border-radius:15px 15px 0 0;
`}
${props => props.theme === 'sayacEksi' && css`
    background:red;
    color:black;
    height:50px;
    width:50px;
    border-top:0;
    border-radius:0 0 15px 15px;

`}
`


