import {useContext} from 'react'
import {Context} from '../contexts/ContextProvider'
import Test from './Test'
import {useCounterStore} from '../store/useCounterStore'

function Home() {
  // call useCounterStore hook ONCE at the top level to get state and functions of zustand store 
  // const { newCounter, incrementCounter, decrementCounter, reset } = useCounterStore();
  // const { counter, changeCounter, counter1, changeCounter1 } = useContext(Context);

  console.log("home")
  
  return (
    <div>
      {/* <h1 className='text-3xl font-bold '>{counter}</h1>
      <button onClick={changeCounter} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>change counter</button>
      
      <h1 className='text-3xl font-bold '>{counter1}</h1>
      <button onClick={changeCounter1} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>change counter1</button>
      
      <h1 className='text-3xl font-bold '>{newCounter}</h1>
      <button onClick={incrementCounter} className='bg-blue-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg bg-black'>increment counter</button>
      <button onClick={decrementCounter} className='bg-blue-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg'>decrement counter</button>
      <button onClick={reset} className='bg-blue-500 m-2 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-lg'>reset</button>
      
      <Test/> */}
    </div>
  )
}

export default Home