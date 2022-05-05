import styled from 'styled-components'

export const Wrapper = styled.article`
    padding: 20px;
    
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }
    h4{
        font-family: "EB Garamond", serif;
    }
    h5{
        font-family: "Poppins", serif;
        font-weight:600;
    }
    
    
    p{
        font-family:"Poppins", sans-serif;
    }

    body {
    font-family: "Quicksand", sans-serif;
    display: grid;
    place-items: center;
    height: 100vh;
    background: #7f7fd5;
    background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
    }

    .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
 
    }

    img {
    max-width: 100%;
    display: block;
    object-fit: cover;
    }

    .card:hover{cursor: pointer;}

    .card {
    display: flex;
    flex-direction: row;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    }

    .card__left{
        display:flex;
        flex-direction:column;
    }

    .card__header{
        display:flex;
        justify-content:center;
        align-items:center;
    }



    .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    }

    .card__image{

        max-width:90%;
        max-height:90%;
    }

    .tag {
    align-self: flex-start;
    padding: .25em .75em;
    font-size: .75rem;
    }

    .tag + .tag {
    margin-left: .5em;
    }

    .tag-black {
    background: #000000;
    color:#fafafa;
    }


    .card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
    }

    .card__footer {
    display: flex;
    padding-top: 1rem;
    margin-top: auto;
    }

    .user {
    display: flex;
    gap: .5rem;
    }

    .user__image {
    border-radius:50%;
    width: 40px;
    height: 40px;
    }

    .user__info > small {
    color: #666;
    }
    `