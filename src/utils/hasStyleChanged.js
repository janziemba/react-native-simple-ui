// @flow

export default function hasStyleChanged(
    propsOnWhichDependsTheStyle: Array<string>,
    nextProps: {},
    currentProps: {},
): boolean {
    let styleHasChanged: boolean = false;

    propsOnWhichDependsTheStyle.push('style');

    propsOnWhichDependsTheStyle.forEach((prop: string) => {
        // eslint-disable-next-line react/destructuring-assignment
        if (nextProps[prop] !== currentProps[prop]) {
            styleHasChanged = true;
        }
    });

    return styleHasChanged;
}
