import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  height: 100%;
`
export const Header = styled.header`
  display: grid;
  position: sticky;
  grid-column: 1 / 3;
  grid-template-columns: 200px auto;
  top: 0;
  z-index: 1;
  background-color: #cccccc;
  /* height: 100px; */
`

export const LeftBox = styled.div``

export const SideBtn = styled.button`
  margin: 0.5rem;
`

export const NavBar = styled.nav`
  display: flex;
  background-color: #c9c9c9;
`

export const Logo = styled.div`
  padding: 0.5rem;
  color: #ffffff;
  font-weight: 700;
  background-color: #666666;
`

export const NavUl = styled.ul`
  margin: auto 0;
`

export const NavLi = styled.li`
  display: inline;
  margin: 0 1.5rem;
  padding-bottom: 0.25rem;
  list-style: none;
  color: #333333;
  font-weight: 700;
  background-color: #c9c9c9;

  &:hover {
    border-bottom: 5px solid #666666;
  }
`

export const SideBar = styled.div`
  position: sticky;
  top: 0;
  width: 200px;
  height: 100vh;
  background-color: #c9c9c9;
`

export const SideUl = styled.ul`
  margin: 0;
  padding: 0;
`

export const SideLi = styled.li`
  padding: 0.25rem;
  list-style: none;
  border: 2px solid #c9c9c9;
  color: #333333;
  text-align: center;
  font-weight: 700;
  background-color: #ffffff;
`

export const Main = styled.main`
  padding: 2.25rem;
  background-color: #999999;
`

export const Chart = styled.div``

export const ChartEx = styled.div`
  margin-bottom: 1rem;
`

export const GridToggle = styled.div`
  margin-bottom: 1rem;
  height: 100px;
  background-color: #ffffff;
`

export const CreateChart = styled.div`
  height: 100px;
  background-color: #ffffff;
`
