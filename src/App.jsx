import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter.jsx'

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={-50} interval={100} />
      <Counter start={5} interval={5000} />
    </>
  );
}

export default App