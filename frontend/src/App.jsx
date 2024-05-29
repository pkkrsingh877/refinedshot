import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <form action="/api/edit" method="post">
        <input type="file" name="image" id="image" />
        <button type="submit">Upload</button>
      </form>
    </>
  )
}

export default App
