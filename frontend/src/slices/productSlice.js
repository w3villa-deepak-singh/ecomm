// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async action to fetch products
// export const getProduct = createAsyncThunk("products/fetchAll", async (_, { rejectWithValue }) => {
//   try {
//     const { data } = await axios.get("/api/v1/products");
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.response.data.message);
//   }
// });

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     clearErrors: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProduct.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getProduct.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload.products;
//         state.productsCount = action.payload.productsCount;
//       })
//       .addCase(getProduct.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { clearErrors } = productSlice.actions; // Exporting actions
// export default productSlice.reducer; // Exporting reducer



// this is productSlice , combine of action, reducer, constant using redux toolkit, if we use this import this file everywhere where we impot productAction and productReducer