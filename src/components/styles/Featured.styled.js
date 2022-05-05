import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
  font-family: "Poppins", sans-serif;
  h1 {
    font-family: "EB Garamond", serif;
  }
  .feature-img {
    height: 300px;
    width: 500px;
    margin: 10px 0;
  }
  .feature-img > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    font-size: 0.75rem;
  }

  .tag + .tag {
    margin-left: 0.5em;
  }

  .tag-black {
    background: #000000;
    color: #fafafa;
  }
`;

export default Wrapper;
