import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1.2fr 0.8fr 0.6fr;
  grid-template-rows: 0.2fr 0.1fr 1.3fr 0.3fr;
  grid-template-areas:
    "heading heading heading"
    "act act act"
    "featured main secondary"
    "footer footer footer";

  .heading {
    grid-area: heading;
  }
  .activity-nav {
    grid-area: act;
  }
  .featured {
    background-color: bisque;
    grid-area: featured;
  }
  .main-body {
    border-left:1px solid grey;
    
    grid-area: main;
  }
  .secondary-body {
    border-left:1px solid grey;
    grid-area: secondary;
  }
  .footer {
    background-color: burlywood;
    grid-area: footer;
  }
`;

export default Wrapper;
