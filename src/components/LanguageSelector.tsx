import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGES, SUPPORTED_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
| { type: SectionType.From, value: FromLanguage, onChange: (Language: FromLanguage) => void }
| { type: SectionType.To, value: Language, onChange: (Language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label="Seleciona el Idioma" onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGES}>Detectar Idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
