import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import MainNav from "../../Component/nav";
import axios from "axios";

const FullMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AllCategoryList();
  }, []);

  const AllCategoryList = () => {
    axios
      .get("admin/index")
      .then((resp) => {
        console.log(resp.data);
        setCategories(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MainNav />
      <section className="menuBarCard">
        <Container>
          <table class="table table-responsive table-light">
            <thead align="center">
              <tr>
                <th scope="col">image</th>
                <th scope="col">name</th>
                <th scope="col">category</th>
                <th scope="col">price</th>
                <th scope="col">description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody align="center">
              {categories.map((c) => (
                <tr>
                  <td>
                    <img
                      src={"http://localhost:8000/" + c.img}
                      height={"70px"}
                    />
                  </td>
                  <td>{c.name}</td>
                  <td>{c.category}</td>
                  <td>{c.price}</td>
                  <td>{c.description}</td>
                  <td>
                    <button type="button" class="btn btn-outline-primary">
                      Update
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FullMenu;
