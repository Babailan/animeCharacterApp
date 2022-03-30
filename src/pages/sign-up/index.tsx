import { useEffect, useState } from "react";
import styles from "../../style/sign_up.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkCookies } from "cookies-next";
import Router from "next/router";
import imageICon from "../../images/iconSignUp.jpg";
import Image from "next/image";

export default ({ setThereIs }) => {
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
  const onSubmit = async (e: any) => {
    e.preventDefault();
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
    const check = checkCookies("user");
    if (check) {
      Router.push("/");
      setThereIs(true);
    }
  };
  useEffect(() => {
    const check = checkCookies("user");
    if (check) {
      Router.push("/");
    }
  }, []);
  return (
    <div className={styles.main_container}>
      <ToastContainer position="top-center" autoClose={1500} limit={3} />
      <div style={{ width: "100px", height: "100px", margin: "auto" }}>
        <Image
          src={imageICon}
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <h1 className={styles.title}>Sign up in AnimeWorld</h1>
      <div className={styles.container}>
        <form className={styles.inputs_container} onSubmit={(e) => onSubmit(e)}>
          <p className={styles.text_start}>Username</p>
          <label className={styles.label}>
            <input
              className={`${styles.name} ${styles.inputs}`}
              value={values.name}
              onChange={(e) => onChangeHandler(e, "name")}
              autoComplete="off"
            />
          </label>
          <p className={styles.text_start}>Email</p>
          <label className={styles.label}>
            <input
              className={`${styles.email} ${styles.inputs}`}
              value={values.email}
              onChange={(e) => onChangeHandler(e, "email")}
              autoComplete="off"
            />
          </label>
          <p className={styles.text_start}>Password</p>
          <label className={styles.label}>
            <input
              className={`${styles.password} ${styles.inputs}`}
              value={values.password}
              type={values.showPassword ? "text" : "password"}
              onChange={(e) => onChangeHandler(e, "password")}
              autoComplete="off"
            />
            <div className={styles.FaEnd}>
              {values.password.length ? (
                values.showPassword ? (
                  <FaEyeSlash onClick={showPass} />
                ) : (
                  <FaEye onClick={showPass} />
                )
              ) : null}
            </div>
          </label>
          <button className={styles.sign_up} type={"submit"}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
