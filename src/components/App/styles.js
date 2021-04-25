import styled from "styled-components";
import { tablet } from "../../styles/mediaQuerries";

export const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  height: 100%;
  background-color: ${(props) => props.theme.background} ${tablet} {
    width: 96%;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  color: ${(props) => props.theme.textSecondary};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.backgroundSecondary};
`;
