import React from "react";
import { MonthWrapper } from "components/Calendar/styles";
import { getCalendarDays, formatWeekDaysRows } from "utils/calendar";
import Week from "components/Calendar/Week";

const Month = ({currentMonth, currentYear, showModalReminder }) => {
  const weekDaysRows = getCalendarDays(currentMonth, currentYear);
  const formattedeekDaysRows = formatWeekDaysRows(weekDaysRows);

	return (
		<MonthWrapper>
      {
        formattedeekDaysRows.map((weekDays, wIndex) => (
          <Week weekDays={weekDays} key={`week-${wIndex}`} showModalReminder={showModalReminder}/>
        ))
      }
		</MonthWrapper>
	);
};

export default Month;
