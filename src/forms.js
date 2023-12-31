import react from "react";
import "./styles.css";
export default function Form() {
  const [formData, setFormData] = react.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isUser: false,
    employment: "",
    favColor: "",
  });
  // console.log(formData.favColor);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form className="contact--form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form--inp"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        className="form--inp"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="email"
        className="form--inp"
        placeholder="test@gmail.com"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        placeholder="Any Comments"
        value={formData.comments}
        onChange={handleChange}
        name="comments"
      />
      <input
        type="checkbox"
        className="form--check"
        id="isUser"
        name="isUser"
        onChange={handleChange}
      />
      <label htmlFor="isUser">Already a User?</label>
      <br />
      <br />
      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          className="form--check"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          className="form--check"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          className="form--check"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        name="favColor"
        onChange={handleChange}
      >
        <option value="">--Choose--</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      <button className="shown">Submit</button>
    </form>
  );
}
