import { openModal } from "../../redux/modal/modalSlice";
import TaskModal from "../Modal/TaskModal";
import TaskEditModal from "../Modal/TaskEditModal";
import { deleteTask } from "../../redux/task/thunk";
import {
  TaskEditButton,
  TaskEditWrapper,
  Wrapper,
} from "./TaskEditContainer.styled";
import { useEffect } from "react";
import { GetTask } from "../../types/tasks";
import { useAppDispatch } from "../../redux/hooks";

interface TaskItemProps {
  task: GetTask;
  close: () => void;
}

function TaskEditContainer({ task, close }: TaskItemProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    console.log("keydown");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      close();
    }
  };

  return (
    <>
      <Wrapper onClick={handleBackdropClick}></Wrapper>
      <TaskEditWrapper>
        <TaskEditButton
          type="button"
          onClick={() => {
            dispatch(openModal(<TaskModal task={task} />));
            close();
          }}
        >
          Open
        </TaskEditButton>
        <TaskEditButton
          type="button"
          onClick={() => {
            dispatch(openModal(<TaskEditModal task={task} />));
            close();
          }}
        >
          Edit
        </TaskEditButton>
        <TaskEditButton
          type="button"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </TaskEditButton>
      </TaskEditWrapper>
    </>
  );
}
export default TaskEditContainer;
