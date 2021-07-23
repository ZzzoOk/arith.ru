import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id={styles.menu}>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/stats'>Stats</NavLink></li>
                    <li><NavLink to='/settings'>Settings</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;