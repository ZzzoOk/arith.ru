import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Main.module.css';
import Menu from '../menu/Menu'
import Modal from 'react-modal';
import { setResult } from '../../actions/user';

const Main = () => {
    let task;
    let answer;
    let counter;
    let startTime;
    const maxCount = localStorage.getItem('maxCount') ?? 5;
    const [results, setResults] = useState(JSON.parse(localStorage.getItem('results' + maxCount)) ?? []);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const history = useHistory();

    const getRandomInt = () => {
        return Math.floor(Math.random() * (10 - 1)) + 1;
    }

    const newTask = () => {
        task.innerText = getRandomInt() + ' + ' + getRandomInt();
    }

    const incorrect = () => {
        answer = '';
        task.style.color = 'red';
        setTimeout(() => {
            task.style.color = 'black';
        }, 250);
    }

    const incCounter = () => {
        document.getElementById(styles.counter).innerText = `${++counter}/${maxCount}`;
    }

    const correct = () => {
        if (counter == maxCount) {
            const now = new Date;
            const result = { date: now, result: (now - startTime) / 1000 };
            results.push(result);
            localStorage.setItem('results' + maxCount, JSON.stringify(results));
            setIsOpen(true);
            setResult(result.date, result.result);
            return;
        }

        startTime = startTime ?? new Date();

        answer = '';
        incCounter();
        newTask();
    }

    const getSum = () => {
        let taskItems = task.innerText.split('+');
        return +taskItems[0] + +taskItems[1] + '';
    }

    const handleButtonClick = (e) => {
        answer += e.target?.innerText ?? e;

        let sum = getSum();
        if (sum.startsWith(answer) && sum == answer) {
            correct();
        } else if (!sum.startsWith(answer) || answer.length >= sum.length) {
            incorrect();
        }
    }

    const init = () => {
        answer = '';
        counter = 0;
        startTime = null;
        task.innerText = '1 + 1';
        document.getElementById(styles.counter).innerText = `0/${maxCount}`;
    }

    const handleKeydown = (e) => {
        if (isFinite(e.key) && e.keyCode != 32) {
            handleButtonClick(e.key);
        }

        if (e.keyCode == 35) {
            init();
        }
    }

    useEffect(() => {
        task = document.getElementById(styles.task);
        document.addEventListener('keydown', handleKeydown);
        init();

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }
    })

    const customStyles = {
        content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
    };

    const isBestResult = () => {
        if (results.length < 2) {
            return false;
        }

        const lastResult = results[results.length - 1].result;

        return results.every(r => r.result >= lastResult);
    }

    return (
        <>
            <header>
                <Menu />
            </header>
            <main id={styles.main}>
                <table>
                    <caption id={styles.task} onClick={init}>
                        1 + 1
                    </caption>
                    <tbody>
                        <tr>
                            <td><span className='button' onClick={handleButtonClick}>7</span></td>
                            <td><span className='button' onClick={handleButtonClick}>8</span></td>
                            <td><span className='button' onClick={handleButtonClick}>9</span></td>
                        </tr>
                        <tr>
                            <td><span className='button' onClick={handleButtonClick}>4</span></td>
                            <td><span className='button' onClick={handleButtonClick}>5</span></td>
                            <td><span className='button' onClick={handleButtonClick}>6</span></td>
                        </tr>
                        <tr>
                            <td><span className='button' onClick={handleButtonClick}>1</span></td>
                            <td><span className='button' onClick={handleButtonClick}>2</span></td>
                            <td><span className='button' onClick={handleButtonClick}>3</span></td>
                        </tr>
                        <tr>
                            <td colSpan='3'><span id={styles.btn0} className='button' onClick={handleButtonClick}>0</span></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td id={styles.counter} colSpan='3'>0/50</td>
                        </tr>
                    </tfoot>
                </table>
                <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setIsOpen(false)}>
                    {results.length > 0 && <div>Your result: {results[results.length - 1].result} sec</div>}
                    {isBestResult() && <div>It's personal best!</div>}
                    {results.length > 1 && <div>Previous: {results[results.length - 2].result}</div>}
                </Modal>
            </main>
            <footer>
            </footer>
        </>
    );
}

export default Main;
