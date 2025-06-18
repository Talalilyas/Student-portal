import React, { useState } from "react";
import { Calendar, Radio, Row, Select, theme } from "antd";

const SPCalendar = ({
  fullscreen = false,
  bordered = true,
  onPanelChange,
  wrapperStyle = {},
}) => {
  const { token } = theme.useToken();
  const [calendarValue, setCalendarValue] = useState();

  const handlePanelChange = (value, mode) => {
    setCalendarValue(value);
    onPanelChange?.(value, mode); 
  };

  const defaultStyle = {
    width: "100%",
    border: bordered ? `1px solid ${token.colorBorderSecondary}` : "none",
    borderRadius: token.borderRadiusLG,
    padding: 8,
    background: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)", // lighter shadow
    ...wrapperStyle, 
  };

  return (
    <div style={defaultStyle}>
      <Calendar
        fullscreen={fullscreen}
        value={calendarValue}
        onPanelChange={handlePanelChange}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const current = value.clone();
          const localeData = value.localeData();

          const months = Array.from({ length: 12 }, (_, i) => ({
            label: localeData.monthsShort(current.month(i)),
            value: i,
          }));

          const year = value.year();
          const yearOptions = Array.from({ length: 20 }, (_, i) => ({
            label: `${year - 10 + i}`,
            value: year - 10 + i,
          }));

          return (
            <Row gutter={[8, 8]} wrap align="middle" style={{ marginTop: 8 }}>
              <Radio.Group
                size="small"
                onChange={(e) => onTypeChange(e.target.value)}
                value={type}
                style={{ display: "flex", gap: 8 }}
              >
                <Radio.Button value="month">Month</Radio.Button>
                <Radio.Button value="year">Year</Radio.Button>
              </Radio.Group>

              <Select
                size="small"
                value={year}
                onChange={(newYear) => onChange(value.clone().year(newYear))}
                options={yearOptions}
                style={{ width: 100 }}
              />

              <Select
                size="small"
                value={value.month()}
                onChange={(newMonth) => onChange(value.clone().month(newMonth))}
                options={months}
                style={{ width: 100 }}
              />
            </Row>
          );
        }}
      />
    </div>
  );
};

export default SPCalendar;
