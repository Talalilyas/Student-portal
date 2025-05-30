import { Calendar, Radio, Row, Select, Typography, theme } from 'antd';

export default function Calender() {
  const { token } = theme.useToken();

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const wrapperStyle = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const current = value.clone();
          const localeData = value.localeData();
          const months = Array.from({ length: 12 }, (_, i) =>
            localeData.monthsShort(current.month(i))
          );
          const monthOptions = months.map((month, i) => (
            <Select.Option key={i} value={i}>
              {month}
            </Select.Option>
          ));

          const year = value.year();
          const yearOptions = Array.from({ length: 20 }, (_, i) => (
            <Select.Option key={year - 10 + i} value={year - 10 + i}>
              {year - 10 + i}
            </Select.Option>
          ));

          return (
            <div style={{ padding: 8 }}>
              <Typography.Title level={5}>Calendar</Typography.Title>
              <Row gutter={[8, 8]} wrap>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <Radio.Group
                    size="small"
                    onChange={e => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <Radio.Button value="month">Month</Radio.Button>
                    <Radio.Button value="year">Year</Radio.Button>
                  </Radio.Group>

                  <Select
                    size="small"
                    value={year}
                    onChange={newYear => {
                      const newDate = value.clone().year(newYear);
                      onChange(newDate);
                    }}
                  >
                    {yearOptions}
                  </Select>

                  <Select
                    size="small"
                    value={value.month()}
                    onChange={newMonth => {
                      const newDate = value.clone().month(newMonth);
                      onChange(newDate);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </div>
              </Row>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
}
