import styled from "styled-components";
import theme from "./theme";

const { color } = theme

export const topbar = {
  height: '70px',
  background: color.primary
};

/**
 * @uikit Topbar
 * @import Topbar
 *
 * @category Core
 */
export const Topbar = styled.header`
  background: ${topbar.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${topbar.height};
  img {
    width: 230px;
  }
  color: white;
  padding-left: 1em;
  font-size: 1.5em;
`;
Topbar.defaultProps = { children: 'Topbar' }