import { Button } from '../../../../design/primitives';

class Prop {
  constructor(
    public name: string,
    public type: string,
    public defaultValue: string,
    public description: string
  ) {}
}

class Component {
  constructor(
    public label: string,
    public component: JSX.Element,
    public code?: string,
    public description?: string
  ) {}
}

export const buttonComponentData: any = {
  props: [
    new Prop(
      'style',
      'StyleProp<ViewStyle>',
      'undefined',
      'Custom style for the button container.'
    ),
    new Prop(
      'type',
      'string',
      'undefined',
      'The type of the button, e.g., Primary, Secondary.'
    ),
    new Prop(
      'text',
      'string',
      'undefined',
      'The text displayed on the button.'
    ),
    new Prop(
      'icon',
      'string',
      'undefined',
      'The name of the icon displayed on the button.'
    ),
    new Prop(
      'iconSize',
      'string | number',
      'undefined',
      'The size of the icon.'
    ),
    new Prop('iconColor', 'string', 'undefined', 'The color of the icon.'),
    new Prop(
      'iconAlign',
      'string',
      'undefined',
      'The alignment of the icon within the button.'
    ),
    new Prop(
      'iconType',
      'string',
      'undefined',
      'The type of the icon, if using a specific set or library.'
    ),
    new Prop(
      'iconStyle',
      'StyleProp<ViewStyle>',
      'undefined',
      'Custom style for the icon.'
    ),
    new Prop(
      'loading',
      'boolean',
      'false',
      'If true, displays a loading indicator in the button.'
    ),
    new Prop(
      'onPress',
      '() => void',
      'undefined',
      'Function to call when the button is pressed.'
    ),
    new Prop(
      'contentStyle',
      'StyleProp<TextStyle>',
      'undefined',
      'Custom style for the content inside the button, typically the text.'
    ),
  ],
  examples: {
    'Default Button (Secondary)': [
      new Component(
        'text="Click me"',
        <Button text="Click me" onPress={() => alert('hello')} />,
        '<Button onPress={() => alert("hello")} />',
        'A default button, also used as a secondary button.'
      ),
      new Component(
        'icon="heart"',
        (
          <Button
            text="Add to favourites"
            onPress={() => alert('hello')}
            icon="heart"
          />
        )
      ),
      new Component(
        'iconAlign="right"',
        (
          <Button
            text="Get started"
            onPress={() => alert('hello')}
            icon="arrow-right"
            iconAlign="right"
          />
        )
      ),
      new Component(
        'text="" icon="gear"',
        <Button onPress={() => alert('hello')} icon="gear" />
      ),
      new Component(
        'loading={true}',
        (
          <Button
            text="Get started"
            onPress={() => alert('hello')}
            icon="arrow-right"
            iconAlign="right"
            loading={true}
          />
        )
      ),
    ],
    'Primary Button': [
      new Component(
        'text="Sign up"',
        <Button type="Primary" text="Sign up" onPress={() => alert('hello')} />,
        '<Button onPress={() => alert("hello")} type="Primary" />',
        'A primary button, used for main (positive) actions.'
      ),
      new Component(
        'icon="messages"',
        (
          <Button
            type="Primary"
            text="Contact us"
            onPress={() => alert('hello')}
            icon="messages"
          />
        )
      ),
      new Component(
        'iconAlign="right"',
        (
          <Button
            type="Primary"
            text="Log in"
            onPress={() => alert('hello')}
            icon="right-to-bracket"
            iconAlign="right"
          />
        )
      ),
      new Component(
        'text="" icon="check"',
        <Button type="Primary" onPress={() => alert('hello')} icon="check" />
      ),
      new Component(
        'loading={true}',
        (
          <Button
            type="Primary"
            text="Get started"
            onPress={() => alert('hello')}
            icon="arrow-right"
            iconAlign="right"
            loading={true}
          />
        )
      ),
    ],
    'Negative Button': [
      new Component(
        'text="Leave"',
        <Button type="Negative" text="Leave" onPress={() => alert('hello')} />,
        '<Button onPress={() => alert("hello")} type="Negative" />',
        'A negative button, used for destructive or irreversible actions.'
      ),
      new Component(
        'icon="ban"',
        (
          <Button
            type="Negative"
            text="Remove"
            onPress={() => alert('hello')}
            icon="ban"
          />
        )
      ),
      new Component(
        'iconAlign="right"',
        (
          <Button
            type="Negative"
            text="Delete"
            onPress={() => alert('hello')}
            icon="trash-can"
            iconAlign="right"
          />
        )
      ),
      new Component(
        'text="" icon="xmark"',
        <Button type="Negative" onPress={() => alert('hello')} icon="xmark" />
      ),
      new Component(
        'loading={true}',
        (
          <Button
            type="Negative"
            text="Get started"
            onPress={() => alert('hello')}
            icon="arrow-right"
            iconAlign="right"
            loading={true}
          />
        )
      ),
    ],
    'Naked Button (Link)': [
      new Component(
        'text="Create account"',
        (
          <Button
            type="Naked"
            text="Create account"
            onPress={() => alert('hello')}
          />
        ),
        '<Button onPress={() => alert("hello")} type="Naked" />',
        'A button without background or borders, effectively a link.'
      ),
      new Component(
        'icon="bookmark"',
        (
          <Button
            type="Naked"
            text="Save for later"
            onPress={() => alert('hello')}
            icon="bookmark"
          />
        )
      ),
      new Component(
        'iconAlign="right"',
        (
          <Button
            type="Naked"
            text="View bag"
            onPress={() => alert('hello')}
            icon="bag-shopping"
            iconAlign="right"
          />
        )
      ),
      new Component(
        'text="" icon="circle-user"',
        (
          <Button
            type="Naked"
            onPress={() => alert('hello')}
            icon="circle-user"
          />
        )
      ),
      new Component(
        'loading={true}',
        (
          <Button
            type="Naked"
            text="Get started"
            onPress={() => alert('hello')}
            icon="arrow-right"
            iconAlign="right"
            loading={true}
          />
        )
      ),
      new Component(
        'type="Naked Primary"',
        (
          <Button
            type="Naked Primary"
            text="Learn more"
            onPress={() => alert('hello')}
            icon="circle-info"
          />
        )
      ),
      new Component(
        'type="Naked Negative"',
        (
          <Button
            type="Naked Negative"
            text="Delete"
            onPress={() => alert('hello')}
            icon="trash"
            iconAlign="right"
          />
        )
      ),
      new Component(
        'style={{ backgroundColor: "transparent", padding: 0 }}',
        (
          <Button
            type="True Naked"
            text="True naked"
            onPress={() => alert('hello')}
            style={{ backgroundColor: 'transparent', padding: 0 }}
          />
        )
      ),
    ],
  },
};
