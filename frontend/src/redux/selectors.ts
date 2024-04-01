import { State } from "../types/state";

export const selectTasks = (state: State) => state.tasks.taskList;

export const selectListOfTasks = (state: State) => state.tasks.listOfTasks;

export const selectIsModalOpen = (state: State) => state.modal.isOpen;

export const selectModalContent = (state: State) => state.modal.taskComponent;
