import { useState } from 'react'
import Sandbox from './assets/components/Sandbox'
import Select from 'react-select'
import './App.css'

function App() {
  const [boxes , setBoxes] = useState({value: 0})
  const [direction , setDirection] = useState('row')
  const [justify , setJustify] = useState('flex-start')
  const [align , setAlign] = useState('flex-start')
  const [flexWrap , setFlexWrap] = useState('nowrap')
 
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
    {value: 'center', label: 'Center'},
    {value: 'stretch', label: 'Stretch'}
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
          value={boxes}
          onChange={setBoxes}
          placeholder={'number of boxes'}
          
        />
        <Select 
          options={flexDirection}
          value={direction}
          onChange={setDirection}
          placeholder={'Flex Direction'}
          
        />
        <Select 
          options={justifyContent}
          value={justify}
          onChange={setJustify}
          placeholder={'Justify Content'}
          
        />
        <Select 
          options={alignItems}
          value={align}
          onChange={setAlign}
          placeholder={'Align Items'}
          
        />
        <Select 
          options={wrap}
          value={flexWrap}
          onChange={setFlexWrap}
          placeholder={'Flex Wrap'}
          
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
