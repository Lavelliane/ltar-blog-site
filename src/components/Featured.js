import Wrapper from "./styles/Featured.styled";

function Featured() {
  return (
    <Wrapper>
      <div className="feature-img">
        <img src="https://i.ytimg.com/vi/2YhEN1ET1hk/maxresdefault.jpg" />
      </div>
      <div className="text-content">
        <h4>5/5/2022</h4>
        <span className="tag tag-black">Featured</span>
        <h1>Movie Analysis: Ordinaryong Pamilya</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          repellendus quae ipsa doloremque, possimus quia provident! Est
          laboriosam consectetur porro. Minima qui id ipsam perferendis maxime
          ducimus? Minima, maxime repellat.
        </p>
      </div>
    </Wrapper>
  );
}
export default Featured;
