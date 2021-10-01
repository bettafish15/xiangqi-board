import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PIECE } from 'types';
import Piece from '../Piece';

interface Props {
  pieceName: PIECE;
}

export default {
  title: 'Piece',
  component: Piece,
} as Meta;

const Template: Story<Props> = (args: Props) => <Piece {...args} />;

export const Default = Template.bind({});
