import React from 'react';
import './App.scss';
import { FILTER_ADDR } from './models'
import { addFilterAddr, delFilterAddr } from './apis'


function App() {

  const [addr, setAddr] = React.useState('')
  const [filteredAddr, setFilteredAddr] = React.useState<Array<string>>(JSON.parse(localStorage.getItem(FILTER_ADDR) || ''))
  const [delArr, setDelArr] = React.useState<Array<string>>([])

  const changeAddr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddr(e.target.value)
  }

  const addAddr = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addFilterAddr(`*://${addr}/*`)
    setAddr('')
    setFilteredAddr(JSON.parse(localStorage.getItem(FILTER_ADDR) || ''))
  }

  const checkDelArr = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const tempArr = delArr.slice() // deep copy
    if (tempArr.indexOf(event.currentTarget.value) !== -1) tempArr.splice(tempArr.indexOf(event.currentTarget.value), 1)
    else tempArr.push(event.currentTarget.value)
    setDelArr(tempArr)
  }

  const delAddr = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const tempArr = delArr.slice()
    tempArr.forEach(addr => delFilterAddr(addr))
    setAddr('')
    setDelArr([])
    setFilteredAddr(JSON.parse(localStorage.getItem(FILTER_ADDR) || ''))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>hi?</p>
        <p>delArr: {delArr}</p>
        {filteredAddr && filteredAddr.map((element: string | null, index) =>
          <React.Fragment key={index}><input type="checkbox" onClick={checkDelArr} value={element || ''} /><p>{element}</p></React.Fragment>
        )}
        <input onChange={changeAddr} value={addr} placeholder="입력해볼래?" />
        <p>{addr}</p>
        <button onClick={addAddr}>삽입</button>
        <button onClick={delAddr}>삭제</button>
      </header>
    </div>
  );
}
export default App;
