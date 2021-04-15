import styled from "styled-components"

export const Li = styled.li`
  display: inline;
  margin-right: 2rem;

  &:hover {
    border-bottom: solid 0.2rem #444444;
  }
`

export const Ul = styled.ul`
  margin-top: 0.3rem;
`

export const Nav = styled.nav`
  height: 2rem;
  background-color: #dbdbdb;
`

export const Logo = styled.div`
  width: 200px;
  height: 60px;
  margin: 4rem auto;
  background-color: #444444;
`

export const LogoBg = styled.div`
  min-width: 500px;
  background: linear-gradient(to right, #dbdbdb 50%, #606060 50%);
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #606060;
`

export const Div = styled.div`
  background-color: #ffffff;
  &:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  &:nth-child(2) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
  }
`

export const Dashbord = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

export const Main = styled.div`
  display: grid;
  height: 70vh;
  padding: 2rem;
  background-color: #909090;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
`
