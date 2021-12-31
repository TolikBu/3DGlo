const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const inputCalc = calcBlock.querySelectorAll('input');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.getElementById('total');

  for (let i of inputCalc) {
    i.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
    });
  }

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;
    let time = 20;
    let step = 60;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
    

    function outNum () {
      let start = 0;
      let t = Math.round(time / (totalValue / step));
      let interval = setInterval(() => {
        start = start + step;
        if (start == totalValue) {
          clearInterval(interval);
        } else {
          totalValue = start;
        }
      }, t);
    }
    total.textContent = outNum();
  
  };

  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
      countCalc();
    }
  });
};

export default calc;
