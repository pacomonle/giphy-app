import { useEffect, useState } from "react"
import getGifs from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading: true
    })
    
            useEffect(() => {
                getGifs(category).then(
                res =>{
                   
                        setstate({
                            data: res,
                            loading: false
                        })
               
                })
            }, [category])
       
   
    return state
}
