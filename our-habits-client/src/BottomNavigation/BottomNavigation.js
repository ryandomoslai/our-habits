import React from 'react';
import './bottom-navigation.css';
import { Link } from 'react-router-dom'
import MaterialBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const BottomNavigation = () => {
    return (
        <>
            <div className={'bottom-navigation__margin'}/>
            <MaterialBottomNavigation showLabels color={'red'} className={'bottom-navigation'}>
                <BottomNavigationAction component={Link} to={'/profile'} label={'Profile'} icon={<PersonOutlineIcon />}/>
                <BottomNavigationAction component={Link} to={'/'} label={'Feed'} icon={<ListIcon />}/>
                <BottomNavigationAction component={Link} to={'/habits'} label={'My Habits'} icon={<DoneAllIcon />}/>
            </MaterialBottomNavigation>
        </>
    )
}

export default BottomNavigation;
