import React from 'react'
import styled from 'styled-components';
import theme from './theme';
import { borderProps } from './helpers';

const { font, color, headings } = theme;

export const headingsSharedProperties = `
  font-family: ${headings.family};
  color: ${font.color};
  line-height: 190%;
`;

/**
 * @uikit H1
 * @import H1
 *
 * @description H1 header
 *
 * @category Typography
 */
export const H1 = styled.h1`
  ${headingsSharedProperties}
  font-size: 3.5rem;
  color: black;
  font-weight: 100;
`;

H1.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit H2
 * @import H2
 *
 * @description H2 header
 *
 * @category Typography
 */
export const H2 = styled.h2`
  ${headingsSharedProperties}
  font-size: 2em;
  line-height: 2.5rem;
  font-weight: 400;
  position: relative;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

H2.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit H3
 * @import H3
 *
 * @description H3 header
 *
 * @category Typography
 */
export const H3 = styled.h3`
  ${headingsSharedProperties}
  font-size: 1.5rem;
  font-weight: 100;
`;

H3.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit H4
 * @import H4
 *
 * @description H4 header
 *
 * @category Typography
 */
export const H4 = styled.h4`
  ${headingsSharedProperties}
  font-size: 1.5rem;
  font-weight: 500;
`;

H4.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit P
 * @import P
 *
 * @description Paragraph
 *
 * @category Typography
 */
export const P = styled.p`
  line-height: 21px;
  font-size: ${font.base};
  margin: 10px 0;
`;

P.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit Title
 * @import Title
 *
 * @description Title
 *
 * @category Typography
 */
export const Title = styled.header`
  background-color: ${props => props.dark ? color.black : color.secondary};
  color: ${color.white};
  align-items: center;
  justify-content: flex-start;
  padding: 1em 2em;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 600;
  &:before {
    display: block;
    content: '';
  }
`;

Title.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit Code
 * @import Code
 *
 * @description Code
 *
 * @category Typography
 */
export const Code = styled.pre`
  font-family: ${font.code};
  white-space: pre-wrap;
  background: rgba(103, 38, 92, 0.08);
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 500;
  font-size: ${font.base};
  color: #A9A4A8;
  vertical-align: middle;
  cursor: pointer;
`;

Code.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit CollapsableCode
 * @import CollapsableCode
 *
 * @description Accordion-like code component
 *
 * @category Base
 */
export class CollapsableCode extends React.Component {
  state = {
    expanded: false
  }
  
  static defaultProps = { children: '<html></html>'}
  
  render() {
    return this.state.expanded ? (
      <Code onClick={() => this.setState({expanded: false})}>{this.props.children}</Code>
    )  : (
      <Code onClick={() => this.setState({expanded: true})}>See code...</Code>
    )
  }
}

CollapsableCode.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit Headline
 * @import Headline
 *
 * @description Headline
 *
 * @category Typography
 */
export const Headline = styled.div`
  font-family: Helvetica Neue;
  font-weight: 100;
  font-size: 1.3em;
  padding: 1em 0;
  max-width: 1100px;
`;
Headline.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit Footnote
 * @import Footnote
 *
 * @description Footnote
 *
 * @category Typography
 */
export const Footnote = styled.small`
  font-size: 0.5em;
  opacity: 0.7;
`;
Footnote.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit Powered
 * @import Powered
 *
 * @description Powered
 *
 * @category Typography
 */
export const Powered = styled.small`
  font-size: 0.7em;
  opacity: 0.8;
`;
Powered.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit ErrorMessage
 * @import ErrorMessage
 *
 * @description ErrorMessage
 *
 * @category Typography
 */
export const ErrorMessage = styled(Footnote)`
  color: ${color.alert};
`;
ErrorMessage.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }

/**
 * @uikit TextLabel
 * @import TextLabel
 *
 * @description TextLabel
 *
 * @category Typography
 */
export const TextLabel = styled.label`
  ${props => borderProps(props)}
  width: ${props => props.width ? props.width : '100%'};
  color: ${color.base};
  line-height: 250%;
  padding: 5px 1em;
  display: block;
`;
TextLabel.defaultProps = { children: 'Lorem ipsum dolor sit amet consectetur' }
