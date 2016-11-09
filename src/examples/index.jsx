import React from 'react';

import { View, App } from '../layout';

import FormExample from './form';
import TopbarExample from './topbar';
import TypographyExample from './typography';
import MainExample from './main';
import LayoutExample from './layout';
import BaseExample from './base';

const displayName = 'UI Kit';
const defaultProps = {};
const propTypes = {};

const UIKit = () => (
  <App>
    <TopbarExample />
    <View>
      <MainExample />
      <TypographyExample />
      <FormExample />
      <LayoutExample />
      <BaseExample />
    </View>
  </App>
);

UIKit.displayName = displayName;
UIKit.defaultProps = defaultProps;
UIKit.propTypes = propTypes;

export default UIKit;
