import { blue } from '@mui/material/colors'

const propsBtnIgual = { margin: '2px', width: '50%', color: '#FFF', bgcolor: 'info.main' }
const propsBtnBorrar = { ...propsBtnIgual, bgcolor: 'error.light' }
const cuerpogenral = { display: 'flex', flexWrap: 'wrap', width: '275px', height: '400px', backgroundColor: 'secondary.main', borderRadius: '16px', padding: '5px' }
const seccionresultado = { width: '100%', height: '30%' }
const seccionNumero = { display: 'flex', flexWrap: 'wrap', width: '75%', height: '60%', justifyContent: 'flex-end' }
const seccionOperaciones = { display: 'flex', flexWrap: 'wrap', width: '25%', height: '60%' }
const sesccionEjecutar = { display: 'flex', width: '100%', height: '10%' }
const typographyHistorial = {background:blue[500], color:'#FFF', borderRadius: '16px', paddingLeft:'10px'}

export {
    propsBtnIgual,
    propsBtnBorrar,
    cuerpogenral,
    seccionresultado,
    seccionNumero,
    seccionOperaciones,
    sesccionEjecutar,
    typographyHistorial
} 