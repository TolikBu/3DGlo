const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const btnScroll = document.querySelector("main>a");
  const service = document.querySelector(".service");

  let array = [...menuItems, btnScroll];

  const handleMenu = () => { 
    menu.classList.toggle("active-menu");
  };
  menuBtn.addEventListener("click", handleMenu);

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn") || e.target.matches("ul>li>a")) {
      handleMenu();
      const ID = e.target.getAttribute("href").substr(1);
      document.getElementById(ID).scrollIntoView({
        behavior: "smooth"
      });
    } 
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
