// import emailjs from "@emailjs/browser";
import { useState } from "react";

import "./Contact.scss";

const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailMessage, setEmailMessage] = useState("");

  const handleSubmit = (e) => {
    //   e.preventDefault();
    //   emailjs
    //     .send(
    //       process.env.REACT_APP_SERVICE_ID,
    //       process.env.REACT_APP_TEMPLATE_ID,
    //       inputData,
    //       process.env.REACT_APP_PROD_ID
    //     )
    //     .then(
    //       function (response) {
    //         console.log("SUCCESS!", response.status, response.text);
    //         setEmailMessage("sent");
    //       },
    //       function (error) {
    //         console.log("FAILED...", error);
    //         setEmailMessage("error");
    //       }
    //     )
    //     .then(
    //       setInputData({ name: "", email: "", message: "" }),
    //       setTimeout(() => {
    //         setEmailMessage("");
    //       }, 10000)
    //     );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInputData((prevData) => ({ ...prevData, [inputName]: inputValue }));
    // console.log(inputData);
  };
  return (
    <main className="section-narrow contact-page">
      <h1>CONTACT</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="NUME*"
          value={inputData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="E-MAIL*"
          value={inputData.email}
          onChange={handleChange}
        />

        <textarea
          rows="5"
          cols="35"
          wrap="hard"
          name="message"
          id="message"
          required
          placeholder="MESAJ*"
          value={inputData.message}
          onChange={handleChange}
        />
        {/* <p
            className={
              emailMessage === "sent"
                ? "sent-message"
                : emailMessage === "error"
                ? "error-message"
                : ""
            }
          >
            {emailMessage === "sent"
              ? "Mesaj trimis cu succes"
              : emailMessage === "error"
              ? "Mesajul nu a putut fi trimis"
              : ""}
          </p> */}
        <button className="button3">TRIMITE</button>
      </form>
    </main>
  );
};

export default Contact;
