
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      display: 'none',
      dropdown_name: null
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  changeDisplay(name) {
    if (this.state.display == "none") {
      this.setState({ display: "block" })
      this.setState({ dropdown_name: name })
    } else {
      this.setState({ display: "none" })
    }
  }

  render() {
    const { display } = this.state
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        {this.props.hasImage ? (
          <div className="sidebar-background" style={sidebarBackground} />
        ) : (
            null
          )}
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
          </a>
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-normal"
          >
            Outlook Mail
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              console.log('props data of dashboard :::::', prop);
              if (prop.drop) {
                return (
                  <>
                    {
                      prop.drop && !prop.child ? (
                        <li
                          className={
                            prop.upgrade
                              ? "active active-pro"
                              : this.activeRoute(prop.layout + prop.path)
                          }
                          className="drop-down"
                          key={key}
                          onClick={() => this.changeDisplay(prop.name)}
                        >
                          <NavLink
                            className="nav-link"
                            activeClassName="active"
                          >
                            <p>
                              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                              <span>{prop.name}</span>
                              <div> <i class="fa fa-caret-down"></i></div>
                              </div>
                            </p>
                          </NavLink>
                        </li>
                      ) : (
                          <>
                            {
                              prop.child ? (
                                <li
                                  style={{ display: display == 'block' && this.state.dropdown_name == prop.sub_name ? display : 'none' }}
                                  className={
                                    prop.upgrade
                                      ? "active active-pro"
                                      : this.activeRoute(prop.layout + prop.path)
                                  }
                                  key={key}
                                >
                                  <NavLink
                                    to={prop.layout + prop.path}
                                    className="nav-link"
                                    style={{background: 'black'}}
                                    activeClassName="active"
                                  >
                                    <i className={prop.icon} />
                                    <p>{prop.name}</p> 
                                  </NavLink>
                                </li>
                              ) : (null)
                            }
                          </>
                        )
                    }
                  </>
                )
              } else {
                if (!prop.redirect)
                  return (
                    <li
                      className={
                        prop.upgrade
                          ? "active active-pro"
                          : this.activeRoute(prop.layout + prop.path)
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
