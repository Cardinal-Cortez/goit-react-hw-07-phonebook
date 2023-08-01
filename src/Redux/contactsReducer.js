import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
  }).addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContacts.pending, handlePending)
    .addCase(addContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    }).addCase(addContacts.rejected, handleRejected)
    .addCase(deleteContacts.pending, handlePending)
    .addCase(deleteContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.data.findIndex(contact => contact.id === action.payload);
      state.data.splice(index, 1);
    }).addCase(deleteContacts.rejected, handleRejected)
  },
);


export const contactsReducer = contactsSlice.reducer;
