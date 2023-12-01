import { createSlice } from "@reduxjs/toolkit"

 export interface cobertura {
    idUser: string,
    nameUser: string,
    placa: string,
    montoCobertura: number,
    montoMensual: number,
    llantaRobada: boolean,
    choqueRoja: boolean,
    atropello: boolean
} 

const initialState: cobertura = {
    idUser: '',
    nameUser: '',
    placa: '',
    montoCobertura: 0,
    montoMensual: 20.00,
    llantaRobada: false,
    choqueRoja: false,
    atropello: false
}

export const coberturaSlice = createSlice({
    name: "cobertura", 
    initialState,
    reducers: {
        changeMontoCobertura: (state, action) => {
            state.montoCobertura = action.payload
        },
        changeNameUser: (state, action) => {
            state.montoCobertura = action.payload
        },
        changePlaca: (state, action) => {
            console.log(`En el reducer: ${action.payload}`)
            state.placa = action.payload
            console.log(`En el reducer state: ${state.placa}`)
        },
    
    }
})

export const { changeMontoCobertura, changeNameUser, changePlaca } = coberturaSlice.actions; 

export default coberturaSlice.reducer; 