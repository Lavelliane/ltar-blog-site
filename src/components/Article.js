import React from "react";
import { Wrapper } from "./styles/Article.styled";


const Article = ({ grid,activity, author, title, snippet,imagePath,avatarPath }) => {
  
  const isMain = (place) =>{
    if(place==='main'){
    return(
    <div class="card__header">
    <img
      src={require(`../images/${imagePath}`)}
      alt="card__image"
      class="card__image"
      width="600"
    />
    </div>
    );
    }
  }

  const isSecondary = (place) =>{
    if(place==='secondary'){
    return(
    <div class="card__header">
    <img
      src={require(`../images/${imagePath}`)}
      alt="card__image"
      class="card__image"
      width="600"
    />
    </div>
    );
    }
  }
  
  return (
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
          
          <div class="card__body">
          {isSecondary(grid)}
            <div class="card__left">
            <span class="tag tag-black">{activity}</span>
            <h4>{title}</h4>
            <p>{snippet}</p>
            <div class="card__footer">
              <div class="user">
                <img src={require(`../images/${avatarPath}`)} alt="user__image" class="user__image" />
                <div class="user__info">
                  <h5>{author}</h5>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {isMain(grid)}
         
        </div>
      </div>
    </Wrapper>
  );
};

export default Article;
