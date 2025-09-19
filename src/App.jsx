
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  return (
    <>
      <h1>Hello World</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
       <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
