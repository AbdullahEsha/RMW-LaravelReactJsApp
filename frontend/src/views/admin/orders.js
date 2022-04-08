import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import axios from "axios";
import Swal from "sweetalert2";
import AdminNav from "../../Component/adminNav";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const OrderList = () => {
    axios
      .get("admin/orders")
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
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

  useEffect(() => {
    OrderList();
  }, []);

  return (
    <>
      <AdminNav />
      <section className="menuBarCard">
        <Container>
          <table class="table table-responsive table-light">
            <thead align="center">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Phone</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody align="center">
              {orders.map((event) => (
                <tr>
                  <td>{event.itemName}</td>
                  <td>{event.price}</td>
                  <td>{event.quantity}</td>
                  <td>{event.phone}</td>
                  <td>{event.location}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                    >
                      Accept
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

export default Orders;
