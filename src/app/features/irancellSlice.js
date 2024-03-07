import { createSlice } from "@reduxjs/toolkit";
const initialState={
    userInfo:[],
    id:''
}

const irancellSlice=createSlice({
    name:'irancell',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userInfo=action.payload
        },
        addid:(state,action)=>{
            state.id=action.payload
        }
    }
})

export default irancellSlice.reducer
export const {addUser,addid}=irancellSlice.actions
