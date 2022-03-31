import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import MainNav from "../../Component/nav";
import axios from "axios";
import Swal from "sweetalert2";

const FullMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AllCategoryList();
  }, []);

  const AllCategoryList = () => {
    axios
      .get("admin/index")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch(() => {
        Swal.fire({
          text: "DB couldn't be loaded!!!",
          icon: "error",
          timer: 100,
        }).then(function () {
          window.location = "http://localhost:3000";
        });
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
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody align="center">
              {categories.map((c) => (
                <tr>
                  <td height={"70px"} width={"100px"}>
                    <img
                      src={"http://localhost:8000/" + c.img}
                      height={"70px"}
                      width={"100px"}
                      alt="itemImg"
                    />
                  </td>
                  <td>{c.name}</td>
                  <td>{c.category}</td>
                  <td>{c.price}</td>
                  <td>
                    <textarea rows="3" cols="30" disabled>
                      {c.description}
                    </textarea>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                    >
                      Update
                    </button>{" "}
                    <button type="button" class="btn btn-outline-danger btn-sm">
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
