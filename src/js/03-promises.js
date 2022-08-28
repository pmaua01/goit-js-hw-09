import Notiflix from 'notiflix';

const refs = {
  amountBtn: document.querySelector('input[name="amount"]'),
  startBtn: document.querySelector('button'),
  form: document.querySelector('.form'),
  allInput: document.querySelectorAll('input'),
};

// console.log(refs.amountBtn);
// console.log(refs.startBtn);
// console.log(refs.form);
// console.log(refs.allInput);

refs.startBtn.addEventListener('click', onInput);

function onInput(e) {
  e.preventDefault();
  let inputValue = {};
  refs.allInput.forEach(element => {
    inputValue[element.name] = Number(element.value);
  });

  let fullDelay = inputValue.delay;

  let firstStepDelay = 0;
  console.log(inputValue.step);
  for (let i = 1; i < inputValue.amount + 1; i += 1) {
    fullDelay += firstStepDelay;
    firstStepDelay = inputValue.step;

    createPromise(i, fullDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  //
}

function createPromise(position, delay) {
  // console.log('Run Fn', position, delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// function craeteFn({ amount, step, delay }) {
//   console.log('This is amount', amount);
//   console.log('This is step', step);
//   console.log('This is delay', delay);
// }
