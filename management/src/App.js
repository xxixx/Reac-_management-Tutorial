import React, { Component } from 'react';

import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name' : '정미숙',
  'birthday': '961013',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name' : '김영숙',
  'birthday': '971013',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name' : '김나희',
  'birthday': '981013',
  'gender' : '여자',
  'job' : '고등학생'
}]
class App extends Component{
  render() {
    return (
      <div>
      {
        customers.map(c =>{
          return(
            <Customer
            key ={c.id}
            id ={c.id}
            image ={c.image}
            name={c.name}
            birthday={c.name}
            gender ={c.gender}
            job ={c.job}
            />
          );
        })
      }
        
      </div>
      
    );
  } 
}
 
export default App;
