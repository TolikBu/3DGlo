const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const btnScroll = document.querySelector("main>a");
  const array = [...menuItems, btnScroll];
  console.log(array);

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  menuItems.forEach((menuItem) => menuItem.addEventListener("click", handleMenu));

  array.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const ID = event.target.getAttribute("href").substr(1);

      document.getElementById(ID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });


};

export default menu;
