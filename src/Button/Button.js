import React from 'react'
import Radium from 'radium'

const button = (props) => {
  let { click, kind } = props
  const styles = {
    base: {
      padding: "1.5em 2em",
      border: "0px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: 700,
    },
    primary: {
      backgroundColor: "#0074D9",
      color: "#ffffff",
      ":hover": {
        backgroundColor: 'red'
      }
    },
    warning: {
      backgroundColor: "#F5A623",
      color: "#ffffff",
      ":hover": {
        backgroundColor: 'red'
      }
    },
    disabled: {
      opacity: .4,
      cursor: "not-allowed"
    }
  }
  return (
    <button  className="" style={[styles.base, styles[kind]]} onClick={click}>
      
    </button>
  )
}
export default Radium(button)