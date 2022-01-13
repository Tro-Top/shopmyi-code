import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { brandApi } from "lib/api";

const ActionTypes = {
  GET_BY_BRAND: "brand/get-by-brand",
  GET_BY_INFLUENCER: "influencer/get-by-influencer",
};
const getByBrand = createAsyncThunk(
  ActionTypes.GET_BY_BRAND,
  async (id, thunkAPI) => {
    const { data } = await brandApi.getById(id);
    return data.data.purchasesPerBrand;
  }
);

export const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brand: {
      data: null,
      isFetching: false,
    },
    influencer: {
      data: null,
      isFetching: false,
    },
  },
  reducers: {},
  extraReducers: {
    [getByBrand.pending]: (state, action) => {
      state.brand.isFetching = true;
    },
    [getByBrand.fulfilled]: (state, action) => {
      state.brand.data = action.payload;
      state.brand.isFetching = false;
    },
  },
});

export const brand = brandSlice.reducer;

export const brandActions = {
  getByBrand,
};
