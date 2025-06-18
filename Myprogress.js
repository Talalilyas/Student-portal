 import { Flex, Progress } from 'antd';
 
export default function Myprogress (){




   
const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};
return(
  <Flex vertical gap="middle" style={{height:"1000px"}}>
    <Progress percent={99.9} strokeColor={twoColors}  style={{marginTop:"10px",marginBottom:"10px"}}/>
    <Progress percent={50} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }}  style={{       }}/>
    <Flex gap="small" wrap >
      <Progress type="circle" percent={90} strokeColor={twoColors}  style={{margintop:"10px",marginLeft:"10px",marginright:"400px"}}/>
      <Progress type="circle" percent={100} strokeColor={twoColors} />
      <Progress type="circle" percent={93} strokeColor={conicColors} />
    </Flex>
    <Flex gap="small" wrap>
      <Progress type="dashboard" percent={90} strokeColor={twoColors} />
      <Progress type="dashboard" percent={100} strokeColor={twoColors} />
      <Progress type="dashboard" percent={93} strokeColor={conicColors} />
    </Flex>
  </Flex>
);
}