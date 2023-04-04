import styled from "styled-components";
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: "var(--radio)",
      padding: '0,25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: 'var(--colors-ui-base)',
    }),
  }
})`
  width: 200px;
  border-radius: var(--radiuo);
  font-family: var(--family);
  border: none;
  margin-top: 1.5rem;
  
  @media(min-width: 767px) {
    margin-top: 0;
  }

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }

`;

