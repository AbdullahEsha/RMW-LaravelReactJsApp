import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import MainNav from "../../Component/nav";

const FullMenu = () => {
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
              <tr>
                <td>image</td>
                <td>name</td>
                <td>category</td>
                <td>price</td>
                <td>description</td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    Danger
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FullMenu;
