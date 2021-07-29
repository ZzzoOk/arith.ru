import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Leaderboard.module.css';
import Menu from '../menu/Menu'

const Result = (props) => {
    const username = useSelector(state => state.user.user);

    if (!props.results) {
        return null;
    }

    const options = {
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        year: 'numeric', month: 'numeric', day: 'numeric',
    };

    const results = props.results;
    const last = results[results.length - 1].date;
    const rows =
        [...results]
            .sort((a, b) => a.result - b.result)
            .map(r =>
                <tr className={r.date === last ? styles.last : null}>
                    <td>{username}</td>
                    <td>{new Intl.DateTimeFormat('default', options).format(new Date(r.date))}</td>
                    <td>{r.result}</td>
                </tr>
            );

    return rows;
}

const Leaderboard = () => {
    const maxCount = localStorage.getItem('maxCount') ?? 5;
    const [results, setResults] = useState(JSON.parse(localStorage.getItem('results' + maxCount)));

    const clear = () => {
        setResults();
        localStorage.removeItem('results' + maxCount);
    }

    return (
        <>
            <header>
                <Menu />
            </header>
            <main>
                <table id={styles.leaderboard}>
                    <caption><h2>Leaderboard</h2></caption>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Date</th>
                            <th>Result (sec)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Result results={results} />
                    </tbody>
                </table>
                <span className='button' onClick={clear}>Clear</span>
            </main>
            <footer>
            </footer>
        </>
    );
}

export default Leaderboard;