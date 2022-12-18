import styled, { createGlobalStyle } from "styled-components";
import BGImage from "../../Images/jakob_owens.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100vh;
    background-image: url(${BGImage});
    background-size: cover;
    background-repeat: no-repeat;
}

body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    background: linear-gradient(180deg, #fff, #87f1ff);
    color: black;
    background-color: #87f1ff;
    font-size: 2rem;
    margin: 20px 0;
    padding: 5px 20px;
    border-radius: 20px;
    font-weight: 400;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #87f1ff);
    border: 2px solid #0085a3;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

  .difficulty-easy,
  .difficulty-medium,
  .difficulty-hard {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #87f1ff);
    border-radius: 5px;
    margin: 5px;
    width: 65px;
    text-align: center;
    text-transform: capitalize;
    border: none;
    border: 2px solid #0085a3;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  }

  .selected-easy {
    border: 2px solid green;
    background: linear-gradient(180deg, #fff, green);
  }

  .selected-medium {
    border: 2px solid yellow;
    background: linear-gradient(180deg, #fff, yellow);
  }

  .selected-hard {
    border: 2px solid red;
    background: linear-gradient(180deg, #fff, red);
  }

  .difficulty-easy:hover,
  .difficulty-medium:hover,
  .difficulty-hard:hover {
    opacity: 0.8;
  }

  .disabled {
    border-radius: 5px;
    margin: 5px;
    width: 65px;
    text-align: center;
    text-transform: capitalize;
    border: none;
    border: 2px solid transparent;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  }
`;
