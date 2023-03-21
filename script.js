'use strict';
// Math.trunc() để lấy số nguyên
// Math.random() để tạo số ngẫu nhiên
// Thiết lập thông số ban đầu khi vừa vào game
let secretNumber = Math.trunc((Math.random()*20)+1);
console.log(secretNumber)
let score = 20;
let highscore = 0;
// Hàm displayMessage dùng để viết lại message 
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};

// Tạo event click vào button Check!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Nếu không nhập gì cả
  if (!guess) {
    displayMessage('No number!');
  } 
  // Nếu nhập đúng số secretNumber add style backgroundColor <body>, style width <element class="number">
  else if (guess === secretNumber){
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  // Xử lý hiển thị tương tác giữa score và highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Thiết lập gợi ý secretNumber 
  else if (guess !== secretNumber){
    if (score > 1){
      document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // thiết lập thua cuộc
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});


