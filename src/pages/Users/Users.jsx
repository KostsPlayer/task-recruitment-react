import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Plus, Users, Pencil, Trash } from "lucide-react";
import Layout from "../../components/Layout/Layout";
import image from "../../assets/images/user.png";
import InsertData from "./Crud/Insert";
import UpdateData from "./Crud/Update";

function UsersManagement() {
  axios.defaults.withCredentials = true;

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [getData, setGetData] = useState([]);
  const [dataId, setDataId] = useState(null);

  const getAllData = useCallback(() => {
    axios
      .get("https://msg.ulbi.ac.id/task/recruitment/all")
      .then((res) => {
        if (res.data) {
          setGetData(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  const handleDelete = useCallback((id) => {
    axios
      .delete(`https://msg.ulbi.ac.id/task/recruitment?id=${id}`)
      .then((res) => {
        if (res.data) {
          getAllData();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Layout>
        <div className="users">
          <div className="users-header">
            <div className="menu">
              <div className="icon">
                <Users strokeWidth={1.5} size={28} />
              </div>
              <div className="title">Users</div>
              <div className="desc">Manage your user</div>
            </div>
            <div
              className="add-user"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              <div className="icon">
                <Plus strokeWidth={2} size={20} />
              </div>
              <div className="text">Add User</div>
            </div>
          </div>
          <div className="users-table">
            <div className="thead">
              <div className="row">No</div>
              <div className="row">User Name</div>
              <div className="row">Phone Number</div>
              <div className="row">Position</div>
              <div className="row">Address</div>
              <div className="row">Action</div>
            </div>
            {getData.map((data, index) => (
              <div className="tbody" key={index}>
                <div className="col">{index + 1}</div>
                <div className="col">
                  <div className="avatar">
                    <img src={image} alt="image-user" />
                  </div>
                  <span className="name">{data.name}</span>
                  <span className="email">{data.email}</span>
                </div>
                <div className="col">{data.phone}</div>
                <div className="col">Employee</div>
                <div className="col">{data.alamat}</div>
                <div className="col">
                  <div
                    className="edit"
                    onClick={() => {
                      setOpenUpdateModal(true);
                      setDataId(data.id);
                    }}
                  >
                    <span className="icon">
                      <Pencil strokeWidth={2} size={16} />
                    </span>
                  </div>
                  <div
                    className="delete"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    <span className="icon">
                      <Trash strokeWidth={2} size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <InsertData
          onOpen={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          refreshData={getAllData}
        />
        <UpdateData
          onOpen={openUpdateModal}
          onClose={() => setOpenUpdateModal(false)}
          dataId={dataId}
          refreshData={getAllData}
        />
      </Layout>
    </>
  );
}

export default UsersManagement;
