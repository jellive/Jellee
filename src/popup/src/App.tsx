import React from 'react';
import './App.scss';
import { FILTER_ADDR } from './models'
import { addFilterAddr, delFilterAddr } from './apis'


function App() {

  const [addr, setAddr] = React.useState('')




  const [filteredAddr, setFilteredAddr] = React.useState<Array<string | null>>(JSON.parse(localStorage.getItem(FILTER_ADDR) || ''))

  const [delArr, setDelArr] = React.useState<Array<string>>([])

  const changeAddr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddr(e.target.value)
  }

  const addAddr = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addFilterAddr(addr)
    setAddr('')
    setFilteredAddr(JSON.parse(localStorage.getItem(FILTER_ADDR) || ''))
  }

  const checkDelArr = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const tempArr = delArr
    console.log('tempArr', typeof tempArr)
    if (tempArr.indexOf(event.currentTarget.value) !== -1) tempArr.splice(tempArr.indexOf(event.currentTarget.value), 1)
    else tempArr.push(event.currentTarget.value)
    console.log('tempArr', tempArr)
    setDelArr(tempArr)
    console.log('delArr', delArr)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>hi?</p>
        <p>{localStorage.getItem(FILTER_ADDR)}</p>
        <p>delArr: {delArr}</p>
        {filteredAddr && filteredAddr.map((element: string | null, index) =>
          <React.Fragment key={index}><input type="checkbox" onClick={checkDelArr} value={element || ''} /><p>{element}</p></React.Fragment>
        )}
        <input onChange={changeAddr} value={addr} placeholder="입력해볼래?" />
        <p>{addr}</p>
        <button onClick={addAddr}>삽입</button>
      </header>
    </div>
  );
}
export default App;
