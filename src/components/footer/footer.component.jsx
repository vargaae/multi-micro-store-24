import { Component } from "react";

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        { name: "Company", id: "213124ea" },
        { name: "Shop", id: "113124br" },
        { name: "Contact", id: "313124hg" },
      ],
    };
  }

  render() {
    return (
      <>
        <h2>Footer:</h2>
        {this.state.list.map((list) => {
          return (
            <div key={list.id}>
              <h3>{list.name}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default Footer;
