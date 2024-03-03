import { createSlice } from "@reduxjs/toolkit";
const initialState={
    userInfo:[]
}

const irancellSlice=createSlice({
    name:'irancell',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userInfo=action.payload
        }
    }
})

export default irancellSlice.reducer
export const {addUser}=irancellSlice.actions
