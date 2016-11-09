import styled from 'styled-components';
import theme from './theme';

const { font, color, headings } = theme;

export const headingsSharedProperties = `
  font-family: ${headings.family};
  color: ${font.color};
  line-height: 190%;
`;

export const H1 = styled.h1`
  ${headingsSharedProperties}
  font-size: 3.5rem;
  color: black;
  font-weight: 100;
`;

export const H2 = styled.h2`
  ${headingsSharedProperties}
  font-size: 2em;
  line-height: 2.5rem;
  font-weight: 400;
  position: relative;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const H3 = styled.h3`
  ${headingsSharedProperties}
  font-size: 1.5rem;
  font-weight: 100;
`;

export const H4 = styled.h4`
  ${headingsSharedProperties}
  font-size: 1.5rem;
  font-weight: 500;
`;

export const P = styled.p`
  line-height: 21px;
  font-size: ${font.base};
  margin: 10px 0;
`;

export const Title = styled.header`
  background-color: ${props => props.dark ? color.black : color.secondary};
  color: ${color.white};
  align-items: center;
  justify-content: flex-start;
  padding: 1em 2em;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 600;

  &:before {
    display: block;
    content: '';
  }
`;

export const Code = styled.code`
  font-family: ${font.code};
  white-space: pre-wrap;
  background: rgba(103, 38, 92, 0.08);
  padding: 10px 20px;
  margin: 0;
  border-radius: 3px;
  font-weight: 500;
  font-size: ${font.base};
  color: #A9A4A8;
  display: inline-block;
  vertical-align: middle;
`;

export const Headline = styled.div`
  font-family: Helvetica Neue;
  font-weight: 100;
  font-size: 1.3em;
  padding: 1em 0;
  max-width: 1100px;
`;

export const Footnote = styled.small`
  font-size: 0.5em;
  opacity: 0.7;
`;

export const Powered = styled.small`
  font-size: 0.7em;
  opacity: 0.8;
`;

export const ErrorMessage = styled(Footnote)`
  color: ${color.alert};
`;
