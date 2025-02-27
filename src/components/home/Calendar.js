"use client"

import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-4 text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-primary font-bold">Portuguese Events Calendar</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our restaurant's holiday schedule to plan your visits and enjoy special Portuguese celebrations
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-accent/20">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          contentHeight="auto"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
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
          eventColor="#DB7A37"
          eventTextColor="#fff"
          eventBackgroundColor="#DB7A37"
          eventBorderColor="#C16122"
          dayMaxEvents={true}
          events={[
            { title: 'Valentines Special Menu', date: '2025-02-14', color: '#942E20' },
            { title: "New Year's Day (Ano Novo)", date: '2025-01-01' },
            { title: 'Good Friday (Sexta-feira Santa)', date: '2025-04-18' },
            { title: 'Easter Sunday (Domingo de Páscoa)', date: '2025-04-20' },
            { title: 'Freedom Day (Dia da Liberdade)', date: '2025-04-25' },
            { title: 'Labour Day (Dia do Trabalhador)', date: '2025-05-01' },
            { title: 'Portugal Day (Dia de Portugal)', date: '2025-06-10', color: '#942E20' },
            { title: 'Corpus Christi (Corpo de Deus)', date: '2025-06-19' },
            { title: 'Assumption Day (Assunção de Nossa Senhora)', date: '2025-08-15' },
            { title: 'Republic Day (Implantação da República)', date: '2025-10-05', color: '#942E20' },
            { title: "All Saints' Day (Dia de Todos-os-Santos)", date: '2025-11-01' },
            { title: 'Independence Restoration Day (Restauração da Independência)', date: '2025-12-01', color: '#942E20' },
            { title: 'Immaculate Conception (Imaculada Conceição)', date: '2025-12-08' },
            { title: 'Christmas Special Menu', date: '2025-12-25', color: '#942E20' }
          ]}
        />
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          <span className="inline-block w-3 h-3 bg-accent rounded-full mr-2"></span>
          Regular Portuguese Holidays
          <span className="inline-block w-3 h-3 bg-primary rounded-full mx-2 ml-4"></span>
          Special Restaurant Events
        </p>
      </div>
    </div>
  )
}