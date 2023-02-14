import React, { useState } from 'react'
import { Container } from '../styles/style'
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';

const Home = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='wrap'>
            <Container>
                <Calendar
                    calendarType='Hebrew'
                    formatDay={(locale, date) => moment(date).format("DD")}
                    onChange={onChange} value={value}
                />
                <div className="todo-date">
                    {moment(value).format("YYYY년 MM월 DD일")}
                </div>
            </Container>
        </div>
    )
}

export default Home