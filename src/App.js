import { Component } from "react";

import "./App.css";
import Footer from "./components/footer/footer.component";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import data from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {       
      products: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.setState(
          () => {
            return { products: data };
          },
          () => {
            console.log(this.state);
          }
        )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {

    const { products, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredProducts = products.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
        <img src='https://pilis-solar.hu/files/menu/46/webshop.png' className="App-logo" alt="logo" />
        
          <h2>Products:</h2>
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder="search products"
            className="products-search-box"
          />
          <CardList products={filteredProducts} />
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
