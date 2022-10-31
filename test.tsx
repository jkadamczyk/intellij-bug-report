type RootColors = | 'foo' | 'bar' | 'baz' | 'xyz';
import React from 'react';

function selectType<T extends readonly RootColors[]>(...colors: T): T {
    return colors;
}

export const textColors = selectType(
    'foo',
    'bar',
    'baz',
);

export type TextColor = typeof textColors[number];

type Props = {
    color: TextColor
}

const Text = ({color}: Props) => {
    return null
}

const Component = () => {
    return (
        <Text color=" " />
    )
}
