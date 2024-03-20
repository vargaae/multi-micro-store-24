import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        { name: "Company", id: "213124ea", link: "/company" },
        { name: "Shop", id: "113124br", link: "/shop" },
        { name: "Contact", id: "313124hg", link: "/contact" },
      ],
    };
  }

  render() {
    return (
      <>
        <h2>Footer:</h2>
        {this.state.list.map((list) => {
          return (
            <Link key={list.id} className="nav-link" to={list.link}>
              <h3>{list.name}</h3>
            </Link>
          );
        })}
      </>
    );
  }
}

export default Footer;
