import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import MainNav from "../../Component/nav";
import Swal from "sweetalert2";
import axios from "axios";

const FullMenu = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [img, setImg] = useState();

  const addItem = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("img", img);

    await axios.post(`admin/upload`, formData).then(({ data }) => {
      Swal.fire({
        icon: "success",
        text: data.message,
      });
      history.push("/");
    });
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
          <Form onSubmit={addItem}>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter name..."
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
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
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
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
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
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
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
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
                value={img}
                onChange={(event) => {
                  setImg(event.target.value);
                }}
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
          </Form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FullMenu;
