import styled from "styled-components"
import { ThemeData, ThemeDataType } from "../../../assets/ThemeData"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ThemeContainer = styled.div<{ item: string }>`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 9rem;
  border: 1px solid #eeeeee;
  border-radius: 0.25rem;
  background-color: ${({ item }) => item};
  cursor: pointer;
`

export const Btn = styled.div<{ item: string }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ item }) => item};
`
