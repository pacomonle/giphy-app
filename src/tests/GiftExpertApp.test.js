import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GiftExperApp></GiftExperApp>', () => {
    

    test('should mostrar componente <GiftExperApp /> ', () => {
        const wrapper = shallow(<GifExpertApp></GifExpertApp>)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should mostrar una lsita de categorias', () => {
        const categories = ['Dragon Ball', 'One Punch']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })
    
    
})
