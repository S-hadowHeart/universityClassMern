import React,{Component} from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems : []
      items: [],
      labels: "",
      price: 0,
      count: 0,
      index: 0,
    };
  }

  hadleLableChange = (e) => {
    this.setState({ labels: e.target.value });
  };
  hadleLPriceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  addProduct = () => {
    const { labels, price, index } = this.state;
    if (this.state.labels.trim() === "" || this.state.price.trim() === "")
      return;
    const newItem = {
      id: Date.now(),
      labels,
      price,
    };
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
      labels,
      price,
    }));
  };

  handleDropdownChange = (id) => {
    this.setState((prevState) => ({
        CartItems : prevState.items.map((y) => 
            y.id == id ? y : ""
    )
    }))
  };

  render() {
    const { items, labels, price, index, count } = this.state;
    return (
      <>
        <h2> Add Products</h2>
        <label> Enter Name of Product : </label>
        <input
          type="text"
          value={labels}
          placeholder="Enter Name of Prodect"
          className="inputBox"
          onChange={this.hadleLableChange}
        />{" "}
        <br />
        <br />
        <label> Enter Price of Product : </label>
        <input
          type="number"
          value={price}
          placeholder="Enter Price of Prodect"
          className="inputBox"
          onChange={this.hadleLPriceChange}
        />{" "}
        <br />
        <br />
        <button onClick={this.addProduct}>Add Product</button>
        <br />
        <h3>Total Product Avaliable : {items.length}</h3>
        <br /> <br /> <br />
        <h2>your Cart </h2>
        <select name="itemList" onChange={this.handleDropdownChange}>
          <option>Selcet Iteam</option>
          {items.map((y) => (
            <option value="{y.id}">{y.labels}</option>
          ))}
        </select>
        <button> - </button>
        <br />
        <p></p>
        <br />
        <button> + </button>
        {/* <p>{items["itemList.value"]}</p> */}
        {/* <button onClick={addCart}>Add In Cart</button>              */}
      </>
    );
  }
}

export default Cart;