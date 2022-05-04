import Wrapper from "../components/styles/HomeWrapper.styled";
import Header from "../components/Header";
import Activities from "../components/Activities";
import Article from "../components/Article"

function Home() {
  return (
    <Wrapper>
      <div className="heading">
        <Header />
      </div>
      <div className="activity-nav">
        <Activities />
      </div>
      <div className="featured">FEATURED</div>
      <div className="main-body">MAIN</div>
      <div className="secondary-body"><Article author="lorem" title="ipsum" snippet="lorem" /></div>
      <div className="FOOTER">FOOTER</div>
    </Wrapper>
  );
}
export default Home;
