import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Center from "./center";
import Footer from "./footer";

class Header extends Component {
  render() {
    return <> <div className="top">
      <div>
      <h1>Azure</h1>
      </div>
      <div id="header-content">
      <h2><Link className="Link" to='/home'>Listen Now</Link></h2>
      <h2><a className="Link" href='https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026385_creativeid_535350509687_device_c&gclid=CjwKCAjwuYWSBhByEiwAKd_n_stTQxZyXGZYTAD-8HtB0WjwVw4btc5H_7RXgaZ44X9wCuBg9nkD1hoC13AQAvD_BwE&gclsrc=aw.ds'>Get The App</a></h2>
      </div>
    </div>
    <Center /> <Footer />
    </>
  }
}

export default Header;
