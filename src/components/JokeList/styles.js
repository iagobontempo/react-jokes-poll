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
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.61); 
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.61);
    z-index: 999;

    h1 {
        color: white;
        font-size: 40px;
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
    }

    span {
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 100px;
        border-radius: 60px;
        width: 120px;
        height: 120px;
        background-color: #ccf8ff;
        position: relative;

        p {
            position: absolute;
            margin-top: -12px;
            margin-right: -1px;
        }

    }

    button {
        background-color: #e1faff;
        border-radius: 5px;
        width: 120px;
        height: 50px;
        background: #CCF8FF;
        background-image: -webkit-linear-gradient(top, #CCF8FF, #FFC83D);
        background-image: -moz-linear-gradient(top, #CCF8FF, #FFC83D);
        background-image: -ms-linear-gradient(top, #CCF8FF, #FFC83D);
        background-image: -o-linear-gradient(top, #CCF8FF, #FFC83D);
        background-image: linear-gradient(to bottom, #CCF8FF, #FFC83D);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        color: #FFFFFF;
        box-shadow: 0px 8px 15px -10px #000000;
        -webkit-box-shadow: 0px 8px 15px -10px #000000;
        -moz-box-shadow: 0px 8px 15px -10px #000000;
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
        border: 0;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        
            :hover {
            background: #FFC83D;
            background-image: -webkit-linear-gradient(top, #FFC83D, #CCF8FF);
            background-image: -moz-linear-gradient(top, #FFC83D, #CCF8FF);
            background-image: -ms-linear-gradient(top, #FFC83D, #CCF8FF);
            background-image: -o-linear-gradient(top, #FFC83D, #CCF8FF);
            background-image: linear-gradient(to bottom, #FFC83D, #CCF8FF);
            text-decoration: none;
            }
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