import styled from 'styled-components';

const SvgContainer = styled.div<{
  height?: number;
  width?: number;
  $display?: string;
  marginLeft?: number;
  marginRight?: number;
  verticalAlign?: string;
  cursor?: string;
  float?: string;
  hidden?: boolean;
}>`
  visibility: ${props => (props.hidden ? 'hidden' : undefined)};
  height: 'auto';
  width: 'auto';
  display: ${props => (props.$display ? props.$display : undefined)};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}px` : '0px')};
  margin-right: ${props =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  vertical-align: ${props =>
    props.verticalAlign ? `${props.verticalAlign}` : undefined};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: ${props => props.float};

  & svg {
    height: ${props => (props.height ? `${props.height}px` : '100%')};
    width: ${props => (props.width ? `${props.width}px` : '100%')};
    cursor: ${props => (props.cursor ? `${props.cursor}` : `auto`)};
  }
`;

export default SvgContainer;
