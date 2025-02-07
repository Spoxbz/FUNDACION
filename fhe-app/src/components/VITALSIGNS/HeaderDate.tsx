/**
 * Este componente es para la fecha del encabezado del componente VitalSigns.tsx
 */

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";

export default function DatePickerValue() {
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <div className="header-date">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          sx={{ width: "150px", marginRight: "0px" }}
          value={dateValue}
          onChange={(newValue) => setDateValue(newValue)}
          className="custom-date-picker"
        />
      </LocalizationProvider>
    </div>
  );
}
