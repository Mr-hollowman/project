import React, { Component } from "react";
import Playstore from '../images/playstore.png';
import Appstore from '../images/appstore.png';
import Mobile from '../images/mobile.jpg'
class Center extends Component {
  render() {
    return <div className="center">
      <div className="title">
      <h1>A Title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumsmod tempor incididunt ut labore a\et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiop ex ea commodo cosequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
      <a href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026385_creativeid_535350509687_device_c&gclid=CjwKCAjwuYWSBhByEiwAKd_n_stTQxZyXGZYTAD-8HtB0WjwVw4btc5H_7RXgaZ44X9wCuBg9nkD1hoC13AQAvD_BwE&gclsrc=aw.ds"><img src={Playstore}alt="playstore" width='150px'></img></a><br></br>
      <a href="https://www.apple.com/in/app-store/"><img src={Appstore} alt="appstore" width='150px'></img></a>
      </div>
      <div id="mobile-image">
        <img src={Mobile} alt='Mobile' width='200px' style={{borderRadius:20}}></img>
      </div>
    </div>;
  }
}

export default Center;
