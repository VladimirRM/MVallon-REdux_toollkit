import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    counter:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        incremented:state=>{
            state.counter +=1
        },
        decremented:state=>{
            state.counter -=1
        }
    }
})
