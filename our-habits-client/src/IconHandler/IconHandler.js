import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import KitchenIcon from '@material-ui/icons/Kitchen';
import SchoolIcon from '@material-ui/icons/School';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ComputerIcon from '@material-ui/icons/Computer';
import PetsIcon from '@material-ui/icons/Pets';

type Props = {
    iconName: String,
    size?: Number
}

const IconHandler = ({ iconName, size = 50 }: Props) => {
    switch (iconName) {
        case 'music':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <MusicNoteIcon fontSize={'inherit'} />
                </div>
            );
        case 'school':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <SchoolIcon fontSize={'inherit'} />
                </div>
            );
        case 'food':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <KitchenIcon fontSize={'inherit'} />
                </div>
            );
        case 'book':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <MenuBookIcon fontSize={'inherit'} />
                </div>
            );
        case 'running':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <DirectionsRunIcon fontSize={'inherit'} />
                </div>
            );
        case 'fitness':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <FitnessCenterIcon fontSize={'inherit'} />
                </div>
            );
        case 'default':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <InfoIcon fontSize={'inherit'} />
                </div>
            );
        case 'computer':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <ComputerIcon fontSize={'inherit'} />
                </div>
            );
        case 'dog':
            return (
                <div style={{ fontSize: `${size}px` }}>
                    <PetsIcon fontSize={'inherit'} />
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
