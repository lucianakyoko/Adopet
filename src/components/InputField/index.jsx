import {
  InputFieldContainer,
} from './style';

export function InputField({ id, type, placeholder, label, className }) {
  return (
    <InputFieldContainer className={className}>
      <label htmlFor={id}>
        {label}
        <div></div>
      </label>
      <input id={id} type={type} placeholder={placeholder}/>
      <p>Clique na foto para editar</p>
    </InputFieldContainer>
  )
}