import React from 'react'
import { describe, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Calculadora, operadores } from '../src/component/Calculadora'

describe('Calculadora', () => {
    //beforeEach(() => render(<Calculadora/>)) // se renderiza el componente antes de cada prueba
    afterEach(cleanup) // desmonta el conponente luego de cada prueba (la documentacion indica que ya no es necesario, ya se hace automatiacmente)

    /*  ***SE INHABILITA LA PRUEBA YA QUE EL CASO ESTA CUBIERTO CON LOS TEST POSTERIORES***
        it('Debe renderizar el componente',()=> {
            render(<Calculadora/>)
        })
    */


    it('Debe renderizar el titulo correctamente', () => {
        render(<Calculadora />)
        screen.getByText('Calculadora')
    })


    /*  ***SE INHABILITA LA PRUEBA YA QUE EL CASO ESTA CUBIERTO CON LOS TEST POSTERIORES***
        it('Debe renderizar los numero de la calculadora',()=> {
            render(<Calculadora/>)
            numeros.map((numero) => screen.getByText(numero))
        })
    */


    it('Debe renderizar los simbolos de la operaciones', () => {
        render(<Calculadora />)
        operadores.map((operador) => screen.getByText(operador))
    })

    it('Debe renderizar los simbolos de igual (=)', () => {
        render(<Calculadora />)
        screen.getByText('=')
    })

    it('Debe renderizar un input', () => {
        const { getByTestId } = render(<Calculadora />);
        const input = getByTestId("resultado") as HTMLInputElement;
    })

    it('Debe agregar el valor del boton dentro del input', async () => {
        const { getByTestId } = render(<Calculadora />);
        const button = screen.getByText('1')
        await userEvent.click(button)

        const input = getByTestId("resultado") as HTMLInputElement;

        expect(input.value).toBe('1')
    })

    it('Debe mostrar los numeros que se vayan presionando', async () => {
        const { getByTestId } = render(<Calculadora />);
        const uno = screen.getByText('1')
        await userEvent.click(uno)
        const dos = screen.getByText('2')
        await userEvent.click(dos)
        const tres = screen.getByText('3')
        await userEvent.click(tres)

        const input = getByTestId("resultado") as HTMLInputElement;
        expect(input.value).toBe('123')
    })

    it('Debe mostrar los valores de los operadores', async () => {
        const { getByTestId } = render(<Calculadora />);
        const uno = screen.getByText('1')
        await userEvent.click(uno)
        const plus = screen.getByText('+')
        await userEvent.click(plus)
        await userEvent.click(uno)

        const input = getByTestId("resultado") as HTMLInputElement;
        expect(input.value).toBe('1')
    })

    it('Debe mostrar el resultado de la operacion', async () => {
        const { getByTestId } = render(<Calculadora />);
        const uno = screen.getByText('1')
        await userEvent.click(uno)
        const plus = screen.getByText('+')
        await userEvent.click(plus)
        await userEvent.click(uno)
        const igual = screen.getByText('=')
        await userEvent.click(igual)

        const input = getByTestId("resultado") as HTMLInputElement;
        expect(input.value).toBe('2')
    })

})