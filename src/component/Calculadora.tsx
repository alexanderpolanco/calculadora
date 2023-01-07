/*Importar los componentes de Material UI para crear la estructura visual de la calculadora*/
import { Box, Typography } from '@mui/material'
/*Importar los componentes creados en los archivos CustomButton.js y CustomText.js para crear los botones y el input que mostrara el valor y los resultados*/
import CustomButton from './CustomButton'
import CustomText from './CustomText'
/*Importar el hook creado en el archivo useHandleClick.js para ejecutar las acciones de la calculadora*/
import useHandleClick from '../hooks/useHandleClick'
/*Importar los estilos creados en el archivo styles.js para darle un estilo a los componentes*/
import {
  propsBtnIgual,
  propsBtnBorrar,
  cuerpogenral,
  seccionresultado,
  seccionNumero,
  seccionOperaciones,
  sesccionEjecutar,
  typographyHistorial
} from '../styles/styles'

/*Arreglo que contiene los numeros a visualizar en la calculadora*/
export const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ',']
/*Arreglo que contiene los operadores a visualizar en la calculadora*/
export const operadores = ['/', 'x', '-', '+']

/*Funcion que contiene el componente de la calculadora y sus acciones*/
export const Calculadora = () => {
  /*Destructuracion del hook useHandleClick para utilizar sus valores*/
  const [{ value, historyOp, acciones }] = useHandleClick()
  /*Destructuracion de la variable acciones para utilizar sus acciones*/
  const { addNumero, addOperacion, borrar, resultado } = acciones

  return (
    <Box sx={cuerpogenral}>
      <Box sx={seccionresultado}>
        {/*Componente CustomText que contiene el historial de la operacion a realizar*/}
        <Typography sx={typographyHistorial}>Calculadora</Typography>
        {/*Componente CustomText que contiene el valor actual a visualizar*/}
        <CustomText value={historyOp.join('')} inputProps={{ "data-testid": "historyOp", style: { fontSize: 20, textAlign: 'right', padding: '2px' } }} />
        <CustomText inputProps={{ "data-testid": "resultado", style: { fontSize: 40, textAlign: 'right', padding: '2px' } }} value={value} />
      </Box>
      <Box sx={seccionNumero}>
        {/*Ciclo que crea los botones de cada numero de acuerdo al arreglo numeros y al hacer click ejecuta la funcion addNumero que se encuentra en el hook useHandleClick.js*/}
        {numeros.map((numero) => <CustomButton key={numero} onClick={() => addNumero(numero.toString())}>{numero}</CustomButton>)}

      </Box>
      <Box sx={seccionOperaciones}>
        {/*Ciclo que crea los botones de cada operador de acuerdo al arreglo operadores y al hacer click ejecuta la funcion addOperacion que se encuentra en el hook useHandleClick.js*/}
        {operadores.map((operador) => <CustomButton key={operador} onClick={() => addOperacion(operador)} >{operador}</CustomButton>)}
      </Box>
      {/*Componente CustomButton que contiene el boton de ejecutar la operacion que al hacer click ejecuta la funcion resultado que se encuentra en el hook useHandleClick.js*/}
      <Box sx={sesccionEjecutar}>
        {/*Componente que contiene los botones de borrar y de ejecutar la operacion*/}
        <CustomButton sx={propsBtnBorrar} onClick={() => borrar()}>Borrar</CustomButton>
        <CustomButton sx={propsBtnIgual} onClick={() => resultado()} >=</CustomButton>
      </Box>
    </Box>
  )
}