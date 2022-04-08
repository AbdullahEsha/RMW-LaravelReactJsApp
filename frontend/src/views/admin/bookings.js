import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Footer from "../../Component/footer";
import axios from "axios";
import Swal from "sweetalert2";
import AdminNav from "../../Component/adminNav";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const BookingList = () => {
    axios
      .get("admin/bookings")
      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
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
    BookingList();
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
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Persons</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody align="center">
              {bookings.map((event) => (
                <tr>
                  <td>{event.c_name}</td>
                  <td>{event.phone}</td>
                  <td>{event.email}</td>
                  <td>{event.b_date}</td>
                  <td>{event.n_person}</td>
                  <td>
                    <a
                      href={"mailto:" + event.email}
                      class="btn btn-outline-primary btn-sm"
                    >
                      Accept
                    </a>{" "}
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

export default Bookings;
