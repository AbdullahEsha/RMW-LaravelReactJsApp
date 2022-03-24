import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import MainNav from "../../Component/nav";
// import axios from "axios";

const FullMenu = () => {
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
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter name..."
                name="name"
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
