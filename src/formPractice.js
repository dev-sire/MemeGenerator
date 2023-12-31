import react from "react";
import "./styles.css";

export default function Practice() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */
  const [data, setData] = react.useState({
    email: "",
    password: "",
    confirmPass: "",
    newsletterBox: false,
  });
  function handleData(event) {
    const { name, value, type, checked } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (data.password === data.confirmPass) {
      if (data.newsletterBox) {
        console.log("login successfully");
        console.log("Thank you for signing up for newsletter");
      } else {
        console.log("login successfully");
      }
    } else {
      console.log("Password do not match!");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleData}
          value={data.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleData}
          value={data.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPass"
          onChange={handleData}
          value={data.confirmPass}
        />
        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="newsletterBox"
            onChange={handleData}
            checked={data.newsletterBox}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
