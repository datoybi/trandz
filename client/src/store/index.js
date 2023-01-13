import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({ reducer: { trend: slice } });
export default store;
