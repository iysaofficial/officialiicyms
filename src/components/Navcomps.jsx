import React, { useState, useEffect, useCallback, useRef } from "react";

import "../css/nav.css";

const Navcomps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavMenuRef = useRef(null);
  const closeNavMenuRef = useRef(null);
  const navMenuRef = useRef(null);
  const menuOverlayRef = useRef(null);

  const toggleNav = useCallback(() => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hidden-scrolling");
  }, [isOpen]);

  const collapseSubMenu = useCallback(() => {
    const activeSubMenuItem = navMenuRef.current.querySelector(
      ".menu-item-has-children.active"
    );
    if (activeSubMenuItem) {
      const subMenu = activeSubMenuItem.querySelector(".sub-menu");
      subMenu.removeAttribute("style");
      activeSubMenuItem.classList.remove("active");
    }
  }, []);

  const resizeFix = useCallback(() => {
    if (isOpen) {
      toggleNav();
    }
    if (navMenuRef.current.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }, [isOpen, toggleNav, collapseSubMenu]);

  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      navMenuRef.current.classList.toggle("open");
      menuOverlayRef.current.classList.toggle("active");
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
          if (
            navMenuRef.current.querySelector(".menu-item-has-children.active")
          ) {
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

    const openNavMenu = openNavMenuRef.current;
    const closeNavMenu = closeNavMenuRef.current;
    const menuOverlay = menuOverlayRef.current;
    const navMenu = navMenuRef.current;

    openNavMenu.addEventListener("click", handleToggleNav);
    closeNavMenu.addEventListener("click", handleToggleNav);
    menuOverlay.addEventListener("click", handleToggleNav);
    navMenu.addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      openNavMenu.removeEventListener("click", handleToggleNav);
      closeNavMenu.removeEventListener("click", handleToggleNav);
      menuOverlay.removeEventListener("click", handleToggleNav);
      navMenu.removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [resizeFix, toggleNav, collapseSubMenu]);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img src="../logo/iicyms2.png" alt="" />
        </div>
        <div className="open-nav-menu" ref={openNavMenuRef}>
          <span></span>
        </div>
        <div className="menu-overlay" ref={menuOverlayRef}></div>
        <nav className="nav-menu" ref={navMenuRef}>
          <div className="close-nav-menu" ref={closeNavMenuRef}>
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
              <a href="/#" data-toggle="sub-menu">
                Media
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="/listnews">News from Media</a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1SfhR6kmDOjxCun-tW4_3qMTlykJ7WHA_/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press Release 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1uXv6dikN5rnFz0BBmhLmXHyklZ3nSGZx/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press Release 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/19W7ElTUGjFTynbnTWBrbLmNIqJzxbd6D/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
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
              <a href="/#" data-toggle="sub-menu">
                Curation
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1J-fnOGIFeUetv8IxzG9UUznvmXC8nECw?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Curation 2025
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1DL2uZAsx_Qd3nW-Ltq6-XrWkrP8IpyNi?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Curation 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1bewMAX2DyWq-wz5VEe5Jhl8jWgVKYLK2?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Curation 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1JXAR8cNYOiQe1o77RfyONpXiv13a_GTh?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Curation 2022
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1T3qacBLrHLNEFFRL18uM3WM9NNh8V8tc?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
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
              <a href="/#" data-toggle="sub-menu">
                Gallery
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1AdSruq7PSFTTBioDxy4C9FOq873ntIwj?usp=sharing"
                  >
                    Gallery 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1xR5soI5qsjzG0mp-PXrIiJlgMxZjUmUD?usp=sharing"
                  >
                    Gallery 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1gkgBzI83lfkfYHZ6GoH2rtZch8YafQKw?usp=sharing"
                  >
                    Gallery 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
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
            <li className="menu-item menu-item-has-children">
              <a href="/#" data-toggle="sub-menu">
                Certificate Supervisor
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1OdvN-axePmBr_D3XfROZgrGCNHOH6BYX?usp=sharing"
                  >
                    Certificate Supervisor 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1sQ3E9G7PhbGmtAgF8YZzS9YZNvOZQBUq?usp=drive_link"
                  >
                    Certificate Supervisor 2024
                  </a>
                </li>
              </ul>
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
