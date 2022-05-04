import Wrapper from "../components/styles/Header.styled";

function Header() {
  return (
    <Wrapper>
      <hr />
      <div className="header-container">
        <h3>
          Wednesday
          <br />
          May 4, 2022
        </h3>
        <h1>The CpE Times</h1>
        <h3>Issue #1</h3>
      </div>
      <hr />
    </Wrapper>
  );
}
export default Header;
