import Form from 'react-bootstrap/Form'
import { SUPPORTED_LANGUAGES } from '../constants'

export const LanguageSelector = ({ onChange }) => {
  return (
    <Form.Select aria-label="Seleciona el Idioma">
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
