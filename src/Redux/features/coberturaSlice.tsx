import { createSlice } from "@reduxjs/toolkit"
import { planesCobertura } from "@/app/lib/data"

 export interface cobertura {
    idUser: string,
    nameUser: string,
    placa: string,
    montoBase: number,
    montoLlantaRobada: number,
    montoChoqueRoja: number,
    montoAtropello: number,
    montoCobertura: number,
    montoMensual: number,
    llantaRobada: boolean,
    choqueRoja: boolean,
    atropello: boolean,
} 

const initialState: cobertura = {
    idUser: '',
    nameUser: '',
    placa: '',
    montoBase: planesCobertura.montoBase,
    montoLlantaRobada: planesCobertura.llantaRobada,
    montoChoqueRoja: planesCobertura.choqueRoja,
    montoAtropello: planesCobertura.atropello,
    montoCobertura: 14300.00,
    montoMensual:planesCobertura.montoBase,
    llantaRobada: false,
    choqueRoja: false,
    atropello: false,
}

export const coberturaSlice = createSlice({
    name: "cobertura", 
    initialState,
    reducers: {
        changeMontoCobertura: (state, action) => {
            state.montoCobertura = action.payload
            if(state.montoCobertura > 16000) {
                if(state.choqueRoja){
                    const atropello = state.atropello ? state.montoAtropello : 0.00
                    const llantaRobo = state.llantaRobada ? state.montoLlantaRobada : 0.00
                    state.montoMensual =  atropello + llantaRobo + state.montoBase
                } 
            }
            else {
                const choque = state.choqueRoja ? state.montoChoqueRoja : 0.00
                const atropello = state.atropello ? state.montoAtropello : 0.00
                const llantaRobo = state.llantaRobada ? state.montoLlantaRobada : 0.00
                state.montoMensual =  choque + atropello + llantaRobo + state.montoBase
            }            
        },
        changeNameUser: (state, action) => {
            state.montoCobertura = action.payload
        },
        changePlaca: (state, action) => {
            state.placa = action.payload.toUpperCase()  
        },
        changeChoqueRoja: (state, action) => {

            state.choqueRoja = action.payload
            if(action.payload)
                state.montoMensual  += state.montoChoqueRoja 
            else
                state.montoMensual  -= state.montoChoqueRoja 
        },
        changeAtropello: (state, action) => {
            state.atropello = action.payload
            if(action.payload)
                state.montoMensual  += state.montoAtropello 
            else
                state.montoMensual  -= state.montoAtropello 
        },
        changeLlantaRobada: (state, action) => {
            state.llantaRobada = action.payload
            if(action.payload)
                state.montoMensual  += state.montoLlantaRobada 
            else
                state.montoMensual  -= state.montoLlantaRobada 
        },
       

    }
})

export const { changeMontoCobertura, changeNameUser, changePlaca, changeAtropello, changeLlantaRobada, changeChoqueRoja } = coberturaSlice.actions; 

export default coberturaSlice.reducer; 