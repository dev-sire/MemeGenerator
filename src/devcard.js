import react from "react";
import user from "./adminpic.png";
import starFilled from "./star-filled2.png";
import starEmpty from "./star-empty2.png";
import "./styles.css";

export default function Card() {
  const [contact, setContact] = react.useState({
    firstName: "Aman",
    lastName: "Shahid",
    phone: "Admin",
    email: "shahidamaan2019@gmail.com",
    isFavorite: false,
  });
  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }
  return (
    <article className="card">
      <h3 className="card--heading">Developer</h3>
      <img src={user} className="card--image" alt="admin"/>
      <div className="card--info">
        {contact.isFavorite ? (
          <img
            src={starFilled}
            className="card--favorite"
            onClick={toggleFavorite}
            alt="favourite"
          />
        ) : (
          <img
            src={starEmpty}
            className="card--favorite"
            onClick={toggleFavorite}
            alt="!favourite"
          />
        )}
        <h2 className="card--name">
          {contact.firstName} {contact.lastName}
        </h2>
        <p className="card--contact">{contact.phone}</p>
        <p className="card--contact">{contact.email}</p>
      </div>
    </article>
  );
}
