import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Settings.module.css';
import Menu from '../menu/Menu'

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem('username') ?? 'anon',
            maxCount: sessionStorage.getItem('maxCount') ?? 5
        };
    }

    handleInput = (e) => {
        this.setState({ maxCount: e.target.value });
        sessionStorage.setItem('maxCount', e.target.value);
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value });
        sessionStorage.setItem('username', e.target.value);
    }

    render() {
        return (
            <>
                <header>
                    <Menu />
                </header>
                <main id={styles.main}>
                    <label htmlFor='username'>Username: </label>
                    <input id={styles.username} type='text' name='username' onChange={this.handleChange} value={this.state.username} /><br />
                    <label htmlFor='count'>Count: </label>
                    <input id={styles.count} type='number' name='count' onInput={this.handleInput} value={this.state.maxCount} />
                </main>
                <footer>
                </footer>
            </>
        );
    }
}

export default Settings;