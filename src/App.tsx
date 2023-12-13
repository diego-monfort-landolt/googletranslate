import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGES } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'

function App () {
  const { fromLanguage, toLanguage, interchangeLangages } = useStore()
  return (
    <>
      <Container fluid>
        <h1>Google Translate</h1>

        <Row>
          <Col>
            <LanguageSelector />
          </Col>
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGES} onClick={interchangeLangages}>
             <ArrowsIcon />
            </Button>
          </Col>
          <Col>
          <LanguageSelector />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
