import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Prueba del AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={ () => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } } );
        // screen.debug();
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        //Simulacion de la funcion
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        // screen.debug();

        //Evalua si ha sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('No debe de llamar el onNewCategory si el input esta activo', () => {

        const inputValue = '';
        //Simulacion de la funcion
        const onNewCategory = jest.fn();
        //TODO: ???

        render( <AddCategory onNewCategory={ onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    })
})