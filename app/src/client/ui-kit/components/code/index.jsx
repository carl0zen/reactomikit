import React, { PropTypes } from 'react';
import Highlight from 'react-highlight';

import styles from './styles.scss';

const displayName = 'Code';
const defaultProps = {};
const propTypes = {
  children: PropTypes.node,
};

const component = (props) => (
  <div className={styles.root}>
    <Highlight lang="css">
      {props.children}
    </Highlight>
  </div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
