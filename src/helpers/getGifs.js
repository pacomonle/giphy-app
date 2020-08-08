 const getGif = async(category) =>{
    // comprobar espacios en la url - usar encodeURI() y  https://
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6CojeYdv5M1zZWecWolzTQq3byK0kb5k`
      const resp = await fetch(url)
      const respFinal = await resp.json()
     // console.log(respFinal)
      const {data} = respFinal
      const gifs = data.map(img=>{
          return {
              id: img.id,
              title: img.title,
              url: img.images?.downsized_medium.url
          }
      })
    // console.log(gifs)
    // al ser un metodo async devuelve una promesa
     return gifs
  }

  export default getGif