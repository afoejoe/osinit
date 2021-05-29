import * as React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../../Actions/Actions";

function AddModal({
  setOpenAdd,
  text,
  children,
  disabled,
  className,
  ...rest
}) {
  const dispatch = useDispatch();
  const { toggleAdd,createOrganization } = new Actions(dispatch);
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [inn, setInn] = React.useState(0);
  const [error, setError] = React.useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inn.toString().length );
    if (name.length < 1 || address.length < 1 || inn.toString().length != 10) {
      setError("Please,Provide valid details!");
      return;
    }
    createOrganization({ name, address, INN:inn })
    .then(res=>console.log(res)
    )
    toggleAdd();
  };
  return (
    <div id="addEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Add Organization</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={toggleAdd}
              >
                &times;
              </button>
            </div>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}{" "}
              </div>
            )}
            <div className="modal-body">
              <InputField
                id="orgName"
                name="Organization Name"
                autoComplete="name"
                type="text"
                label="Organization Name"
                isRequired={true}
                handleChange={(e) => setName(e.target.value)}
                value={name}
              />

              <InputField
                id="address"
                name="Organization's Address"
                autoComplete="address"
                type="address"
                label="Organization Address"
                isRequired={true}
                handleChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <InputField
                id="INN"
                name="Organization INN"
                autoComplete="number"
                type="number"
                label="Organization's INN"
                isRequired={true}
                handleChange={(e) => setInn(e.target.value)}
                value={inn}
              />
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
                onClick={toggleAdd}
              />
              <input type="submit" className="btn btn-success" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModal;

function InputField({ label, id, isRequired, handleChange, ...otherProps }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          {...otherProps}
          required={isRequired}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  );
}
