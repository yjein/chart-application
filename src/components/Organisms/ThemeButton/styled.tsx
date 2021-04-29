import styled from "styled-components"
import { ThemeData, ThemeDataType } from "../../../assets/ThemeData"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ThemeContainer = styled.div<{ item: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 9rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ item }) => item};
  overflow: hidden;
  cursor: pointer;
`

export const Btn = styled.div<{ item: string }>`
  margin: 0 2px 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ item }) => item};
`
