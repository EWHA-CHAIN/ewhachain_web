import React from 'react';
import member from './AlumniData/member'

const Alumni = () => {
  // const data = JSON.parse(member)
  let data = require('./AlumniData/member');
  return(
    <div id="Alumni" className="page">
      <div className="top">
        <div className="main_tit">ALUMNI</div>
        <div className="tit_line"/>
      </div>
      <div className="list">
        <div className="order">
          <div className="num">1기</div>
          <div className="num">2기</div>
          <div className="num">3기</div>
          <div className="num">4기</div>
          <div className="num">5기</div>
        </div>
        <div className="display_list">
          ㅇㅇㅇ
          {console.log(JSON.stringify(data))}
        </div>
      </div>
    </div>
  )
}

export default Alumni