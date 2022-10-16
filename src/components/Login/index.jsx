import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInputFields } from "../../actions/actionGetInputFields";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const fieldsSelector = useSelector((state) => state.reducerGetInputFields);
  // const { username, email}
  // console.log(fieldsSelector);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fullName && email) {
      dispatch(getInputFields({ username: fullName, email: email }));
    } else {
      alert("Fill all input fields.");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <form
        action="#"
        method="post"
        className="col-lg-6 col-md-6 col-sm-12 shadow p-3 my-5 bg-body rounded border border-1 border-dark"
      >
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="full-name" className="form-label fw-bold">
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            id="full-name"
            placeholder="Ramesh Neupane"
            className="form-control bg-light"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="email"
            placeholder="ramesh@example.com"
            className="form-control bg-light"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary px-3 py-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      {fieldsSelector.username && fieldsSelector.email && (
        <div>
          <p>{fieldsSelector.username}</p>
          <p>{fieldsSelector.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
