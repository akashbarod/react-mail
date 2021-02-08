
import React, { Component } from "react";

class AdminNavbarLinks extends Component {
  state = {
    path: "/admin" + "/user"
  }

  render() {
    const { path } = this.state;
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <>
      </>
    );
  }
}

export default AdminNavbarLinks;
