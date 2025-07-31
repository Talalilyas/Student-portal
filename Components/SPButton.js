import React from "react";
import { Form, Button } from "antd";


const SPButton = (props) =>{
  
  const {text,name,shape,type} = props;
  return (
    <Form.Item>
      <Button  htmlType="submit" block shape={shape} type={type} >
       {text}
       {name}
       
      </Button>
    </Form.Item>
  );
};

export default SPButton;
