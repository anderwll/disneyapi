import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiGET } from '../../services';
import { InitialStateINT, ResponseAPI } from '../typeStore';

const initialState: InitialStateINT = {
    loading: false,
    success: false,
    message: '',
    data: null
};

const getCharacterId = createAsyncThunk('characterId/getCharacterId', async (id: number) => {
    const response = await apiGET(`/characters/${id}`);
    return response;
});

const characterSlice = createSlice({
  name: 'characterId',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

     // ---------- BUSCA POR ID -------------
     builder.addCase(getCharacterId.pending, (state, action) => {
        state.loading = true;

    }).addCase(getCharacterId.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
        
        if(action.payload.success) {
            state.data = action.payload.data
        }
    });

  }
  },
);

export const characterReducer = characterSlice.reducer;
export { getCharacterId }
