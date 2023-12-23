import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    actions.updateContact({
      full_name: event.target.fullname.value,
      email: event.target.email.value,
      agenda_slug: "MoicoeMT",
      address: event.target.address.value,
      phone: event.target.phone.value,
    });
  };

  return (
    <div>
      {store.characters.map((contact) => {
        return (
          <div
            id="contact"
            key={contact.id}
            className="container w-50 card mb-3 bg-light"
          >
            <div className="row g-1 fs-5">
              <img
                src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                className="img-fluid  mt-3 col-md-4"
                alt="..."
              />
              <div className="card-body col-md-8">
                <div id="contentcard" className="text-center">
                  <h5 className="card-title mt-2">{contact.full_name}</h5>
                  <div id="botones">
                    <button
                      onClick={() => navigate(`/editContact/${contact.id}`)}
                      className="btn"
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                    <button
                      onClick={() => actions.deleteProduct(contact.id)}
                      className="btn"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <hr />
                <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i> {contact.address}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <i className="fa-solid fa-phone"></i> {contact.phone}
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <i className="fa-solid fa-envelope"></i> {contact.email}
                  </small>
                </p>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
