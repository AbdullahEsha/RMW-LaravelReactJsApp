import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import axios from "axios";
import Swal from "sweetalert2";
import AdminNav from "../../Component/adminNav";

const FullMenu = () => {
  const [categories, setCategories] = useState([]);

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
          window.location = "/error";
        });
      });
  };

  useEffect(() => {
    AllCategoryList();
  }, []);

  return (
    <>
      <AdminNav />
      <section className="menuBarCard" id="index">
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
              {categories.map((event) => (
                <tr>
                  <td height={"70px"} width={"100px"}>
                    <img
                      src={"http://localhost:8000/" + event.img}
                      height={"70px"}
                      width={"100px"}
                      alt="itemImg"
                    />
                  </td>
                  <td>{event.name}</td>
                  <td>{event.category}</td>
                  <td>{event.price}</td>
                  <td>
                    <textarea rows="3" cols="30" disabled>
                      {event.description}
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
        <br />
      </section>
      <Footer />
    </>
  );
};

export default FullMenu;
