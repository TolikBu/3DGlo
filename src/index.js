import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
import formValid from "./modules/formValid";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import mask from "./modules/mask";
import sendForm from './modules/sendForm';


timer('16 june 2022');
menu();
modal();
calc(100);
formValid();
tabs();
slider();
mask();
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});