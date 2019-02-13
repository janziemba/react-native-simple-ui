import hasStyleChanged from '../hasStyleChanged';

it('returns true if style changed', () => {
    const propsOnWhichDependsTheStyle = ['color', 'size'];
    const nextProps = { color: 'blue', size: 1 };
    const currentProps = { color: 'blue', size: 2 };

    const result = hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, currentProps);

    expect(result).toBeTruthy();
});

it('returns false if style didn\'t changed', () => {
    const propsOnWhichDependsTheStyle = ['color', 'size'];
    const nextProps = { color: 'blue', size: 1 };
    const currentProps = { color: 'blue', size: 1 };

    const result = hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, currentProps);

    expect(result).toBeFalsy();
});
