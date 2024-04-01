import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  position: relative;
  max-width: calc(100vw - 14px);
  max-height: calc(100vh - 14px);
  padding: 30px;
  padding-top: 60px;
  border-radius: 24px;
  overflow: hidden;
  background-color: #ffffff;
`;

export const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  background-color: #320073;
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 10px;
  padding: 8px;
  border-radius: 10px;
  color: #ffffff;
`;

export const AddTaskContainer = styled.div`
  width: 750px;
  height: 450px;
`;

export const TaskTitle = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
`;

export const TaskTextBox = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

export const TaskText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const TaskTextAccent = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 20px;
`;

export const TaskInput = styled.input`
  width: 180px;
  height: 25px;
  border: 1px solid #212121;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
`;

export const TaskTextArea = styled.textarea`
  width: 175px;
  height: 120px;
  border: 1px solid #212121;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
`;

export const AddTaskBtn = styled.button`
  padding: 8px 16px;
  border: 1px solid #212121;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
`;
export const SelectBox = styled.div`
  display: flex;
  margin-left: 32px;
  width: 200px;
`;
export const TaskDescriptionAccent = styled.div`
  display: flex;
  margin-left: 32px;
  width: 300px;
  height: 200px;
`;

export const TaskEditButton = styled.button`
  width: 48px;
  height: 28px;
  background-color: #fff;
  border: 1px solid #80808080;
  border-radius: 4px;
  padding: 4px 6px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
