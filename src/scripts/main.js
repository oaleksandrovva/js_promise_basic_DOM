'use strict';

const body = document.querySelector('body');
const button = document.querySelector('.logo');

function createPromise(nameOfClass, textOfMessage) {
  const message = document.createElement('div');

  message.className = nameOfClass;
  message.textContent = textOfMessage;

  body.append(message);
}

const firstPromise = new Promise((resolve, reject) => {
  button.addEventListener('click', () => {
    resolve();
  });
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

firstPromise
  .then(() => {
    createPromise('message', 'Promise was resolved!');
  });

secondPromise
  .catch(() => {
    createPromise('error-message', 'Promise was rejected!');
  });
