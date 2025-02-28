"use client"

import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {
  const calendarRef = useRef(null);

  // Handle responsive sizing
  useEffect(() => {
    const handleResize = () => {
      if (calendarRef.current) {
        const calendar = calendarRef.current.getApi();
        calendar.updateSize();
      }
    };

    // Initial call and window resize listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-6">
      <div className="flex flex-col gap-4 text-center mb-4 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">Portuguese Events Calendar</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our holiday schedule to plan your visits and enjoy Portuguese celebrations
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 md:p-6 border border-accent/20 calendar-container">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          contentHeight="auto"
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'today'
          }}
          buttonText={{
            today: 'Today',
            month: 'Month',
          }}
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          }}
          eventColor="#154c79"
          eventTextColor="#fff"
          eventBackgroundColor="#154c79"
          eventBorderColor="#0e3354"
          dayMaxEvents={2}
          events={[
            { title: 'Valentines Special Menu', date: '2025-02-14', color: '#FF0000' },
            { title: "New Year's Day", date: '2025-01-01' },
            { title: 'Good Friday', date: '2025-04-18' },
            { title: 'Easter Sunday', date: '2025-04-20' },
            { title: 'Freedom Day', date: '2025-04-25' },
            { title: 'Labour Day', date: '2025-05-01' },
            { title: 'Portugal Day', date: '2025-06-10', color: '#FF0000' },
            { title: 'Corpus Christi', date: '2025-06-19' },
            { title: 'Assumption Day', date: '2025-08-15' },
            { title: 'Republic Day', date: '2025-10-05', color: '#FF0000' },
            { title: "All Saints' Day", date: '2025-11-01' },
            { title: 'Independence Day', date: '2025-12-01', color: '#FF0000' },
            { title: 'Immaculate Conception', date: '2025-12-08' },
            { title: 'Christmas Special Menu', date: '2025-12-25', color: '#FF0000' }
          ]}
        />
      </div>
      
      <div className="mt-4 sm:mt-6 text-center">
        <p className="text-xs sm:text-sm text-gray-600">
          <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#154c79] rounded-full mr-1 sm:mr-2"></span>
          Regular Portuguese Holidays
          <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF0000] rounded-full mx-1 sm:mx-2 ml-3 sm:ml-4"></span>
          Special Restaurant Events
        </p>
      </div>
    </div>
  )
}