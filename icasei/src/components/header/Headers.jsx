import React from "react";
import "./header.scss";
import logo from "../../assets/tmovie.png";

const HeaderNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

export default function Header() {
  return (
    <div>
      Header
    </div>
  )
}
