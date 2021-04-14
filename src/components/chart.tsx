import React from "react"
import styled from "styled-components"
import {} from "../style/chart"

const Chart = () => {
  return (
    <div className="wrap">
      <header>
        <div className="leftBox">
          <button className="sideBtn">=</button>
        </div>
        <nav className="navBar">
          <div className="logo"></div>
          <ul className="navUl">
            <li className="navLi">a</li>
            <li className="navLi">b</li>
            <li className="navLi">c</li>
          </ul>
        </nav>
      </header>
      <div className="sideBar">
        <ul className="sideUl">
          <li className="sideLi"></li>
        </ul>
      </div>
      <main>
        <div className="chart"></div>
        <div className="gridToggle"></div>
        <div className="chartEx"></div>
      </main>
    </div>
  )
}

export default Chart
