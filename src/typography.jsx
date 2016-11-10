import styled from 'styled-components';
import theme from './theme';

const { font, color, headings } = theme;

export const headingsSharedProperties = props =>`
  font-family: ${props.theme.fontFamily || headings.family};
  color: ${props.theme.color || font.color};
  line-height: 190%;
`;

export const H1 = styled.h1`
  ${headingsSharedProperties}
  font-size: ${props => props.theme.h1.fontSize || '3.5rem'};
  color: ${props => props.theme.h1.color || color.black};
  font-weight: ${props => props.theme.h1.fontWeight || '300'};
`;

export const H2 = styled.h2`
  ${headingsSharedProperties}
  font-size: ${props => props.theme.h2.fontSize || '2em'};
  line-height: ${props => props.theme.h2.lineHeight || '2.5rem'};
  font-weight: ${props => props.theme.h2.fontWeight || '300';
  position: relative;
  margin: ${props => props.theme.h2.margin || '0.5em 0'};
`;

export const H3 = styled.h3`
  ${headingsSharedProperties}
  font-size: ${props => props.theme.h3.fontSize || '2em'};
  font-weight: ${props => props.theme.h3.fontWeight || '100';

`;

export const H4 = styled.h4`
  ${headingsSharedProperties}
  font-size: ${props => props.theme.h4.fontSize || '1.5em'};
  font-weight: ${props => props.theme.h4.fontWeight || '500';
`;

export const P = styled.p`
  line-height: ${props => props.theme.p.lineHeight || '21px'};
  font-size: ${props => props.theme.p.fontSize || font.base};
  margin: ${props => props.theme.p.margin || '10px 0'};
`;

export const Title = styled.header`
  background-color: ${color.secondary};

  ${props => props.dark &&`
    background-color: ${props.theme.title.dark.backgroundColor || color.black};
    `
  }

  color: ${props => props.theme.title.color || color.white};
  align-items: center;
  justify-content: flex-start;
  padding: ${props => props.theme.title.padding || '1em 2em'};
  letter-spacing: ${props => props.theme.title.letterSpacing || '5px'};
  text-transform: ${props => props.theme.title.textTransform || 'uppercase'};
  font-weight: ${props => props.theme.title.fontWeight || '600';


  &:before {
    display: block;
    content: '';
  }
`;

export const Code = styled.code`
  font-family: ${props => props.theme.code.fontFamily || font.code};
  white-space: pre-wrap;
  background: ${props => props.theme.code.background || 'rgba(103, 38, 92, 0.08)'};
  padding: ${props => props.theme.code.padding || '10px 20px'};
  margin: 0;
  border-radius: ${props => props.theme.code.borderRadius || '3px'};
  font-weight: ${props => props.theme.code.fontWeight || '500';
  font-size: ${props => props.theme.code.fontSize || font.base};
  color: ${props => props.theme.code.color || '#A9A4A8'};
  display: inline-block;
  vertical-align: middle;
`;

export const Headline = styled.div`
  font-family: ${props => props.theme.headline.fontFamily || 'Helvetica Neue'};
  font-weight: ${props => props.theme.headline.fontWeight || '100';
  font-size: ${props => props.theme.headline.fontSize || '1.3em'};
  padding: ${props => props.theme.headline.padding || '1em 0'};
  max-width: ${props => props.theme.headline.maxWidth || '1100px'};
`;

export const Footnote = styled.small`
  font-size: ${props => props.theme.footnote.fontSize || '0.5em'};
  opacity: ${props => props.theme.footnote.opacity || '0.7'};
`;

export const Powered = styled.small`
  font-size: ${props => props.theme.powered.fontSize || '0.7em'};
  opacity: ${props => props.theme.powered.opacity || '0.8'};
`;
