"use client"

import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      contentHeight="auto"
      events={[
    { title: 'Easter', date: '2025-04-01' },
    { title: 'Valentines', date: '2025-02-14' }
  ]}
    />
  )
}