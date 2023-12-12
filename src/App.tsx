import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { type State } from './types'

// create a initial state

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  loading: false
}

// create a reducer

function reducer (state: State, action) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguagee: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      result: payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: payload
    }
  }
  return state
}

function App () {
  // use the state useReducer

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Google Translate</h1>
    </>
  )
}

export default App
