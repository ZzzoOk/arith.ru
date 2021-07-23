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

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem('username') ?? 'anon',
            maxCount: sessionStorage.getItem('maxCount') ?? 5,
            results: JSON.parse(sessionStorage.getItem('results' + sessionStorage.getItem('maxCount') ?? 5)) ?? []
        };
    }

    render() {
        let results = [...this.state.results];
        let currentResult = results[results.length - 1];
        results = results.sort((a, b) => { return a - b; }).map(r => <Result username={this.state.username} result={r} last={r == currentResult} />);
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
                                results
                            }
                        </tbody>
                    </table>
                </main>
                <footer>
                </footer>
            </>
        );
    }
}

export default Stats;