import React from 'react';
import styles from './Main.module.css';
import Menu from '../menu/Menu'

let task;
let answer;
let counter;
let startTime;
let maxCount;
let results;
class Main extends React.Component {
    constructor(props) {
        super(props);

        let username = sessionStorage.getItem('username') ?? 'anon';
        maxCount = sessionStorage.getItem('maxCount') ?? 5;
        results = JSON.parse(sessionStorage.getItem('results' + maxCount)) ?? [];
    }

    getRandomInt = () => {
        return Math.floor(Math.random() * (10 - 1)) + 1;
    }

    newTask = () => {
        task.innerText = this.getRandomInt() + ' + ' + this.getRandomInt();
    }

    incorrect = () => {
        answer = '';
        task.style.color = 'red';
        setTimeout(() => {
            task.style.color = 'black';
        }, 250);
    }

    incCounter = () => {
        document.getElementById(styles.counter).innerText = `${++counter}/${maxCount}`;
    }

    last = () => {
        return counter == maxCount;
    }

    correct = () => {
        if (this.last()) {
            results.push(((new Date) - startTime) / 1000);
            sessionStorage.setItem('results' + maxCount, JSON.stringify(results));
            this.props.history.push('/leaderboard');
            return;
        }

        startTime = startTime ?? new Date();

        answer = '';
        this.incCounter();
        this.newTask();
    }

    getResult = () => {
        let taskNums = task.innerText.split('+');
        return +taskNums[0] + +taskNums[1] + '';
    }

    handleButtonClick = (e) => {
        answer += e.target?.innerText ?? e;
        debugger
        let result = this.getResult();
        if (result.startsWith(answer) && result == answer) {
            this.correct();
        } else if (!result.startsWith(answer) || answer.length >= result.length) {
            this.incorrect();
        }
    }

    handleTaskClick = () => {
        this.init();
    }

    init = () => {
        answer = '';
        counter = 0;
        startTime = null;
        task.innerText = '1 + 1';
        document.getElementById(styles.counter).innerText = `0/${maxCount}`;
    }

    handleKeydown = (e) => {
        if (isFinite(e.key) && e.keyCode != 32) {
            this.handleButtonClick(e.key);
        }

        if (e.keyCode == 35) {
            this.init();
        }
    }

    componentDidMount() {
        task = document.getElementById(styles.task);
        document.addEventListener('keydown', this.handleKeydown);
        this.init();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        return (
            <>
                <header>
                    <Menu />
                </header>
                <main id={styles.main}>
                    <table>
                        <caption id={styles.task} onClick={this.init}>
                            1 + 1
                        </caption>
                        <tbody>
                            <tr>
                                <td><span className='button' onClick={this.handleButtonClick}>7</span></td>
                                <td><span className='button' onClick={this.handleButtonClick}>8</span></td>
                                <td><span className='button' onClick={this.handleButtonClick}>9</span></td>
                            </tr>
                            <tr>
                                <td><span className='button' onClick={this.handleButtonClick}>4</span></td>
                                <td><span className='button' onClick={this.handleButtonClick}>5</span></td>
                                <td><span className='button' onClick={this.handleButtonClick}>6</span></td>
                            </tr>
                            <tr>
                                <td><span className='button' onClick={this.handleButtonClick}>1</span></td>
                                <td><span className='button' onClick={this.handleButtonClick}>2</span></td>
                                <td><span className='button' onClick={this.handleButtonClick}>3</span></td>
                            </tr>
                            <tr>
                                <td colSpan='3'><span id={styles.btn0} className='button' onClick={this.handleButtonClick}>0</span></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td id={styles.counter} colSpan='3'>0/50</td>
                            </tr>
                        </tfoot>
                    </table>
                </main>
                <footer>
                </footer>
            </>
        );
    }
}

export default Main;
