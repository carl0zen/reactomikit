import React from 'react';

import { View } from '../../ui-kit/layout';

import TypographyExample from '../../ui-kit/examples/typography';
import TopbarExample from '../../ui-kit/examples/topbar';
import MainExample from '../../ui-kit/examples/main';
import FormExample from '../../ui-kit/examples/form';
import ContentExample from '../../ui-kit/examples/content';

const displayName = 'Home';
const defaultProps = {};
const propTypes = {};

const component = () => (
  <div>
    <TopbarExample />
    <View>
      <MainExample />
      <TypographyExample />
      <FormExample />
      <ContentExample />
    </View>
  </div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
