import React from 'react';
import { Story, Meta } from '@storybook/react';

import Board from '../Board';

export default {
  title: 'Board',
  component: Board,
} as Meta;

const Template: Story<Record<string, unknown>> = (
  args: Record<string, unknown>,
) => <Board {...args} />;

export const Default = Template.bind({});
