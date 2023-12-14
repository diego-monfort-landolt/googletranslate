import { Form } from 'react-bootstrap'
import { SectionType } from '../types'

type Props =
| { type: SectionType }

export const TextArea = ({ loading, type, value, onChange}) => {
  return (
    <Form.Control
    as='textarea'
    placeholder='Traduccion'
    style={{ height: '150px' }} />
  )
}
