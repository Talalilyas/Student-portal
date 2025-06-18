import React, { useState } from "react";
import { Form, Select, Row, Col, Typography } from "antd";

const { Text } = Typography;

const ResultInfo = ({ form }) => {
  const [classNumber, setClassNumber] = useState(4);
  const [resultType, setResultType] = useState("");
  const [teacherOptions, setTeacherOptions] = useState([]);

  const classOptions = Array.from({ length: 13 }, (_, i) => ({
    label: `Class ${i + 4}`,
    value: i + 4,
  }));

  const handleClassChange = (value) => {
    setClassNumber(value);

    const newResultType = value <= 12 ? "Final Result" : "Semester Result";
    setResultType(newResultType);

    let options = [];
    if (value >= 4 && value <= 6) {
      options = [
        { value: "Asad", label: "Asad" },
        { value: "Ahmad", label: "Ahmad" },
        { value: "Syed", label: "Syed" },
      ];
    } else if (value >= 7 && value <= 8) {
      options = [
        { value: "Maryam", label: "Maryam" },
        { value: "Bilal", label: "Bilal" },
        { value: "Abdullah", label: "Abdullah" },
      ];
    } else if (value >= 9 && value <= 10) {
      options = [
        { value: "Iqbal", label: "Iqbal" },
        { value: "Murad", label: "Murad" },
      ];
    } else if (value >= 11 && value <= 12) {
      options = [
        { value: "Sarfaraz", label: "Sarfaraz" },
        { value: "Arshad", label: "Arshad" },
      ];
    } else if (value >= 13 && value <= 14) {
      options = [
        { value: "Ali", label: "Ali" },
        { value: "Aasad", label: "Aasad" },
      ];
    } else if (value >= 15 && value <= 16) {
      options = [{ value: "Hamza", label: "Hamza" }];
    }
    setTeacherOptions(options);
    form.setFieldsValue({
      resultType: newResultType,
      teacher: undefined,
      grade:undefined,
      cgpa:undefined,
    });
  };

  return (
    <Row gutter={16}>
      <Col span={10}>
        <Form.Item
          label="Enter Class"
          name="classNumber"
          rules={[{ required: true, message: "Please select your class!" }]}>
          <Select
            placeholder="Select class"
            options={classOptions}
            value={classNumber}
            onChange={handleClassChange}
          />
        </Form.Item>
      </Col>
      {classNumber >= 4 && classNumber <= 12 && (
        <Col span={14}>
          <Form.Item
            label="Grade"
            name="grade"
            rules={[{ required: true, message: "Please select your grade!" }]}>
            <Select
              placeholder="Select grade"
              options={[
                { value: "A+", label: "A+" },
                { value: "B", label: "B" },
                { value: "C", label: "C" },]}
            />
          </Form.Item>
        </Col>
      )}
      {classNumber >= 13 && (
        <Col span={14}>
          <Form.Item
            label="CGPA"
            name="cgpa"
            rules={[{ required: true, message: "Please select your CGPA!" }]}
          >
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "4", label: "4" },
                { value: "3.5", label: "3.5" },
                { value: "3", label: "3" },
              ]}
            />
          </Form.Item>
        </Col>
      )}

      <Col span={11}>
        <Form.Item label="Result Type" name="resultType">
          <Text type="secondary">
            {resultType || "Select class to see result type"}
          </Text>
        </Form.Item>
      </Col>

      {teacherOptions.length > 0 && (
        <Col span={13}>
          <Form.Item
            label="Teacher"
            name="teacher"
            rules={[{ required: true, message: "Please select your teacher!" }]}
          >
            <Select placeholder="Select teacher" options={teacherOptions} />
          </Form.Item>
        </Col>
      )}
    </Row>
  );
};

export default ResultInfo;
