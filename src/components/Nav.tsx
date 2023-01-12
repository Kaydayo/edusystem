import React, { useState } from "react";
import navStyle from "../styles/Home/Nav.module.css";
import OncultureLogo from "../Assets/Images/oncultureLogo.svg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { navData } from "../constants/data";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

type NavProp = {
  pure?: boolean;
  board?: boolean;
};
const Nav = ({ pure, board }: NavProp) => {
  const [sidebar, setSideBar] = useState<boolean>(false);

  const navigate = useNavigate();

  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  return (
    <>
      <div className={pure && navStyle.navContainer}>
        <div className={`${navStyle.headers} ${pure && navStyle.addShadow}`}>
          <div className={navStyle.logo}>
            <img
              src={OncultureLogo}
              alt="onculture logo"
              onClick={() => navigate("/")}
            />
          </div>
          {!pure && (
            <>
              <div className={navStyle.links}>
                <ul className={navStyle.linksElement}>
                  {navData.map((navs, index) => (
                    <li key={index}>
                      <Link to={navs.to} className={navStyle.linkTo}>
                        {navs.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={navStyle.buttons}>
                <div>
                  <Link to="/signup">
                    <Button className={navStyle.signUpBtn}>Sign up</Button>
                  </Link>
                </div>
                <div>
                  <Link to="/login">
                    <Button className={navStyle.bookADemo}>Login</Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={navStyle.sidebar}>
        <div className={navStyle.logoSide}>
          <img src={OncultureLogo} alt="onculture logo" />
          {sidebar ? (
            <IoCloseSharp onClick={showSideBar} />
          ) : (
            <FaBars onClick={showSideBar} />
          )}
        </div>
        {sidebar && (
          <div className={navStyle.activateSide}>
            {/* <div> */}
            <div className={navStyle.linkSide}>
              <ul className={navStyle.linksElementSide}>
                {navData.map((navs, index) => (
                  <li key={index}>
                    <Link to={navs.to} className={navStyle.linkTo}>
                      {navs.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={navStyle.buttonSide}>
              <div>
                <Link to="/signup">
                  <Button className={navStyle.signUpBtn}>Sign up</Button>
                </Link>
              </div>
              <div>
                <Link to="/login">
                  <Button className={navStyle.bookADemo}>Login</Button>
                </Link>
              </div>
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
