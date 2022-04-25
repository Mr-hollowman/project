import React, { Component } from "react";
class Footer extends Component {
  render() {
    return(
    <div className="main-footer">
      <hr className="hr"></hr>
    <div className="row">
          {/* column1 */}
          <div className="col">
            <ul>
            <li><h3>Logo</h3></li>
            <li><p>paragrap for the platform</p></li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col">
            <ul className="unstyled-list">
            <li><h3>Listen Now</h3></li>
            <li>Languages</li>
            <li>Posdcats</li>
            <li>News</li>
            <li>All Categories</li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <ul className="unstyled-list">
            <li><h3>App</h3></li>
            <li><a className="Link" href="https://www.apple.com/in/app-store/">Download for iOS</a></li>
            <li><a className="Link" href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026385_creativeid_535350509687_device_c&gclid=CjwKCAjwuYWSBhByEiwAKd_n_stTQxZyXGZYTAD-8HtB0WjwVw4btc5H_7RXgaZ44X9wCuBg9nkD1hoC13AQAvD_BwE&gclsrc=aw.ds">Download for Android</a></li>
            </ul>
          </div>
          {/* column4 */}
          <div className="col">
            <ul className="unstyled-list">
            <li><h3>About</h3></li>
            <li>Link 1</li>
            <li>Link 2</li>
            </ul>
          </div>
        </div>
        
          <hr></hr>
          <span>Copyright @ Selva</span>
      </div>
);
  }
}

export default Footer;
