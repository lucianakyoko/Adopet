import {
  InputFieldContainer,
} from './style';

export function InputField({ id, type, placeholder, label }) {
  return (
    <InputFieldContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder}/>
    </InputFieldContainer>
  )
}