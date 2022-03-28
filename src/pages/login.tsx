import { useState } from "react";
import style from "../style/login.module.css";
import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default () => {
  const notify = (message?: any) => toast.error(message);
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    showPassword: false,
  });
  const showPass = () => {
    setValues((p: any) => {
      return {
        ...p,
        showPassword: !p.showPassword,
      };
    });
  };

  const onChangeHandler = (e: any, property: string) => {
    setValues((p: any) => {
      return {
        ...p,
        [property]: e.target.value,
      };
    });
  };
  const onSubmit = async () => {
    if (
      !values.name.length ||
      !values.password.length ||
      !values.email.length
    ) {
      notify("Please fill out the form");
      return;
    }
    const req = await fetch(`/api/createUsers`, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        password: values.password,
        email: values.email,
      }),
    });
    const data = await req.json();
    console.log(data);
    if (data.message.includes("this email is already exists")) {
      return notify("This email is already exists");
    }
    if (data.message.includes("Password is required")) {
      return notify("Password is required");
    }
    if (data.message.includes("Email is required")) {
      return notify("Email is required");
    }
    if (data.message.includes("Please enter a valid email")) {
      return notify("Please enter a valid email");
    }
    if (data.message.includes("Name is required")) {
      return notify("Name is required");
    }
    if (data.message.includes("Minimium is 6 characters long")) {
      return notify("Minimium is 6 characters long");
    }
  };
  return (
    <div className={style.main_container}>
      <ToastContainer position="top-center" autoClose={1500} limit={3} />
      <div className={style.container}>
        <h1 className={style.title}>Sign up</h1>
        <form className={style.inputs_container} autoComplete={"off"}>
          <label className={style.label}>
            <input
              className={`${style.name} ${style.inputs}`}
              value={values.name}
              placeholder="Name"
              onChange={(e) => onChangeHandler(e, "name")}
              autoComplete="off"
            />
            <FaUser className={`${style.FaStart} ${style.User}`} />
          </label>
          <label className={style.label}>
            <input
              className={`${style.email} ${style.inputs}`}
              value={values.email}
              placeholder="Email"
              onChange={(e) => onChangeHandler(e, "email")}
              autoComplete="off"
            />

            <FaEnvelope className={`${style.FaStart} ${style.Envelope}`} />
          </label>
          <label className={style.label}>
            <input
              className={`${style.password} ${style.inputs}`}
              value={values.password}
              type={values.showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => onChangeHandler(e, "password")}
              autoComplete="off"
            />
            <FaLock className={`${style.FaStart} ${style.falock}`} />
            <div className={style.FaEnd}>
              {values.showPassword ? (
                <FaEyeSlash onClick={showPass} />
              ) : (
                <FaEye onClick={showPass} />
              )}
            </div>
          </label>
        </form>
        <button className={style.sign_up} onClick={onSubmit}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};
