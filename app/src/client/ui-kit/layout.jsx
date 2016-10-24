import styled from 'styled-components';
import theme from './theme';
import { Padder } from './helpers';

const { color, nav, font } = theme;

export const Topbar = styled.header`
  background: ${props => props.dark ? '#38383B' : nav.background};
  color: ${props => props.dark ? '#FFF' : 'inherit'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${nav.height};

  img {
    width: 230px;
  }
`;

export const Wrapper = styled(Padder)`
  display: inline-block;
  width: 100%;
`;

export const Panel = styled.article`
  background: white;
`;

export const ScrollView = styled.section`
  overflow: hidden;
  font-family: ${font.family};
  -webkit-overflow-scrolling: touch;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : '100%'};
  overflow-y: auto;
  ${props => props.horizontal && `
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    `
  }
`;

export const View = styled(ScrollView)`
  position: absolute;
  top: ${nav.height};
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Viewport = styled.section`
  font-family: Avenir Next;
  font-weight: 400;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 3em;
  background-color: ${color.black};
  color: ${color.white};
`;
