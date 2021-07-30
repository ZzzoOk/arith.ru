import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Leaderboard.module.css';
import Menu from '../menu/Menu'
import { getLeaders } from '../../actions/user';

const Result = (props) => {
    const username = useSelector(state => state.user.username);

    if (!props.results) {
        return null;
    }

    const options = {
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        year: 'numeric', month: 'numeric', day: 'numeric',
    };

    const rows =
        props.results
            .sort((a, b) => a.result - b.result)
            .map(r =>
                <tr className={r.username == username ? styles.currentUser : null}>
                    <td>{r.username}</td>
                    <td>{new Intl.DateTimeFormat('default', options).format(new Date(r.date))}</td>
                    <td>{r.result}</td>
                </tr>
            );

    return rows;
}

const Leaderboard = () => {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) ?? [];
    const maxCount = localStorage.getItem('maxCount') ?? 5;
    const dispatch = useDispatch();

    useEffect(() => {
        if (leaderboard.length < 1 || (new Date) - (new Date(leaderboard.date)) > 5 * 60 * 1000) {
            dispatch(getLeaders());
        }
    });

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
                        <Result results={leaderboard.leaders} />
                    </tbody>
                </table>
            </main>
            <footer>
            </footer>
        </>
    );
}

export default Leaderboard;