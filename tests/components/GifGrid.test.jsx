import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba del GifGrid', () => {

    const category = "One Punch";

    test('Debe de mostrar el loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        } );

        render( <GifGrid category={ category }/>);

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

        // screen.debug();
    })


    test('Debe de mostrar items cuando se cargan las imagenes del useFethcGifs', () => {
        
        const gifs = [
            {
                id: 'ASD',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'DSA',
                title: 'goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        } );

        render( <GifGrid category={ category }/>);
        
        expect( screen.getAllByRole('img').length ).toBe(2);

        // screen.debug();



    })
})