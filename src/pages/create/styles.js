import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100vw;
  height: 100vh;

  border: none;

  h1 {
    font-size: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 10px;

    input{
      margin: 20px;
    }
  }
`;
