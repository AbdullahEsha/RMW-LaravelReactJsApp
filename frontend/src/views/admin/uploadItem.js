import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import Swal from "sweetalert2";
import axios from "axios";
import AdminNav from "../../Component/adminNav";

const FullMenu = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [validationError, setValidationError] = useState({});

  console.log(validationError);

  const changeHandler = (event) => {
    setImg(event.target.files[0]);
  };

  const addItem = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("img", img);

    await axios
      .post(`admin/upload`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        }).then(function () {
          window.location = "http://localhost:3000";
        });
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <AdminNav />
      <section className="menuBarCard" id="upload">
        <Container>
          <br />
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="file"
                class="form-control"
                name="img"
                onChange={changeHandler}
                required
              />
            </div>
            <br />
            <div class="form-group" align="right">
              <button type="submit" name="submit" class="btn btn-primary">
                Upload
              </button>
            </div>
            <br />
            <br />
          </Form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FullMenu;
