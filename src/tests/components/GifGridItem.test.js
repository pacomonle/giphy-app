import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';




describe('Pruebas GifGrid.test.js', () => {
    const title = 'un titulo'
    const url = 'http://localhost:8080'
    const wraper = shallow(<GifGridItem title={title} url={url}></GifGridItem>)

    test('should mostrar valores de <GifGridItem></GifGridItem> ', () => {
       // const title = 'un titulo'
       // const url = 'http://localhost:8080'
       // const wraper = shallow(<GifGridItem title={title} url={url}></GifGridItem>)
        expect(wraper).toMatchSnapshot()
    })

    test('should el title debe de esta en un <p></p>', () => {
        // 1. seleccionamos el parrafo - p
        const parraf = wraper.find('p')
        // 2. comprobar la iguladad
        expect(parraf.text().trim()).toBe(title)
    })

    test('should a la etiqueta <img> comprobar src y alt', () => {
         // 1. seleccionamos la imagen - img
        const image = wraper.find('img')
        // comprobar propiedades
        console.log(image.html())
        console.log(image.props(), image.prop('src'), image.props().alt)
        expect(image.prop('alt')).toBe(title)
        expect(image.props().src).toBe(url)

    })
    
    test('should class animate__fadeInBottomRight  de animate en el div ', () => {
     // 1. seleccionamos el div - div
        const animate = 'animate__fadeInBottomRight'
        const div = wraper.find('div')
        // console.log(props())
        console.log(div.prop('className'))
        const className = div.prop('className')
     // 2. comprobar con un true   
         // para comprobar la negacion .not.toBe
         expect(className.includes(animate)).toBe(true)

        
    })
    
    
})
