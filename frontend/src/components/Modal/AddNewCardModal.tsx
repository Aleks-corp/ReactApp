import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
  AddTaskBtn,
  AddTaskContainer,
  SelectBox,
  TaskInput,
  TaskText,
  TaskTextAccent,
  TaskTextArea,
  TaskTextBox,
  TaskTitle,
} from "./Modal.styled";
import { addTask } from "../../redux/task/thunk";
import MySelect from "../ReactSelect/MySelect";
import { customSelectStyles } from "../TaskItem/selectStyles";
import { closeModal } from "../../redux/modal/modalSlice";

interface List {
  list: string;
}

function AddNewCardModal({ list }: List) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const selectOptions = [
    { label: "low", value: "low" },
    {
      label: "medium",
      value: "medium",
    },
    {
      label: "high",
      value: "high",
    },
  ];

  function sendTask() {
    if (name && description && list && priority) {
      dispatch(
        addTask({
          name,
          description,
          priority: priority,
          taskList: list,
        })
      );
      dispatch(closeModal());
    }
  }

  return (
    <AddTaskContainer>
      <TaskTitle>Add Card</TaskTitle>
      <TaskTextBox>
        <TaskText>Status:</TaskText> <TaskTextAccent>{list}</TaskTextAccent>
      </TaskTextBox>
      <TaskTextBox>
        <TaskText>Task name:</TaskText>
        <TaskInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </TaskTextBox>
      <TaskTextBox>
        <TaskText>Description:</TaskText>
        <TaskTextArea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </TaskTextBox>
      <TaskTextBox>
        <TaskText>Priority:</TaskText>
        <SelectBox>
          <MySelect
            name="priority"
            defaultValue={selectOptions[0]}
            options={selectOptions}
            styles={customSelectStyles}
            onChange={(selectedOption) => {
              selectedOption && setPriority(selectedOption.value);
            }}
          />
        </SelectBox>
      </TaskTextBox>

      <AddTaskBtn type="button" onClick={() => sendTask()}>
        Add
      </AddTaskBtn>
    </AddTaskContainer>
  );
}
export default AddNewCardModal;
