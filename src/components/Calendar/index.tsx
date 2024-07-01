"use client"
import React, { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../features/calendarSlice';
import { RootState } from '../../redux/store';
interface CalendarEvent {
  title: string;
  start: string;
}

function Calendar() {
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.calendar.events);

  const submitEventData = () => {
    const event: CalendarEvent = {
      title: eventTitle,
      start: eventDate,
    };
    dispatch(addEvent(event));
    setEventTitle("");
    setEventDate("");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <input value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} type='text' className="form-control" placeholder="Enter event name" />
        </div>
        <div className="col-md-4 mb-3">
          <input value={eventDate} onChange={(e) => setEventDate(e.target.value)} type="date" className="form-control" placeholder="Enter event date" aria-label="Due Date" />
        </div>
        <div className='col-md-4'>
          <button className="bg-[#15395d] text-[#fff] font-semibold hover:text-blue py-2 px-4 border border-[#15395d] hover:border-transparent rounded" onClick={submitEventData}>Submit</button>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        firstDay={1}
        locale="en"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="standard"
        events={events}
      />
    </div>
  )
}

export default Calendar;
