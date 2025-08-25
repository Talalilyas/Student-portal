import React from "react";
import { Form, Button } from "antd";


const SPButton = (props) =>{
  
  const {text,name,shape,type,onClick} = props;
  return (
    <Form.Item>
      <Button  htmlType="submit" block shape={shape} type={type} onClick={onClick} >
       {text}
       {name}
       
      </Button>
    </Form.Item>
  );  
};

export default SPButton;
