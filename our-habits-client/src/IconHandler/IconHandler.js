import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

type Props = {
    iconName: String,
    size?: Number
}

const IconHandler = ({ iconName, size = 50 }: Props) => {
    switch (iconName) {
        case 'default':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <InfoIcon fontSize={'inherit'} />
                </div>
            );
        default:
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <InfoIcon fontSize={'inherit'} />
                </div>
            );
    }
}

export default IconHandler;
