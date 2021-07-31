import React from 'react';
import { useState, useEffect } from 'react';
import { setResult } from '../../actions/user';
import Modal from 'react-modal';
import styles from './Main.module.css';
import Menu from '../menu/Menu'

const Main = () => {
    let answer;
    const [task, setTask] = useState('1 + 1');
    const [counter, setCounter] = useState(0);
    const [startTime, setStartTime] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [incorrectClass, setIncorrectClass] = useState();
    const questionCount = localStorage.getItem('questionCount') ?? 5;
    const results = JSON.parse(localStorage.getItem('results' + questionCount)) ?? [];

    const modalWindowStyles = {
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

    const getRandomInt = () => {
        return Math.floor(Math.random() * (10 - 1)) + 1;
    }

    const newTask = () => {
        const a = getRandomInt();
        const b = getRandomInt();
        setTask(`${a} + ${b}`);
    }

    const incorrect = () => {
        answer = '';
        setIncorrectClass(styles.incorrect);
        setTimeout(() => {
            setIncorrectClass();
        }, 250);
    }

    const correct = () => {
        if (counter == questionCount) {
            const now = new Date();
            const result = { date: now, result: (now - startTime) / 1000 };
            results.push(result);
            localStorage.setItem('results' + questionCount, JSON.stringify(results));
            setIsOpen(true);
            setResult(result.date, result.result, questionCount);
            reset();
            return;
        }

        if (!startTime) {
            setStartTime(new Date());
        }

        answer = '';
        newTask();
        setCounter(counter + 1);
    }

    const getSum = () => {
        let taskItems = task.split('+');
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

    const reset = () => {
        answer = '';
        setStartTime();
        setTask('1 + 1');
        setCounter(0);
    }

    const handleKeydown = (e) => {
        if (isFinite(e.key) && e.keyCode != 32) {
            handleButtonClick(e.key);
        }

        if (e.keyCode == 35) {
            reset();
        }
    }

    const isBestResult = () => {
        if (results.length < 2) {
            return false;
        }

        const lastResult = results[results.length - 1].result;

        return results.every(r => r.result >= lastResult);
    }

    useEffect(() => {
        answer = '';
        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }
    })

    return (
        <>
            <header>
                <Menu />
            </header>
            <main id={styles.main}>
                <table>
                    <caption id={styles.task} className={incorrectClass} onClick={reset}>
                        {task}
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
                            <td id={styles.counter} colSpan='3'>{`${counter}/${questionCount}`}</td>
                        </tr>
                    </tfoot>
                </table>
                <Modal isOpen={modalIsOpen} style={modalWindowStyles} onRequestClose={() => setIsOpen(false)}>
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
