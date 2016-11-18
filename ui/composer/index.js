import React from "react";
import styled from "styled-components";

import {
  Absolute,
  Collapsable,
  Ellipsis
} from '../helpers'

import {
  Button,
  IconButton,
} from '../button'

import {
  TextLabel,
} from '../typography'

import {
  Placeholder,
  Form,
  Input,
  Select,
} from '../form'

import {
  Panel,
} from '../layout'

import {
  Inline,
  Padder,
  Relative,
} from "../helpers"

import RichTextEditor from "./rich-text-editor";

import MinusIcon from "../icon/minus";
import AddIcon from "../icon/add";

export const EmailComposer = styled(Form)`
  width: auto;
  display: inline-block;
  vertical-align: middle;
`

const EmailPanel = styled(Panel)`
  position: relative;
  display: inline-block;in
  vertical-align: middle;
  transition: width 300ms ease;
  width: ${props => props.collapsed ? '250px':'450px'};
`;

/**
 * @uikit Composer
 * @import Composer
 *
 * @description Composer
 * @category Composer
 */
export class Composer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBody = this.toggleBody.bind(this);
    this.toggleExtraFields = this.toggleExtraFields.bind(this);
    
    const bodyCollapsed = props.expanded ? false : props.showBody ? false : true;
    const extraFieldsCollapsed = props.showExtraFields ? false : true;
    
    this.state = {
      bodyCollapsed: bodyCollapsed,
      extraFieldsCollapsed: extraFieldsCollapsed
    }
  }
  
  toggleBody() {
    this.setState({ bodyCollapsed: !this.state.bodyCollapsed })
  }
  
  toggleExtraFields() {
    this.setState({ extraFieldsCollapsed: !this.state.extraFieldsCollapsed })
  }
  
  render() {
    const {handleMessageSent} = this.props;
    const {bodyCollapsed, extraFieldsCollapsed} = this.state;
    return (
      <EmailComposer>
        <EmailPanel width="400px" collapsed={ bodyCollapsed }>
          <header>
            <Absolute right top>
              <IconButton onClick={ this.toggleBody }>
                { bodyCollapsed ? <AddIcon /> : <MinusIcon /> }
              </IconButton>
            </Absolute>
            <TextLabel borderBottom>
              <Ellipsis maxWidth="90%">To: Donavon Frankentreiter</Ellipsis>
            </TextLabel>
          </header>
          <Collapsable collapsed={ bodyCollapsed }>
            <Relative>
              <Input ref="subject" borderBottom type="text" placeholder="Subject" />
              <Absolute right top>
                <IconButton onClick={ this.toggleExtraFields }>
                  { extraFieldsCollapsed ? <AddIcon /> : <MinusIcon /> }
                </IconButton>
              </Absolute>
              <Collapsable collapsed={ extraFieldsCollapsed }>
                <Input borderBottom type="text" placeholder="CC:" />
                <Input borderBottom type="text" placeholder="BCC:" />
                <Inline center borderBottom>
                  <Placeholder>From:</Placeholder>
                  <Select width="80%">
                    <option>johndoe@hotmail.com</option>
                    <option>jayz@alphaisghts.com</option>
                    <option>paulmccartney@alphasights.com</option>
                    <option>michelpfeiffer@alphasights.com</option>
                  </Select>
                </Inline>
              </Collapsable>
            </Relative>
            <RichTextEditor />
            
            <Panel noborder borderTop>
              <Padder amount="1em">
                <Button primary onClick={ handleMessageSent }>Send</Button>
                <Select width="70%">
                  <option>Select Template</option>
                  <option>jayz@alphaisghts.com</option>
                  <option>paulmccartney@alphasights.com</option>
                  <option>michelpfeiffer@alphasights.com</option>
                </Select>
              </Padder>
            </Panel>
          </Collapsable>
        </EmailPanel>
      </EmailComposer>
    )
  }
}

Composer.displayName = Composer.name;
Composer.propTypes = {
  handleMessageSent: React.PropTypes.func,
  expanded: React.PropTypes.bool,
  showExtraFields: React.PropTypes.bool
};
