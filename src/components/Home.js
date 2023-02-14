import React, {useState} from 'react'
import { Container } from '../styles/style'
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';

const Home = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='wrap'>
            <Calendar
            calendarType='Hebrew'
            formatDay={(locale, date) => moment(date).format("DD")}
            />
        </div>
    )
}

export default Home