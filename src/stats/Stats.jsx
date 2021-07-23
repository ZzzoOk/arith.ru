import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Stats.module.css';
import Menu from '../menu/Menu'

const Result = (props) => {
    return (
        <tr className={props.last ? styles.last : null}>
            <td>{props.username}</td>
            <td>{props.result}</td>
        </tr>
    )
}

let username;
let maxCount;
let results;
class Stats extends React.Component {
    constructor(props) {
        super(props);

        username = sessionStorage.getItem('username') ?? 'anon';
        maxCount = sessionStorage.getItem('maxCount') ?? 5;
        results = JSON.parse(sessionStorage.getItem('results' + maxCount)) ?? [];
    }

    render() {
        let lastResult = results[results.length - 1];
        let rows = [...results].sort((a, b) => { return a - b; }).map(r => <Result username={username} result={r} last={r == lastResult} />);
        return (
            <>
                <header>
                    <Menu />
                </header>
                <main>
                    <table id={styles.leaderboard}>
                        <caption>Leaderboard</caption>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows
                            }
                        </tbody>
                    </table>
                    <span id={styles.clear} onClick={() => { sessionStorage.removeItem('results' + maxCount); results = []; this.forceUpdate(); }}>Clear</span>
                </main>
                <footer>
                </footer>
            </>
        );
    }
}

export default Stats;