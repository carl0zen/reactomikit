import styled, {injectGlobal, ThemeProvider } from 'styled-components';
import theme from './theme';

const { color, nav, font } = theme;

export const Topbar = styled.header`
  background: ${props => props.theme.topbar.background || nav.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.theme.topbar.height || nav.height};

  img {
    width: ${props => props.theme.topbar.img.size || '230px'};
  }
`;

export const Panel = styled.article`
  background: ${props => props.theme.panel.background || color.white};
  color: ${props => props.theme.panel.color || color.black};
  font-size: ${props => props.theme.panel.fontSize || font.base};
  font-weight: ${props => props.theme.panel.fontWeight || '300'};

  ${props => props.dark && `
    color: ${props => props.theme.panel.dark.color || color.white};
    background-color: ${props => props.theme.panel.dark.backgroundColor || color.black};
  `}
`;

export const ScrollView = styled.section`
  overflow: hidden;
  font-family: ${props => props.theme.scrollView.fontFamily || font.family};
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
  top: ${props => props.nobar ? 0 : props.theme.topbar.height || nav.height};
  right: 0;
  left: 0;
  bottom: 0;
  font-size: ${props => props.theme.view.fontSize || font.base};
  background-color: ${props => props.bg ? props.bg : props.theme.view.backgroundColor };
`;

export const Viewport = styled.section`
  flex: 1;
  height: ${props => props.height ? props.height : '100%'};
  width: ${props => props.width ? props.width : '100%'};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 3em;
  background-color: ${props => props.bg ? props.bg : props.theme.viewport.backgroundColor || color.black};
  color: ${props => props.theme.viewport.color || color.white};
`;

injectGlobal`
*, & {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

const App = (props) => {
  return (
    <ThemeProvider theme={props.theme || theme}>
      {props.children}
    </ThemeProvider>
  );
}
