import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = `db0be582`;
  const APP_KEY =`ec02774608e4c7bc995722659d05477c`;
  
  const [recipes,setRecipes] = useState([]);
  const[search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipies">
      
        {recipes.map(recipe =>( 
          <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ing = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
