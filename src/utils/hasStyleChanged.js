export default function hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, currentProps) {
    let styleHasChanged = false;

    propsOnWhichDependsTheStyle.forEach((prop) => {
        // eslint-disable-next-line react/destructuring-assignment
        if (nextProps[prop] !== currentProps[prop]) {
            styleHasChanged = true;
        }
    });

    return styleHasChanged;
}
