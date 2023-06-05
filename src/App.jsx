import { useState } from 'react'
import Sandbox from './assets/components/Sandbox'
import Select from 'react-select'
import './App.css'

function App() {
  const [boxes , setBoxes] = useState({value: 0})
  const [direction , setDirection] = useState({value: 'row'})
  const [justify , setJustify] = useState({value: 'flex-start'})
  const [align , setAlign] = useState({value: 'flex-start'})
  const [flexWrap , setFlexWrap] = useState({value: 'nowrap'})
 
  const numbers = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},
    {value: 8, label: '8'},
    {value: 9, label: '9'},
    {value: 10, label: '10'}
  ]

  const flexDirection = [
    {value: 'row', label: 'Row'},
    {value: 'column', label: 'Column'}
  ]

  const alignItems = [
    {value: 'flex-start', label: 'Flex Start'},
    {value: 'flex-end', label: 'Flex End'},
    {value: 'center', label: 'Center'}
  ]

  const justifyContent = [
    {value: 'flex-start', label: 'Flex Start'},
    {value: 'flex-end', label: 'Flex End'},
    {value: 'center', label: 'Center'},
    {value: 'space-between', label: 'Space Between'},
    {value: 'space-around', label: 'Space Around'},
    {value: 'space-evenly', label: 'Space Evenly'}
  ]

  const wrap = [
    {value: 'wrap', label: 'Wrap'},
    {value: 'nowrap', label: 'NoWrap'}
  ]

  return (
    <div className='sandbox-container'>
      <h1>FlexBox Sandbox</h1>
      <form className='flexBoxOpt'>

        <Select 
          options={numbers}
          onChange={setBoxes}
          placeholder='Number of Boxes'
          styles={{
            // control: (baseStyles, state) => ({
            //   ...baseStyles,
            //   borderColor: state.isFocused ? 'lightBlue' : 'black',
            // }),
          }}
        />
        <Select 
          options={flexDirection}
          onChange={setDirection}
          placeholder='Flex Direction'
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'lightBlue' : 'black',
            }),
          }}
          
        />
        <Select 
          options={justifyContent}
          onChange={setJustify}
          placeholder='Justify Content'
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'lightBlue' : 'black',
            }),
          }}
          
        />
        <Select 
          options={alignItems}
          onChange={setAlign}
          placeholder='Align Items'
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'lightBlue' : 'black',
            }),
          }}

          
        />
        <Select 
          options={wrap}
          onChange={setFlexWrap}
          placeholder='Flex Wrap'
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'lightBlue' : 'black',
            }),
          }}
          
        />

      </form>

      <Sandbox 
        boxes={boxes}
        direction={direction}
        justify={justify}
        align={align}
        flexWrap={flexWrap}
      />

    </div>
  )
}

export default App
