import { Calendar, Radio, Row, Select, Typography, theme, Col } from "antd";
import { useState } from "react";

export default function Calender() {
  const { token } = theme.useToken();
  const [calendarValue, setCalendarValue] = useState();

  const onPanelChange = (value, mode) => {
    setCalendarValue(value);
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle = {
    width: "100%",

    borderRadius: token.borderRadiusLG,
    padding: 8,
    background: "#fff",
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        value={calendarValue}
        onPanelChange={onPanelChange}
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
            <Row wrap style={{ marginTop: 8 }} align="middle">
              <Col xs={24} sm={24} md={12}>
                <Radio.Group
                  size="small"
                  onChange={(e) => onTypeChange(e.target.value)}
                  value={type}
                  style={{ width: "100%" }}
                >
                  <Radio.Button value="month">Month</Radio.Button>
                  <Radio.Button value="year">Year</Radio.Button>
                </Radio.Group>
              </Col>

              <Col xs={12} sm={12} md={6}>
                <Select
                  size="small"
                  value={year}
                  onChange={(newYear) => onChange(value.clone().year(newYear))}
                  options={yearOptions}
                  style={{ width: "100%" }}
                  aria-label="Select year"
                />
              </Col>

              <Col xs={12} sm={12} md={6}>
                <Select
                  size="small"
                  value={value.month()}
                  onChange={(newMonth) =>
                    onChange(value.clone().month(newMonth))
                  }
                  options={months}
                  style={{ width: "100%" }}
                  aria-label="Select month"
                />
              </Col>
            </Row>
          );
        }}
      />
    </div>
  );
}
