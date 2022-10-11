import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([]);

  const ondAddCategory = (NewCategory) =>{
  
    if( categories.includes(NewCategory) )return;

    // categories.push(NewCategory);
    setCategories([NewCategory,...categories])
    // setCategories(cat => ['Valorant',...cat]);
  }

  return (
    <>
      {/* titulo */}

        <h1>GifExpertApp</h1>
    
      {/*input */}
      <AddCategory 
      // setCategories={setCategories}
      onNewCategory = {(value) => ondAddCategory(value)} 
      />

        {
          categories.map( (category) => (
            <GifGrid 
            key={category} 
            category={category}
            />  
          ))
        }
      

    </>
  )
}
