import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GitExpertApp";

describe('Prueba del GifExperetApp', () => {

    //Hay que comprobar el onAddCategory
    test('debe de retornar un arreglo con el nuevo elemento', () => {
        render( <GifExpertApp />);
        
    });

    test('debe de retornar el arreglo tal cual esta', () => {

    });
})