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
  // const formInput = {};
  // formInput[e.target.name] = e.target.value;
  // console.log(formInput);
  e.preventDefault();
  let inputValue = {};
  refs.allInput.forEach(element => {
    // console.log(element.name, Number(element.value));
    inputValue[element.name] = Number(element.value);

    // element.name = element.value;
  });
  // console.log('Input value', inputValue);

  let fullDelay = inputValue.delay;
  let count = 1;
  // console.log(fullDelay);
  for (let i = 0; i < inputValue.amount - 1; i += 1) {
    count += 1;

    if (i === 0) {
      const position = 1;

      fullDelay = fullDelay;
      // console.log(fullDelay);
      createPromise(position, fullDelay)
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
    fullDelay += inputValue.step;
    // console.log(fullDelay);
    createPromise(count, fullDelay)
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
