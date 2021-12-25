const calc = () => {
  const calcBlock = document.querySelector(".calc-block");
  const inputCalc = calcBlock.querySelectorAll("input");

  for (let i of inputCalc) {
    i.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  }
};

export default calc;
