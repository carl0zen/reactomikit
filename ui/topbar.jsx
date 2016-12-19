import styled from "styled-components";
import {
  theme,
  Circle
} from "./index";

const { topbar, avatar } = theme;

export const Topbar = styled.header`
  background: ${topbar.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${topbar.height};
  box-shadow: 0 0 7px rgba(0,0,0,0.1);
  padding: 0 1em;
`;

export const Avatar = styled(Circle)`
  display: block;
  overflow: hidden;
  width: ${avatar.size};
  height: ${avatar.size};
  cursor: pointer;
  padding: 0;

  img {
    width: 100%;
  }
`;
