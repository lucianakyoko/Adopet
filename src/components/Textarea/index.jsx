import {
  TextareaFieldContainer,
} from './style'

export function Textarea({label, id, placeholder}) {
  return (
    <TextareaFieldContainer>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} cols="30" rows="10" placeholder={placeholder}></textarea>
    </TextareaFieldContainer>
  )
}