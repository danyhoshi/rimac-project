import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { planesCobertura, vehiculos } from "@/app/lib/data"
import axios from 'axios'
import { AxiosError } from 'axios'

 export interface cobertura {
    loading: boolean,
    idUser: string,
    nameUser: string,
    email: string,
    placa: string,
    marcaAuto: string,
    modeloAuto: string,
    anioAuto: string,
    montoBase: number,
    montoLlantaRobada: number,
    montoChoqueRoja: number,
    montoAtropello: number,
    montoCobertura: number,
    montoMensual: number,
    llantaRobada: boolean,
    choqueRoja: boolean,
    atropello: boolean,
    error: null | string
} 

export const getDataUser = createAsyncThunk(
    'getDataUser',
    async (id:number, {rejectWithValue}) => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
          return [... response.data]
        } catch(err : unknown){
            const error = err as AxiosError;
            return rejectWithValue(error.message)
        }
    //   if(!response.ok){
    //       return rejectWithValue(response.status)
    //   } else {
    //       const data = await response.json()
    //       return data
    //   } 
    }
  )

const initialState: cobertura = {
    loading: false,
    idUser: '',
    nameUser: '',
    email: '',
    placa: '',
    marcaAuto: '',
    modeloAuto: '',
    anioAuto: '',
    montoBase: planesCobertura.montoBase,
    montoLlantaRobada: planesCobertura.llantaRobada,
    montoChoqueRoja: planesCobertura.choqueRoja,
    montoAtropello: planesCobertura.atropello,
    montoCobertura: 14300.00,
    montoMensual:planesCobertura.montoBase,
    llantaRobada: false,
    choqueRoja: false,
    atropello: false,
    error: null
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
    },
    extraReducers: (builder) => {
        builder.addCase(getDataUser.pending, (state) => {
            state.loading = true
          })
    
          // Add reducers for additional action types here, and handle loading state as needed
          builder.addCase(getDataUser.fulfilled, (state, action) => {
            const { id, name, email }  = action.payload[0];
            state.loading = false;
            state.nameUser = name;
            state.idUser = id;
            state.email = email;
            state.marcaAuto = vehiculos[id].marca,
            state.modeloAuto = vehiculos[id].modelo,
            state.anioAuto = vehiculos[id].anio
          })
          builder.addCase(getDataUser.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload;
            //console.log('error: ', action.payload)
          })
        }
})

export const { changeMontoCobertura, changeNameUser, changePlaca, changeAtropello, changeLlantaRobada, changeChoqueRoja } = coberturaSlice.actions; 

export default coberturaSlice.reducer; 