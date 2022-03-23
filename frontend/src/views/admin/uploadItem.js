import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import MainNav from "../../Component/nav";
import axios from "axios";

const FullMenu = () => {
  const state = {
    name: "",
    category: "",
    price: "",
    description: "",
    img: "",
  };

  const handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const saveItem = async (e) => {
    e.preventdefault();

    const res = await axios.post(
      "http://localhost:8000/api/admin/upload",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.mes);
      this.setState({
        name: "",
        category: "",
        price: "",
        description: "",
        img: "",
      });
    }
  };

  return (
    <>
      <MainNav />
      <section className="menuBarCard">
        <Container>
          <br />
          <h1>
            <i>Upload Item</i>
          </h1>
          <br />
          <form onSubmit={this.saveItem}>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter name..."
                name="name"
                onChange={this.handleInput}
                value={this.state.name}
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter category..."
                name="category"
                onChange={this.handleInput}
                value={this.state.category}
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter price..."
                name="price"
                onChange={this.handleInput}
                value={this.state.price}
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter description..."
                name="description"
                onChange={this.handleInput}
                value={this.state.description}
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="file"
                class="form-control"
                name="img"
                onChange={this.handleInput}
                value={this.state.img}
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
            </div>
            <br />
            <div class="form-group" align="right">
              <button type="submit" name="submit" class="btn btn-primary">
                Upload
              </button>
            </div>
            <br />
          </form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FullMenu;
