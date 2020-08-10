import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas Custom Hook useFetchGifs ', () => {
    test('should del state inicial', async() => {
        // importar funcion de la libreria de hook testing
       const response =  renderHook(() => useFetchGifs('Dragon Ball'))
       console.log(response)
       const {result, waitForNextUpdate} = response
       console.log(result)
       const{ data , loading} = result.current
       console.log(data, loading)
       // para que se pueda volver a ejecutar el useFetchGifs
       await waitForNextUpdate()
       // hacer las comprobaciones
       expect(data).toEqual([])
       expect(loading).toBeTruthy() 
       expect(loading).toBe(true)
    })
    
    test('should retornar array de imgs y loading false', async() => {
        const response = renderHook(() => useFetchGifs('One Punch'))
        console.log(response)
        const {result, waitForNextUpdate} = response
         // para que se pueda volver a ejecutar el useFetchGifs
         await waitForNextUpdate()
        const{ data , loading} = result.current
        console.log(data.length, loading)
        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    
       })
})
