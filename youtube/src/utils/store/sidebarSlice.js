import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        status:true,
        watch:false
    },
    reducers:{
        showSidebar:(state,action)=>{
            state.status = !state.status
        },
        offSidebar:(state,action)=>{
            state.watch = (true);
            state.status = false
        },
        onsidebar:(state,action)=>{
            state.watch = false;
        }
    }
});

export const {showSidebar,offSidebar,onsidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer ;