import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ing}) => {
    return(
        <div  className={style.recipe} >
            <h1 >{title}</h1>
            <ol className="">
            {ing.map(ing => ( 
                <li className="">{ing.text}</li>
            ))}</ol>
            <p>Calories : {calories}</p>
            <img src={image} className={style.image}/>
        </div>
    );
}
export default Recipe;