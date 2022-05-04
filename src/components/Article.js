import React from 'react';
import {Wrapper} from './styles/Article.styled'

const Article = ({author,title,snippet}) =>{

    return(
        // <Wrapper>
        //     <a>
        //         <img></img>
        //         <h3>{title}</h3>
        //         <div>{author}</div>
        //         <p>{snippet}</p>
        //     </a>
        // </Wrapper>
        <Wrapper>
        <div class="container">
  <div class="card">
    <div class="card__header">
      <img alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4>What's new in 2022 Tech</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img  alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>Jane Doe</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
      <img class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-brown">Food</span>
      <h4>Delicious Food</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img  class="user__image"/>
        <div class="user__info">
          <h5>Jony Doe</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
      <img   class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-red">Automobile</span>
      <h4>Race to your heart content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img class="user__image"/>
        <div class="user__info">
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
  </div>
</div>
</Wrapper>
    );
}

export default Article;