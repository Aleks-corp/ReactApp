import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../../types/state";

const initialState = {
  taskComponent: null,
  isOpen: false,
  error: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state: ModalState, action: PayloadAction<React.ReactNode>) => {
      state.isOpen = true;
      state.taskComponent = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.taskComponent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
