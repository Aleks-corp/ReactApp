import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 5;
`;

export const TaskEditWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 90px;
  border-radius: 8px;
  background-color: #fff;
  padding: 4px 8px;
  z-index: 10;
`;

export const TaskEditButton = styled.button`
  background-color: #fff;
  border: 1px solid #80808080;
  border-radius: 4px;
  padding: 4px 6px;
`;
