import React from 'react';

import { View } from './layout';

import FormExample from './examples/form';
import TopbarExample from './examples/topbar';
import TypographyExample from './examples/typography';
import MainExample from './examples/main';
import ContentExample from './examples/content';
import ButtonsExample from './examples/buttons';

const displayName = 'UI Kit';
const defaultProps = {};
const propTypes = {};

const UIKit = () => (
  <div>
    <TopbarExample />
    <View>
      <MainExample />
      <TypographyExample />
      <FormExample />
      <ContentExample />
      <ButtonsExample />
    </View>
  </div>
);

UIKit.displayName = displayName;
UIKit.defaultProps = defaultProps;
UIKit.propTypes = propTypes;

export default UIKit;
