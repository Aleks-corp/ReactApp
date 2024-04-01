import { Props } from "react-select";
import { GetTask } from "./tasks";

export interface TaskItemProps {
  item: GetTask;
  list: string[];
}

export interface OptionType {
  value: string;
  label: string;
}

export type MySelectProps = Props<OptionType, false, never>;
