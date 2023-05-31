import React from 'react'

const Sandbox = ({boxes, direction, justify, align, flexWrap}) => {

const squaresStyle = {
  width: 150,
  height: 150,
  backgroundColor: "rgb(248, 0, 0)",
  border: "solid black 3px",
  borderRadius: "5px"
}

const sandboxStyle = {
  width: "90%",
  minHeight: "300px",
  border: "solid black 3px",
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