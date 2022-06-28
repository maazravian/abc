import {storiesOf} from '@storybook/angular';
import {InputComponent} from 'src/app/component/input/input.component';
import { moduleMetadata, Meta, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta;
export const actionsData = {
  onChange: action('onChange'),
};
const template: Story = (args: any) => ({
  component: InputComponent,
  props: args,
});
export const Input = template.bind({});
Input.args = {
  ...actionsData,
};
