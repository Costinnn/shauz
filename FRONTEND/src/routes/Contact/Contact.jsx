// import emailjs from "@emailjs/browser";
import { useState } from "react";

import "./Contact.scss";

const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        inputData,
        import.meta.env.VITE_PROD_ID
      );
      if (response) {
        console.log("Message sent on email!");
      }
    } catch (err) {
      console.log(err);
    }
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
          cols="30"
          wrap="hard"
          name="message"
          id="message"
          required
          placeholder="MESAJ*"
          value={inputData.message}
          onChange={handleChange}
        />

        <button className="button3">TRIMITE</button>
      </form>
    </main>
  );
};

export default Contact;
