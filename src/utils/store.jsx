import { configureStore } from "@reduxjs/toolkit";
import Nav_slice from "./Nav_slice";

const store= configureStore({
      reducer:{
            nav:Nav_slice
      }

})

export default store;
