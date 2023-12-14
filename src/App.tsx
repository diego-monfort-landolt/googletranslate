import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGES } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'

function App () {
  const { fromLanguage, toLanguage, setFromLanguage, setToLanguage, interchangeLangages } = useStore()
  return (
    <>
      <Container fluid>
        <h1>Google Translate</h1>

        <Row xs='auto'>
          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage} />
              <Form.Control
                as='textarea'
                placeholder='Introducir texto...'
                autoFocus
                style={{ height: '150px' }} />
            </Stack>

          </Col>
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGES} onClick={interchangeLangages}>
              <ArrowsIcon />
            </Button>
          </Col>
          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.To}
                value={toLanguage}
                onChange={setToLanguage}
              />
              <Form.Control
                as='textarea'
                placeholder='Traduccion'
                style={{ height: '150px' }} />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
