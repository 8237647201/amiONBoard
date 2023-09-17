
import {Box , Typography , styled} from '@mui/material'


const CardInnerBox = styled(Box)`
  border: 1px solid black;
  display : flex;
  align-items: center;
  justify-content: center;
  margin-top :10px;
  padding : 20px

`;
const CardTo = styled(Typography)`
     margin-top:10px;
     width:40%;
     margin-right : 10px;
     margin-left : 10px;
`
const CardFrom  = styled(Typography)`
margin-top:10px;
width:40%;
     margin-right : 10px;
     margin-left : 10px;
`


const RequestCard = ({to , from}) =>{

  
    return(
      <CardInnerBox>
        <CardTo>{to}</CardTo>
        <CardFrom>{from}</CardFrom>
      </CardInnerBox>
    )
}


export default RequestCard