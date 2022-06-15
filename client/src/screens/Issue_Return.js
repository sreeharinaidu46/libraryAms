
import React,{useEffect} from 'react';
// import {getAllIssuedBook,getEveryDayBook} from "../actions/Issue_action"
// import { useDispatch, useSelector } from 'react-redux'
// import moment from 'moment';
import { useState } from 'react';
import { Grid, Segment,Card,Image,Icon } from 'semantic-ui-react'

const axios=require('axios')

const Issue_Return = () => {

  const months=["Jan","Feb","Mar","April","May","June","July","August","Sept","Oct","Nov","Dec"]
  
    

    
    

  const [avg,setAvg]=useState({});
  const [givenMonths,setMonths]=useState([]);
  const [frenBook,setFreqBook]=useState([]);
 
  

//     const dispatch = useDispatch();
      useEffect(async()=>{
        const ret=await axios.get("/api/issues/getAvgDay");
        setAvg(ret.data);

    const ren=await axios.get("/api/issues/avgMonths");
    setMonths(...givenMonths,ren.data);

    const rens=await axios.get("/api/issues/freqBook");
    setFreqBook(...frenBook,rens.data);
      },[])

      // console.log(avg);
      // console.log(givenMonths);
      // console.log(frenBook);
      // if(givenMonths.length>0){
      //   console.log(months[givenMonths[0].month]);
      // }

      



//     //const {all_IssuedBook} = useSelector(state => state.allIssuedBookReducer)
//     const {allCounts} = useSelector(state => state.getEveryDayBookReducer)
//     //console.log(all_IssuedBook);
//     //var filterd;
//     // const filterOut = ()=>{
//     //     const todayDate = moment(new Date()).format('YYYY-MM-DD');
//     //     //console.log(todayDate)
//     //      //filterd = all_IssuedBook && all_IssuedBook.filter(item =>  (item.updatedAt.slice(0,10) == todayDate))
//     //      console.log(allCounts);
//     // }

//     // filterOut()
//     return (
//         <div className="col-md-10 m-auto pt-4">
//         {!allCounts && allCounts.length>0  ? <>
//         <div className="bg-success p-2 text-center">
//         <h4 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>Yet No booked Issued& Returned</h4>
//         </div>
        
//         </> : 
//         <>
//           <h4 style={{textAlign:"center",fontFamily:"sans-serif"}}>Total Issued & Returned Books</h4>
//           <table  className='table table-bordered table-responsive-sm'>

// <thead className='thead-dark bg-info'>
//   <tr>
//       <th style={{textAlign:"center"}}>Date</th>
//       <th style={{textAlign:"center"}}>Issued Books</th>
//       <th style={{textAlign:"center"}}>Received Books</th>
//       {/* <th style={{textAlign:"center"}}>Student Name</th>
//       <th style={{textAlign:"center"}}>Branch</th> */}
//   </tr>
// </thead>
// <tbody>
  
// {allCounts && allCounts.map(book=>{

 
//  return <tr key={book._id}>
//       <td style={{textAlign:"center"}}>{book.date}</td>
//       <td style={{textAlign:"center"}}>
//           {book.issued}
//       </td >
//       <td style={{textAlign:"center"}}>
//           {book.returned}
//       </td>
     
//       {/* <td style={{textAlign:"center"}}>
//          {book.userName}
//       </td>
//       <td style={{textAlign:"center"}}>
//          {book.userBranch}
//       </td> */}

//   </tr>

// })}
// </tbody>

// </table>
    
//      </> }
//       </div>

return(
<div className="col-md-9 m-auto">
{/* {avg && <h4>Average Return date:{avg.average}</h4>}
{givenMonths.length>0 && <h4>Most Books Requested Month :{months[givenMonths[0].month]}  Year:{givenMonths[0].year}</h4>}
{frenBook.length>0 && <h4>Most Issued Book:{frenBook[0].title}</h4>} */}


<Grid stackable columns={3}>
    <Grid.Column>
      <Segment>
      <Card fluid color='red' header='Student Average Book Return Time' />

      <Card>
    <Image src='https://i.pinimg.com/originals/90/79/ea/9079ea8bf74c63d2c7eb97975359ee62.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{avg && <h4 style={{textAlign:"center"}}>{avg.average} days</h4>}</Card.Header>
  
      
    </Card.Content>
    
  </Card>
     
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
      <Card fluid color='green' header='Most Frequently Issued Book' />
      <Card>
    <Image src='https://lamarlibrary.colibraries.org/wp-content/uploads/sites/26/2016/10/Books-HD-Wallpaper-pictures-hd-620x349.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{frenBook.length>0 && frenBook[0].title}</Card.Header>
  
      <Card.Description>
        written By : {frenBook.length>0 && frenBook[0].author}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {frenBook.length>0 && frenBook[0].publisher}
      </a>
    </Card.Content>
  </Card>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
      <Card fluid color='blue' header='Most Books Issued Month(Peak Month)' />
      {givenMonths.length>0 && <h4 style={{textAlign:"center"}}>{months[givenMonths[0].month]} {givenMonths[0].year}</h4>}
      </Segment>
    </Grid.Column>
    
  </Grid>
  <div style={{marginBottom:"200px"}}></div>
  </div>
  

);


};

export default Issue_Return;


