import React, { useState } from "react";
import "./App.css";
import FormInputs from "./components/FormInputs";
import DataPage from "./DataPage";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

export default function App() {

  const [showData, setShowData] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleToClose = (_, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Is your username between 3-16 characters? We don't allow special characters too",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please provide a valid email",
      pattern:
        '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      errorMessage: "",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password must be a minumum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      label: "Confirm Password",
      required: true,
    },
  ];

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const handleSubmit = (e) => {
    setOpen(true);
    sleep(1000)
    setShowData(true);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  

  return (
    <div className="app">
    {!showData?
    <div id="form">
      <form onSubmit={""} id="innerform">
        <h1>Enter Data</h1>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleSubmit}>Submit</button>
        <Snackbar
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          open={open}
          autoHideDuration={2000}
          message="Data Submitted Successfully"
          onClose={handleToClose}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleToClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </form>
    </div>
    :
    <DataPage data={values}/>}
    </div>
  );
}
