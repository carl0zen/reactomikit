import React from 'react';
import styled from 'styled-components';
import {
  themeColor
} from 'ui';

export const Notice = styled.div`
  background-color: ${ props => themeColor(props.type) };
  padding: 0.5em;
`;

Notice.propTypes = {
  type: React.PropTypes.oneOf([
    'alert',
    'warning',
    'success',
    'info',
    'error'
  ])
};