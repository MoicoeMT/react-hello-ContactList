import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const contactFilter = store.characters.find((item) => item.id == params.id);

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(event.target.fullname.value);
    actions.updateContact(
      {
        full_name: event.target.fullname.value,
        email: event.target.email.value,
        agenda_slug: "MoicoeMT",
        address: event.target.address.value,
        phone: event.target.phone.value,
      },
      params.id
    );
    navigate("/contact");
  };

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center aling-item-center">
          Edit your Contact
        </h1>
      </div>
      <form
        onSubmit={handleUpdate}
        id="card-Edit"
        className="container my-2 w-50 bg-dark p-5 "
      >
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input
              name="fullname"
              defaultValue={contactFilter.full_name}
              type="text"
              className="form-control"
              placeholder="Enter here your Full Name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              name="email"
              defaultValue={contactFilter.email}
              type="text"
              className="form-control"
              placeholder="Enter here your Email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input
              name="phone"
              defaultValue={contactFilter.phone}
              type="text"
              className="form-control"
              placeholder="Enter here your Phone"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Adress</label>
          <div className="col-sm-10">
            <input
              name="address"
              defaultValue={contactFilter.address}
              type="text"
              className="form-control"
              placeholder="Enter here your adress"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 mt-2 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default EditContact;
