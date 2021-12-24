const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const btnScroll = document.getElementById("service");
  const service = document.getElementById("service-block");

  const handleMenu = () => { 
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      handleMenu();
      const ID = event.target.getAttribute("href").substr(1);
      document.getElementById(ID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  btnScroll.addEventListener("click", (event) => {
    event.preventDefault();
    service.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

export default menu;
