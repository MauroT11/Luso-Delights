import React from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import Calendar from '@/components/home/Calendar';

const events = [
    { date: new Date(2023, 10, 15), event: 'Private Party' },
    { date: new Date(2023, 10, 20), event: 'Corporate Event' },
    { date: new Date(2023, 10, 25), event: 'Wedding Reception' },
];

function tileContent({ date, view }) {
    if (view === 'month') {
        const event = events.find(e => e.date.toDateString() === date.toDateString());
        return event ? <p>{event.event}</p> : null;
    }
}

export default function Page() {
    return (
        <div className="flex flex-col pt-24 pb-8 justify-center items-center">
            <h1>Restaurant Busy Periods</h1>
            {/* <Calendar tileContent={tileContent} /> */}
            <Calendar />
        </div>
    );
}