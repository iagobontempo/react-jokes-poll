import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ccf8ff;
    height: 60px;
    padding: 3px;
    margin: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ActionDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;

    button {
        border: 0;
        background-color: transparent;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: #eeeeee;
        border-radius: 20px;
        border: 3px solid #f44336;
        -webkit-box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.5);
        box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.5);

        p {
            font-size: 18px;
        }

    }
`

export const JokeDiv = styled.div`
    margin-right: 10px;
    width: 75%;
`

export const ReactionDiv = styled.div`
    background: #ccf8ff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    margin-top: -4px;
    font-size: 40px;

    span {
        text-shadow: 0px 3px 4px rgba(0,0,0,0.41);
    }
`