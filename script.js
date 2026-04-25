const form = document.getElementById('feedback-form');
const status = document.getElementById('form-status');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    status.textContent = 'Please complete both fields before sending.';
    status.style.color = '#a12a2a';
    return;
  }

  status.textContent = `Thanks, ${name}! Your feedback was received.`;
  status.style.color = '#206d4f';
  form.reset();
});
