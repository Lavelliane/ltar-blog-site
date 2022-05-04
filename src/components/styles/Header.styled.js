import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  font-family: "EB Garamond", serif;

  hr {
    margin: 10px;
  }

  .header-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }
  h1 {
    font-family: "Chomsky", sans-serif;
  }
`;
export default Wrapper;
