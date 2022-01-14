import styled from 'styled-components';

export const Title = styled.h1`
font-size: 10px;
color: #000001;
font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #a9a9a9;
`;

export const GlobalStyle = styled.form`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        }
            body {
                background-color: #312E38;
                color: #FFF;

            button {
                cursor: pointer;
            }

            h1, h2, h3, h4, h5, h6, strong {
                font-weight: 500;
            }
        }
`;

