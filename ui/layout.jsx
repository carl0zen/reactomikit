import styled from "styled-components";
import {
  theme,
  borderProps,
  sizeProps,
  backgroundColorProps
} from "./index";

const { color, font, topbar, gutter } = theme;

export const Panel = styled.article`
  background: white;
  color: ${color.black};
  font-size: ${font.base};
  font-weight: 300;
  ${props => !props.noborder && `border: 1px solid ${color.border}`};
  width: ${props => props.width ? props.width : "100%"};
  ${props => borderProps(props)}
  transition: 
    transform 300ms ease-in-out,
    box-shadow 300ms ease-in-out,
    margin 300ms ease-in-out;
  box-shadow: 0 3px 3px rgba(0,0,0,0.1);

  ${props => props.dark && `
    color: ${color.white};
    background-color: ${color.black};
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 3px rgba(0,0,0,0.1);
  }
`;

export const ScrollView = styled.section`
  overflow: hidden;
  font-family: ${font.family};
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  ${props => props.horizontal && `
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    `
  }
  ${props => sizeProps(props)}
`;

export const MainContent = styled(ScrollView)`
  position: absolute;
  top: ${props => props.nobar ? 0 : topbar.height};
  right: 0;
  left: 0;
  bottom: 0;
  font-size: ${font.base};
  padding: ${gutter} 3em;

  ${props => props.bg && `
    background-color: ${props.bg};
  `}
`;

export const Slide = styled.section`
  ${backgroundColorProps}
  font-weight: 400;
  flex: 1;
  height: ${props => props.height ? props.height : "100%"};
  width: ${props => props.width ? props.width : "100%"};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 3em;
  color: ${color.white};
`;

export const App = styled.div`
  *, & {
    box-sizing: border-box;
  }
`;
