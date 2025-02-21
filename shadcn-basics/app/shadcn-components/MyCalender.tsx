import { Calendar } from "@/components/ui/calendar";
import React from "react";
import moment from "moment";

const MyCalender = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  const date1 = moment(date?.toLocaleDateString());
  const date2 = moment('2025-01-01');

  // substract dates
  const diffInDays = date1.diff(date2, 'days');
  return (
    <div>
      <p>{date?.toLocaleDateString()}</p>
      <p>Number of days spent in 2025 is: {diffInDays}</p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
};

export default MyCalender;
