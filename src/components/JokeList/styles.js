import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const JokeHeader = styled.div`
    background-color: #00aace;
    width: 220px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1 {
        color: white;
    }

    button {
        background-color: #e1faff;
        border-radius: 5px;
        width: 120px;
    }
`

export const List = styled.div`
    background-color: #bff4ff;
    width: 800px;
    height: 600px;
    overflow:auto; 
`