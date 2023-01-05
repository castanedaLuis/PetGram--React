import React from 'react'
import {GlobalStyle} from './createGlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'

function App() {
  return (
    <>
        <GlobalStyle/>
        <ListOfCategories />
    </>
  )
}

export default App