import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({defaultCategories=[]}) => {

  // const initialState = ['Rick and Morty']
  // const [categories, setCategories] = useState(initialState)

const [categories, setCategories] = useState(defaultCategories)
   /*
   const handleAdd = () => {
     // setCategories([...categories, 'HunterXHunter'])
     setCategories(cat => [...cat, 'HunterXHunter'])
   }

*/
    return (
        <>
           <h1>GifExpertApp</h1>
           <AddCategory setCategories={setCategories}></AddCategory>
           <hr />
           
           <ol>
               {
                  categories.map((category, i) =>( 
                    <GifGrid key={i} category={category}></GifGrid> 
                  ))
               }
           </ol>
        </>
    )
}

export default GifExpertApp

