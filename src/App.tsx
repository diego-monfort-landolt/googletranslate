import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGES } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App () {
  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    setFromLanguage,
    setToLanguage,
    interchangeLangages,
    setFromText,
    setResult
  } = useStore()

  return (
    <>
      <Container fluid>
        <h1>Google Translate</h1>

        <Row>
          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage} />

              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
                />
            </Stack>

          </Col>
          <Col xs='auto'>
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
              <TextArea
                type={ SectionType.To }
                value={result}
                onChange={setResult}
                loading={loading}
                />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
