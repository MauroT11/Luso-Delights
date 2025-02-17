import React from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import Calendar from '@/components/home/Calendar';
import Pageheader from '@/components/Pageheader';

const events = [
    { date: new Date(2025, 10, 15), event: 'Private Party' },
    { date: new Date(2025, 10, 20), event: 'Corporate Event' },
    { date: new Date(2025, 10, 25), event: 'Wedding Reception' },
];

function tileContent({ date, view }) {
    if (view === 'month') {
        const event = events.find(e => e.date.toDateString() === date.toDateString());
        return event ? <p>{event.event}</p> : null;
    }
}

export default function Page() {
    return (
        <div className="flex flex-col gap-8 pt-24 pb-8 justify-center items-center">
            <div className="flex flex-col gap-8 items-center min-w-full">
                <Pageheader 
                header={'Events'}
                description={''}
                img={"url('images/banners/menuBanner.jpg')"} 
                />
            </div>
            <div className="px-16">
                <Calendar />
            </div>
            
        </div>
    );
}