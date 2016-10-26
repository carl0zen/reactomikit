import React from 'react';

import { View, App } from './layout';

import FormExample from './examples/form';
import TopbarExample from './examples/topbar';
import TypographyExample from './examples/typography';
import MainExample from './examples/main';
import LayoutExample from './examples/layout';
import ButtonsExample from './examples/buttons';

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
      <ButtonsExample />
    </View>
  </App>
);

UIKit.displayName = displayName;
UIKit.defaultProps = defaultProps;
UIKit.propTypes = propTypes;

export default UIKit;
