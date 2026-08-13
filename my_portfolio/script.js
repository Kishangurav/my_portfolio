document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xxxxabcd', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('Thanks ' + name + '! Your message has been sent.');
      form.reset();
    } else {
      alert('Something went wrong. Please try again or email me directly.');
    }
  } catch (error) {
    alert('Network error. Please try again or email me directly.');
  }
});