import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='my-3 mt-5 row  row-cols-1 row-cols-md-5 mb-3 text-center'>
        {
          new Array(25).fill('*').map((a,i)=>{
            return(
              <Card key={`card-${i}`}/>
            )
          })
        }

        </div>
    </>
  )
}

export default App
