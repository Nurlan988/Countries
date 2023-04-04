import { RouterMain } from '../router';

import styled from "styled-components";
import { Container } from "./Container";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media(min-width: 767px) {
    padding: 4rem 0;
  }
`;

export const Main = ({countries, setCountries}) => {
  return(
    <Wrapper>
      <Container>
        <RouterMain countries={countries} setCountries={setCountries}/>
      </Container>
    </Wrapper>
  )
}