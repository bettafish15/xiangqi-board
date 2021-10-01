/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import SvgContainer from './svgicon-styles';

interface Props {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  $display?: string;
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  verticalAlign?: string;
  cursor?: string;
  float?: string;
  hidden?: boolean;
  transform?: string;
  opacity?: number;
  onClick?(): void;
}

const SvgIcon: React.FC<Props> = props => {
  const { Icon, transform, opacity, children } = props;

  if (children) {
    return <SvgContainer {...props}>{children}</SvgContainer>;
  }

  return (
    <SvgContainer {...props}>
      {Icon && (
        <Icon
          transform={transform || undefined}
          opacity={opacity || undefined}
        />
      )}
    </SvgContainer>
  );
};

export default SvgIcon;
