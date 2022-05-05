import Wrapper from "../components/styles/HomeWrapper.styled";
import Header from "../components/Header";
import Activities from "../components/Activities";
import Article from "../components/Article";

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
      <div className="main-body">
      <Article
          grid='main'
          activity="Move Essay"
          author="Jay Degamo"
          title="Black Widow"
          imagePath="1.jpeg"
          avatarPath="avatar.png"
          snippet="In Marvel Studios' action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises."
        />
        <Article
          grid='main'
          activity="Move Essay"
          author="Jhaycee Acain"
          title="Black Widow"
          imagePath="2.jpg"
          avatarPath="avatar2.png"
          snippet="In Marvel Studios' action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises."
        />
      </div>
      <div className="secondary-body">
      <Article
          grid='secondary'
          activity="Move Essay"
          author="Jay Degamo & Friends"
          title="Black Widow"
          imagePath="1.jpeg"
          avatarPath="avatar.png"
          snippet="In Marvel Studios' action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises."
        />
      </div>
      <div className="FOOTER">FOOTER</div>
    </Wrapper>
  );
}
export default Home;
