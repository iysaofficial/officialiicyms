import React, { useState, useEffect } from "react";

import "../css/nav.css";

const Navcomps = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    activeSubMenu.removeAttribute("style");
    activeSubMenu.parentElement.classList.remove("active");
  };

  const resizeFix = () => {
    if (isOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      const navMenu = document.querySelector(".nav-menu");
      const menuOverlay = document.querySelector(".menu-overlay");
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      toggleNav();
    };

    const handleMenuClick = (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          if (document.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        resizeFix();
      }
    };

    document
      .querySelector(".open-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".close-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".menu-overlay")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".nav-menu")
      .addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document
        .querySelector(".open-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".close-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".menu-overlay")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".nav-menu")
        .removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img src="../logo/iicyms2.png" />
        </div>
        <div className="open-nav-menu">
          <span></span>
        </div>
        <div className="menu-overlay"></div>
        <nav className="nav-menu">
          <div className="close-nav-menu">
            {/* <img
                src="./assets/images/logo/icons8-close.svg"
                alt="close"
              /> */}
            <i class="fa-solid fa-xmark"></i>
          </div>
          <ul className="menu">
            <li className="menu-item mt-0">
              <a href="/">Home</a>
            </li>
            <li className="menu-item mt-0">
              <a href="/About">About Us</a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu">
                Media Coverage
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="/listnews">
                    News
                  </a>
                </li>
                <li className="menu-item">
                  <a href="https://drive.google.com/file/d/19W7ElTUGjFTynbnTWBrbLmNIqJzxbd6D/view?usp=sharing" target="_blank" rel="noreferrer">
                    Press Release 2023
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="/lowtahun" data-toggle="sub-menu">
                List of Winners
              </a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu">
                Curation
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1bewMAX2DyWq-wz5VEe5Jhl8jWgVKYLK2?usp=drive_link"
                    target="_blank" rel="noreferrer"
                  >
                    Curation 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1JXAR8cNYOiQe1o77RfyONpXiv13a_GTh?usp=sharing"
                    target="_blank" rel="noreferrer"
                  >
                    Curation 2022
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1T3qacBLrHLNEFFRL18uM3WM9NNh8V8tc?usp=sharing"
                    target="_blank" rel="noreferrer"
                  >
                    Curation 2021
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="menu-item menu-item-has-children">
              <a href="https://drive.google.com/file/d/1-lbeasGr6WuwzTToF6hazSeXGx-b_IxY/view?usp=sharing" target="_blank" rel="noreferrer" data-toggle="sub-menu">
                Guide Book
              </a>
            </li> */}
            {/* <li className="menu-item">
              <a href="/NewsletterPage">Guide Book</a>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu">
                Gallery
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a
                    target="_blank" rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1gkgBzI83lfkfYHZ6GoH2rtZch8YafQKw?usp=sharing"
                  >
                    Gallery 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank" rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1tbleqGcl_Fsx1HiT1aM5tLcwgOIAkoO1?usp=sharing"
                  >
                    Gallery 2022
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="/Faq">FAQ</a>
            </li>
            <li className="menu-item">
              <a href="https://drive.google.com/drive/folders/1sQ3E9G7PhbGmtAgF8YZzS9YZNvOZQBUq?usp=drive_link" target="_blank" rel="noreferrer">Certificate Supervisor</a>
            </li>
            <li className="menu-item">
              <a href="/Contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  );
};
export default Navcomps;
