import React from "react";
import photo from "../photo.jpeg";
const Nav = () => {
  const url = "google.com";
  const links = [
    {
      titre: "Me",
    },
    {
      titre: "Work",
    },
  ];
  return (
    <div className="">
      <header className="d-flex header">
        <div className="col-2 w-100 menu">
          {links.map(({ titre }, key) => (
            <div className="" key={key}>
              <a href={url} className="text-white text-decoration-none p-3">
                {titre}
              </a>
            </div>
          ))}
        </div>
        <nav className="col-sm-10">
          <div className="encore d-flex">
            <img src={photo} alt="Avatar" />
            <div className="p-3 align-self-center">
              <h3>Pablo Hanry</h3>
              <h5>pablohanry9@gmail.com</h5>
              <h5>Etudiant ETNA</h5>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
