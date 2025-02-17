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
      { title: 'Valentines', date: '2025-02-14' },
      { title: "New Year's Day (Ano Novo)", date: '2025-01-01' },
        { title: 'Good Friday (Sexta-feira Santa)', date: '2025-04-18' }, // Example date
        { title: 'Easter Sunday (Domingo de Páscoa)', date: '2025-04-20' }, // Example date
        { title: 'Freedom Day (Dia da Liberdade)', date: '2025-04-25' },
        { title: 'Labour Day (Dia do Trabalhador)', date: '2025-05-01' },
        { title: 'Portugal Day (Dia de Portugal)', date: '2025-06-10' },
        { title: 'Corpus Christi (Corpo de Deus)', date: '2025-06-19' }, // Example date
        { title: 'Assumption Day (Assunção de Nossa Senhora)', date: '2025-08-15' },
        { title: 'Republic Day (Implantação da República)', date: '2025-10-05' },
        { title: "All Saints' Day (Dia de Todos-os-Santos)", date: '2025-11-01' },
        { title: 'Independence Restoration Day (Restauração da Independência)', date: '2025-12-01' },
        { title: 'Immaculate Conception (Imaculada Conceição)', date: '2025-12-08' },
        { title: 'Christmas Day (Natal)', date: '2025-12-25' }
      ]}
    />
  )
}