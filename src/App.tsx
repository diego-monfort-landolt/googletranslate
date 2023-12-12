import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLanguage('English')
      }}
      >
        Cambiar a Español</button>

      {fromLanguage}
    </>
  )
}

export default App
