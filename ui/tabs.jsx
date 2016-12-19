import React from "react";
import styled from "styled-components";
import { theme } from "./index"

const { color, transition } = theme;

const TabsContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tab = styled.label`
  display: inline-block;
  padding: 1em 1em;
  margin: 0 1em;
  cursor: pointer;
  transition: color ${transition};
  position: relative;
  text-transform: uppercase;
  color: ${color.base};

  &:before {
    height: 3px;
    background-color: ${color.primary};
    width: 0;
    transition: width ${transition};
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${props => props.active &&`
    color: ${color.primary};

    &:before {
      width: 100%;
    }
  `}

  &:hover {
    color: ${color.primary};
  }
`;

Tab.displayName = 'Tab';

const TabContent = styled.section`
  padding: 1em;
`;

class Tabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.tabName = String(+new Date()); // Used to generate unique ids for the tabs in order to be easily accessed via e.target.id

    this.state = {
      currentTab: 0
    };
  }

  changeTab(e) {
    const target = e.target.id.split('-');

    target[0] === this.tabName && target[1] && this.setState({ currentTab: Number(target[1]) })
  }

  render() {
    const { children } = this.props;
    const { currentTab } = this.state;
    let content = null;

    return (
      <div>
        <TabsContainer>
          { React.Children.map(children, ( tab, index ) => {
            let active;

            if(tab.type.displayName === 'Tab') {
              if(index === currentTab) {
                active = true;
                content = tab.props.children;
              }

              return (
                <Tab active={ active } onClick={ this.changeTab } id={ `${this.tabName}-${index}` } >
                  { tab.props.label }
                </Tab>
              )
            }
          }) }
        </TabsContainer>
        <TabContent>
          { content }
        </TabContent>
      </div>
    );
  }
}

export { Tabs };