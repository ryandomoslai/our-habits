import React from 'react';
import './bottom-navigation.css';
import { Link } from 'react-router-dom'
import MaterialBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const BottomNavigation = () => {
    return (
        <MaterialBottomNavigation color={'red'} className={'bottom-navigation'}>
            <BottomNavigationAction component={Link} to={'/profile'} label={'Profile'} icon={<AccountBoxIcon />}/>
            <BottomNavigationAction component={Link} to={'/'} label={'Feed'} icon={<AccountBoxIcon />}/>
            <BottomNavigationAction component={Link} to={'/habits'} label={'My Habits'} icon={<AccountBoxIcon />}/>
        </MaterialBottomNavigation>
    )
}

export default BottomNavigation;
