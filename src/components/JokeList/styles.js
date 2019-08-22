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
    height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.61); 
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.61);
    z-index: 999;


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
    overflow: auto; 
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.4); 
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.4);
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #fff;

        svg {
            animation-name: spin;
            animation-duration: 2000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @-ms-keyframes spin {
            from { -ms-transform: rotate(0deg); }
            to { -ms-transform: rotate(360deg); }
        }
        @-moz-keyframes spin {
            from { -moz-transform: rotate(0deg); }
            to { -moz-transform: rotate(360deg); }
        }
        @-webkit-keyframes spin {
            from { -webkit-transform: rotate(0deg); }
            to { -webkit-transform: rotate(360deg); }
        }
        @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }
    }
`