import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Modal from "../../../components/Modal/Modal";

export default function InsertData({ onOpen, onClose, refreshData }) {
  axios.defaults.withCredentials = true;

  const [data, setData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Alamat: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      axios
        .post("https://msg.ulbi.ac.id/task/recruitment", data)
        .then((res) => {
          if (res.data) {
            refreshData();
            onClose();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [data]
  );

  return (
    <Modal titleModal="Insert Data" onOpen={onOpen} onClose={onClose}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="Email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="number"
          name="Phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="Alamat"
          placeholder="Address"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
}
