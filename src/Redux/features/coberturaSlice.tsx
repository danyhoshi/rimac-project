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
    sinChoqueRoja: boolean
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
    montoMensual: 20.00,
    llantaRobada: false,
    choqueRoja: false,
    atropello: false,
    sinChoqueRoja: false
}

export const coberturaSlice = createSlice({
    name: "cobertura", 
    initialState,
    reducers: {
        changeMontoCobertura: (state, action) => {
            state.montoCobertura = action.payload
            if(state.montoCobertura > 16000) {
                if(state.choqueRoja){
                    state.choqueRoja = false 
                    state.montoMensual = state.montoMensual - state.montoChoqueRoja
                }
                state.sinChoqueRoja = true
            }
        },
        changeNameUser: (state, action) => {
            state.montoCobertura = action.payload
        },
        changePlaca: (state, action) => {
            console.log(`En el reducer: ${action.payload}`)
            state.placa = action.payload.toUpperCase() 
            console.log(`En el reducer state: ${state.placa}`)
        },
        // changeSinChoqueRoja: (state, action) => {
        //     state.sinChoqueRoja = action.payload
        // },
    }
})

export const { changeMontoCobertura, changeNameUser, changePlaca } = coberturaSlice.actions; 

export default coberturaSlice.reducer; 