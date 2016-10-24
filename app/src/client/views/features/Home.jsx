import React from 'react';

import { View, ScrollView } from '../../ui-kit/layout';
import TypographyExample from '../../ui-kit/examples/typography';
import TopbarExample from '../../ui-kit/examples/topbar';

const displayName = 'Home';
const defaultProps = {};
const propTypes = {};

const component = () => (
  <div>
    <TopbarExample />
    <View>
      <ScrollView>
        <TypographyExample />
      </ScrollView>
    </View>
  </div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
