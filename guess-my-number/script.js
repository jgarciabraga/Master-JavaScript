document.querySelector('.check').addEventListener('click', () => {
  const guess = parseInt(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
