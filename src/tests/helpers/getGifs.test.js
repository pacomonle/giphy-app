const { default: getGif } = require("../../helpers/getGifs")


describe('Pruebas en el helpers metodo getGifs.test.js', () => {
   
    test('should Fecth trae 10 elementos ', async() => {
       // 1. llamando al metodo a probar con  la promesa 
        const gifs = await getGif('One Punch')
       // 2. comprobar que retorna 10 resultados
       expect(gifs.length).toBe(10)
    })
    
    test('should Fecth con string vacio trae 0 elemntos ', async() => {
        // probando al mandar un string vacio
         const gifs = await getGif('')
         console.log(gifs)
        // 2. comprobar que retorna 0 resultados
          expect(gifs.length).toBe(0)
     })
})
