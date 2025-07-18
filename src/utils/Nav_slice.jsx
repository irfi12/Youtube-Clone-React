import { createSlice } from "@reduxjs/tooNav_Slice= createSlice"

const Nav_Slice= createSlice({
      name:"Nav",
      intialState:{
            isMenuOpen:true,
      },
      reducers:{
            toggleMenu:(state)=>{
                  state.isMenuOpen=!state.isMenuOpen;
            }
      }
})

export const {toggleMenu}=Nav_Slice.actions;
export default Nav_Slice.reducers;