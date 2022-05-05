import Wrapper from "../components/styles/HomeWrapper.styled";
import Header from "../components/Header";
import Activities from "../components/Activities";
import Featured from "../components/Featured";

function Home() {
  return (
    <Wrapper>
      <div className="heading">
        <Header />
      </div>
      <div className="activity-nav">
        <Activities />
      </div>
      <div className="featured">
        <Featured />
      </div>
      <div className="main-body">MAIN</div>
      <div className="secondary-body">SECONDARY</div>
      <div className="FOOTER">FOOTER</div>
    </Wrapper>
  );
}
export default Home;
