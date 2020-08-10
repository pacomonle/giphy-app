import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid></GifGrid>', () => {

    const category = 'Hola Mundo'

    test('should <GifGrid /> montado correctamete', () => {
        // simulando el useFecthGifs
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true            
        })
        const wraper = shallow(<GifGrid category = {category}></GifGrid>)
        expect(wraper).toMatchSnapshot()
    })
    
    test('should mostrar items al cargar imagenes', () => {
        // simular respuesta
        const gifs =[{
            id: 'ABC',
            url: 'https://localhost8080/any/cosa.jpg',
            title: 'Cualquier cosa'
        }]
        // añadir respuesta al useFetchGifs
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false   
        })
        // comprobar snapShot
        const wraper = shallow(<GifGrid category = {category}></GifGrid>)
        expect(wraper).toMatchSnapshot()
        // evaluando el { loading && <p> className= ' animate_animated animate_flash' > Loading </p> }
        expect(wraper.find('p').exists()).toBe(false)
        // evaluando si existe el componente <GifGridItem></GifGridItem>
        console.log(wraper.find('GifGridItem').props())
        expect(wraper.find('GifGridItem').length).toBe(gifs.length)
       

    })
    
})
