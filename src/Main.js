import React, { Component } from "react";
import './App.css';
import a1 from './a1.jpg';
import b1 from './b1.jpg';
import k1 from './k1.jpg';

class Main extends Component {
    render() {
    const mystyle = {
       float: "left",
       padding: "30px",
       width: "60%",
       height: "1000 px", 
       marginleft: "auto",
       marginright: "auto"
      };
      return (
        <div className="Main" style = {mystyle}>
          <div class="Blog 1">
            <h2><a href="https://www.atlasandboots.com/travel-blog/best-day-trips-from-yerevan-armenia/" target = "_self">Yerevan</a></h2>
            <img src={a1} width='70%' height='50%'/>
          <b> <p>Yerevan is the capital and largest city of Armenia and one of the world's oldest continuously inhabited cities.	Situated along the Hrazdan River, Yerevan is the administrative, cultural, and industrial center of the country, as its primate city. This blog illustrates 10 best day trips from Yerevan, Armenia.</p>
           <p>Date: 11/23/2022</p>
			<p>Author: Peter</p></b>
			
          </div>
        
          <div class="Blog 2">
            <h2><a href="https://www.lostwithpurpose.com/whats-saudi-like/">Saudi Arabia</a></h2>
            <img src={b1} width='70%' height='50%'/>
           <b> <p>Saudi Arabia,officially the Kingdom of Saudi Arabia is a country in Western Asia. It covers the bulk of the Arabian Peninsula, and has a land area of about 2,150,000 km2 (830,000 sq mi), making it the fifth-largest country in Asia, the second-largest in the Arab world, and the largest in Western Asia and the Middle East. This blog illustrates on What’s it really like to travel in Saudi Arabia?</p>
            <p>Date: 01/05/2021</p>
			<p>Author: Leena Al Khair</p></b>
          </div>

          <div class="Blog 3">
            <h2><a href="https://www.bucketlistly.blog/posts/best-places-to-visit-northern-thailand#northern-thailand-travel-video">Northern Thailand</a></h2>
            <img src={k1} width='70%' height='50%'/>
            <b><p>Northern Thailand is home to some of the most beautiful natural wonders of Thailand. Its cultures are rooted in the ancient Lanna Kingdom which is specific to this region and the unique palate of taste and their love for food here are unmatched.10 Best Places To Visit In Northern Thailand In 2022..</p>
			<p>Date: 05/30/2022</p>
			<p>Author: Peter R</p></b>
          </div>
        </div>
      );
    }
  }
 
export default Main;