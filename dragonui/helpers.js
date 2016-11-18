import styled from 'styled-components';
import { css } from 'styled-components';

import theme from './theme';

const { color } = theme;

// Spacing

/*
 * @uikit Padder
 * @import Padder
 *
 * @category helpers
 */
export const Padder = styled.section`
  padding: ${props => props.amount ? props.amount : '2em'};
`;

export const Spacer = styled.div`
  > * {
    margin: ${props => props.amount ? props.amount : '1em'};
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

// Flex
export const Flex = styled.div`
  display: flex;
  ${props => props.wrap && 'flex-wrap: wrap;'}
  ${props => props.columnReverse && 'flex-direction: column-reverse;'}
  ${props => props.rowReverse && 'flex-direction: row-reverse;'}
  ${props => props.spaceBetween && 'justify-content: space-between;'}
`

export const Inline = styled.div`
  ${props => borderProps(props)}
  ${props => marginProps(props)}
  flex-wrap: ${props => props.nowrap ? 'nowrap' : 'wrap'};
  ${props => props.start && 'align-items: flex-start' }
  ${props => props.end && 'align-items: flex-end' }
  ${props => props.center && 'align-items: center' }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled(Inline)`
  flex-direction: column;
  justify-content: initial;
  &:last-child {
    margin: 0;
  }
  ${props => props.spaced && `
    > * {
      margin: 10px 0;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
  h3 {
    flex-grow: 0;
  }
`;

// Alignment

export const Center = styled.div`
  text-align: center;
  margin: 0 auto;
`;

// Positioning

export const Relative = styled.div`
  position: relative;
`;

export const Absolute = styled.div`
  position: absolute;
  ${props => props.right && `right: ${props.padded? '1em': '0'};` }
  ${props => props.left && `left: ${props.padded? '1em': '0'}` };
  ${props => props.top && `top: ${props.padded? '1em': '0'}` };
  ${props => props.bottom && `bottom: ${props.padded? '1em': '0'}` };
`;

export const HighlightBorders = styled.div`
  border: 3px solid ${color.alert};
`;


// Media Queries:

export const screenSizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phablet: 572,
  phone: 376
}

export const media = Object.keys(screenSizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${screenSizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

// Prop passing Shorthands

export const borderProps = (props) => `
  ${props.borderBottom && `border-bottom: 1px solid ${color.border}`};
  ${props.borderTop && `border-top: 1px solid ${color.border}`};
  ${props.borderLeft && `border-left: 1px solid ${color.border}`};
  ${props.borderRight && `border-right: 1px solid ${color.border}`};
`

export const marginProps = (props) => `
  ${props.marginBottom && `margin-bottom: ${typeof(props.marginBottom) === "string" ? props.marginBottom : '1em' };`}
  ${props.marginTop && `margin-top: ${typeof(props.marginTop) === "string" ? props.marginTop : '1em' };`}
  ${props.marginLeft && `margin-left: ${typeof(props.marginLeft) === "string" ? props.marginLeft : '1em' };`}
  ${props.marginRight && `margin-right: ${typeof(props.marginRight) === "string" ? props.marginRight : '1em' };`}
`

// Patterns
export const Collapsable = styled.section`
  opacity: 1;
  display: flex;
  flex-direction: column;
  transition: all 300ms ease-in-out;
  overflow: hidden;
  max-height: 9999px;
  ${props => props.collapsed &&`
    max-height: 0;
    opacity: 0;
    transition: all 300ms out;
  `}
`;

export const Ellipsis = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%' };
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`