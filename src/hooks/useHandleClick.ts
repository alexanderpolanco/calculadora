import { useState } from 'react'
import { evaluate } from 'mathjs'

const useHandleClick = () => {
    const [value, setValue] = useState('') // Valor que se muestra en pantalla
    const [values, setValues] = useState<string[]>([]) // Lista con los valores de la operacion
    const [historyOp, sethistoryOp] = useState<string[]>([]) // Lista para el historico de las operaciones
    const [swAdd, setSwAdd] = useState(false) // Bandera para el agregado de operandos

    const addNumero = (valor:string) => {
        if(swAdd) { // Si queres agregar un nuevo operando
            if (valor == ',' && value.indexOf(valor) == -1) setValue(valor)
            if (valor != ',') setValue(valor)
            setSwAdd(false) // Desactivas la bandera de agregado de operandos para que se se limpie la pantalla del valor actual
        }
        else{ // Si queres agregar nuevos digitos del operando
            if (valor == ',' && value.indexOf(valor) == -1) setValue(value.concat(valor))
            if (valor != ',') setValue(value.concat(valor))
        }
    }

    const addOperacion = (valor:string) => {
        const regx = new RegExp('\\*','g')
        setValues([...values, value, valor.replace(regx,'x')]) // Agregas el valor a mostrar y el operador
        sethistoryOp([values.join('').replace(regx,'x'), value, valor]) // Agregas el valor a mostrar y el operador en el historico de operaciones
        setSwAdd(true) // Activa la bandera para indicar que se agrego un operador
    }

    const resultado = () => {
        const regx1 = new RegExp(',','g');
        const regx2 = new RegExp('\\.','g');
        const valorTmp = evaluate(values.join('').concat(value).replace(regx1, '.')) // Evalua la expresion
        setValue(valorTmp.toString().replace(regx2, ',')) // Agrega el resultado a mostrar
        sethistoryOp([...historyOp,value,'=']) // Agrega el resultado a la lista historica de operaciones
        setValues([]) // Limpia la lista de operaciones
    }

    const borrar = () => {
        setValue('') // Limpia el valor a mostrar
        setValues([]) // Limpia la lista de operaciones
        sethistoryOp([]) // Limpia la lista historica de operaciones
    }

    const acciones = {
        addNumero,
        addOperacion,
        resultado,
        borrar
    }

    return [
        {
            value,
            historyOp,
            acciones
        }
    ]
}

export default useHandleClick