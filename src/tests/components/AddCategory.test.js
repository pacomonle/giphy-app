import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import AddCategory from '../../components/AddCategory';



describe('Pruebas en <AddCategory></AddCategory>', () => {

   // const setCategories = () => {}
   const setCategories = jest.fn()
   let wraper = shallow(<AddCategory setCategories={setCategories}></AddCategory>)
     // ciclo de vida de las pruebas -> beforEach metodo que se ejecutan al iniciar cualquier prueba
   beforeEach(()=>{
       console.log('beforEach!!!!')
       jest.clearAllMocks
       wraper = shallow(<AddCategory setCategories={setCategories}></AddCategory>)
   })

    test('should mostrarse correctamente', () => {
        expect(wraper).toMatchSnapshot()
    })

    test('should cambiar el input o caja texto', () => {
        // 1. seleccionar el input
        const input = wraper.find('input')
        const value = 'Hola Mundo'
        // 2. simular el evento - en la simulacion los eventos no llevan el on
        /*hay que mandar el evento e.target.value*/
        input.simulate('change', {target:{value}})
        
        // comprobar si el setInputValue actualiza el estado, hay que crear <p>{inputValue}</p>
        //  expect(wraper.find('p').trim()).toBe(value)
        
    })

    test('should no postear con el submit', () => {
        // 1. seleccionar y simular el submit
        const submit = wraper.find('form').simulate('submit', {preventDefault(){}})
        // 2. como no se cumple la condicion comprobar que setCategories no es llamado
        expect(setCategories).not.toHaveBeenCalled()
    })

    
    test('should llamar al setCategories y limpiar la caja de texto', () => {
        const value='Hola MUndo'
        // 1. simular input change
        const change = wraper.find('input').simulate('change', {target: {value}})
        // 2. simular el submit
        const submit = wraper.find('form').simulate('submit', {preventDefault(){}})
        // 3. comprobar que el setCategories es llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        // 4 comprobar al salir del submit la caja del input se vacia
        console.log('ver', wraper.find('input').props())
        expect(wraper.find('input').prop('value')).toBe('')
    })
    
    
    
})
