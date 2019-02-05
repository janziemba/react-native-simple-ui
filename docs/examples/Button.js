import React, { Fragment, PureComponent } from 'react';

import { Button, Spacer } from '../..';

class ButtonExample extends PureComponent {
    render() {
        return (
            <Fragment>
                <Button
                    text="Default"
                />
                <Spacer size="huge" />
                <Button
                    color="success"
                    text="success"
                />
                <Spacer size="huge" />
                <Button
                    icon={{
                        name: 'star',
                    }}
                    text="With icon"
                />
                <Spacer size="huge" />
                <Button
                    icon={{
                        name: 'star',
                        position: 'right',
                    }}
                    text="With icon on right"
                />
                <Spacer size="huge" />
                <Button
                    rounding="rounded"
                    text="Rounded"
                />
                <Spacer size="huge" />
                <Button
                    rounding="sharp"
                    text="Sharp"
                />
                <Spacer size="huge" />
                <Button
                    size="small"
                    text="Small"
                />
                <Spacer size="huge" />
                <Button
                    size="large"
                    text="Large"
                />
                <Spacer size="huge" />
                <Button
                    state="active"
                    text="Active"
                />
                <Spacer size="huge" />
                <Button
                    state="disabled"
                    text="Disabled"
                />
                <Spacer size="huge" />
                <Button
                    text="Flat"
                    variant="flat"
                />
                <Spacer size="huge" />
                <Button
                    text="Outlined"
                    variant="outlined"
                />
            </Fragment>
        );
    }
}

export default ButtonExample;
