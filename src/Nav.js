import React from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';
import { useState } from "react";

import { TwitterTimelineEmbed } from 'react-twitter-embed';



const TwitterTimeLine = () => {

  // Embeded Twitter api call that fetched the data of a particular user mentioned in screenName...
  return (
  <div className="Nav" style={{flexGrow: 7}}>
 <h2> <a href="">Home</a></h2>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="BestTravelBlogz" // change to your username
        options={{height: 250}}
        />
		</div>
  );
}



export default TwitterTimeLine;