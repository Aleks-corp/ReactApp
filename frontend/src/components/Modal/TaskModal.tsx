import { GetTask } from "../../types/tasks";
import { format } from "date-fns";
import {
  AddTaskContainer,
  TaskDescriptionAccent,
  TaskEditButton,
  TaskText,
  TaskTextAccent,
  TaskTextBox,
  TaskTitle,
  Wrapper,
} from "./Modal.styled";
import { openModal } from "../../redux/modal/modalSlice";
import TaskEditModal from "./TaskEditModal";
import { useAppDispatch } from "../../redux/hooks";

interface Task {
  task: GetTask;
}

function TaskModal({ task }: Task) {
  const dispatch = useAppDispatch();
  return (
    <AddTaskContainer>
      <Wrapper>
        <div>
          <TaskTitle>{task.name}</TaskTitle>
          <TaskTextBox>
            <TaskText>Status:</TaskText>
            <TaskTextAccent>{task.taskList}</TaskTextAccent>
          </TaskTextBox>
          <TaskTextBox>
            <TaskText>Due Date:</TaskText>
            <TaskTextAccent>
              {format(new Date(task.created_at), "EEE, dd MMM")}
            </TaskTextAccent>
          </TaskTextBox>
          <TaskTextBox>
            <TaskText>Priority:</TaskText>
            <TaskTextAccent>{task.priority}</TaskTextAccent>
          </TaskTextBox>
          <TaskTextBox>
            <TaskText>Description:</TaskText>
            <TaskDescriptionAccent>{task.description}</TaskDescriptionAccent>
          </TaskTextBox>
        </div>
        <TaskEditButton
          type="button"
          onClick={() => {
            dispatch(openModal(<TaskEditModal task={task} />));
            close();
          }}
        >
          Edit
        </TaskEditButton>
      </Wrapper>
    </AddTaskContainer>
  );
}
export default TaskModal;
