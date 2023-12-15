import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  autoFocus: string
  loading?: boolean
  onChange: (value: string) => void
  value: string
}
const commonStyles = { border: '1px solid #f5f5f5', height: '200px', boxShadow: '0 0 20px #000' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Loading...'
  return 'Traduccion'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <Form.Control
    autoFocus={ type === SectionType.From}
    as='textarea'
    disabled={type === SectionType.To}
    placeholder={getPlaceholder({ type, loading })}
    style={styles}
    value={value}
    onChange={handleChange} />
  )
}
