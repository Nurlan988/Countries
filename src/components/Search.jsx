import styled from "styled-components";

import {IoSearch} from 'react-icons/io5';


const InputConteiner = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  alighn-items: center;
  
  border-radius: var(--radio);
  box-shadow: var(--shadow);
  width: 100%;
  marign-bottom: 1rem;

  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
`;


export const Search = ({search, setSearch}) => {


  return(
    <InputConteiner>
      <IoSearch/>
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputConteiner>
  )
} 