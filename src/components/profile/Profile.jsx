import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';
import Menu from '../menu/Menu'
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList
} from 'recharts';
import Input from '../../utils/Input';

const Profile = () => {
    const username = useSelector(state => state.user.username);
    const [questionCount, setQuestionCount] = useState(localStorage.getItem('questionCount') ?? 5);
    const data = JSON.parse(localStorage.getItem('results' + questionCount));

    const formatDate = (tickItem) => {
        if (tickItem === 'auto') {
            return null;
        }

        const options = {
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            year: 'numeric', month: 'numeric', day: 'numeric',
        };

        return new Intl.DateTimeFormat('default', options).format(new Date(tickItem));
    }

    const handleClick = (count) => {
        if (count > 0 && count < 101) {
            setQuestionCount(count);
        }
    }

    const handleInput = (e) => {
        let val = e.target.value;

        val = val < 1 ? 1 : val;
        val = val > 100 ? 100 : val;

        localStorage.setItem('questionCount', val);
    }

    return (
        <>
            <header>
                <Menu />
            </header>
            <main id={styles.main}>
                <h2>{username}</h2>
                <label htmlFor='count'><h3>Questions:</h3></label>
                <Input id={styles.count} type='number' name='count' value={questionCount} setValue={setQuestionCount} onInput={handleInput} min='1' max='100' />
                <LineChart
                    width={800} height={400} data={data}
                    margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="date" tickFormatter={formatDate} dy={15} />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip
                        itemStyle={{
                            color: 'black',
                            backgroundColor: 'white'
                        }}
                        labelFormatter={formatDate}
                        contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    />
                    <Line dataKey="result" />
                </LineChart>
                <h4>Your stats</h4>
                <span className='button' onClick={() => handleClick(+questionCount - 1)}>Prev</span>|
                <span className='button' onClick={() => handleClick(+questionCount + 1)}>Next</span>
            </main>
            <footer>
            </footer>
        </>
    );
}

export default Profile;