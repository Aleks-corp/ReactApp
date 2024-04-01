import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addNewList } from "../../redux/task/taskSlice";
import { closeModal } from "../../redux/modal/modalSlice";
import { AddTaskBtn, TaskInput, TaskTitle } from "./Modal.styled";

function AddListModal() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  return (
    <div>
      <TaskTitle>Add new list</TaskTitle>
      <TaskInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <AddTaskBtn
        type="button"
        onClick={() => {
          value && dispatch(addNewList(value));
          dispatch(closeModal());
        }}
      >
        Add
      </AddTaskBtn>
    </div>
  );
}
export default AddListModal;
