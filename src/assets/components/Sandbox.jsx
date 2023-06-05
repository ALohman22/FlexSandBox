import React from 'react'

const Sandbox = ({boxes, direction, justify, align, flexWrap}) => {

  const columnHeight = 150 * boxes.value + 200

const squaresStyle = {
  width: "150px",
  height: "150px",
  backgroundColor: "lightBlue",
  border: "solid black 3px",
  borderRadius: "5px"
}

const sandboxStyle = {
  width: "90%",
  minHeight: '460px',
  height: (direction.value === "row") ? "300px" : `${columnHeight}px`,
  border: "solid black 5px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: direction.value,
  justifyContent: justify.value,
  alignItems: align.value,
  flexWrap: flexWrap.value
}
    
    return (
        <div className='sandbox' style={sandboxStyle}>
          {[...Array(boxes.value)].map((box, index)=>{
            return (
              <div 
                className='squares' 
                key={index} 
                style={squaresStyle}
              ></div>
            )
          })}
        </div>
    )
}
export default Sandbox