import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.addContact({
      full_name: event.target.fullname.value,
      email: event.target.email.value,
      agenda_slug: "MoicoeMT",
      address: event.target.address.value,
      phone: event.target.phone.value,
    });
    navigate("/contact");
  };

  return (
    <>
      <div className="m-0">
        <h1 className="d-flex justify-content-center aling-item-center">
          Add a new contact
        </h1>
      </div>
      <form 
        onSubmit={handleSubmit}
        id="card-input"
        className="container my-2 w-50 bg-dark "
      >
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input
              name="fullname"
              type="text"
              className="form-control"
              id="inputEmail3"
              placeholder="Enter here your Full Name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              name="email"
              type="text"
              className="form-control"
              id="inputPassword3"
              placeholder="Enter here your Email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input
              name="phone"
              type="text"
              className="form-control"
              id="inputPassword3"
              placeholder="Enter here your Phone"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Adress</label>
          <div className="col-sm-10">
            <input
              name="address"
              type="text"
              className="form-control"
              id="inputPassword3"
              placeholder="Enter here your adress"
            />
          </div>
        </div>
        <button
        id="button1"
          type="submit"
          className="btn btn-primary w-100 mt-2 text-center"
        >
          SEND
        </button>
      </form>
    </>
  );
};

export default Input;
