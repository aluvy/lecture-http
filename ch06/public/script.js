const init = () => {
  const loginForm = document.querySelector('#login-form');
  if (!loginForm) throw 'no #login-form';

  loginForm.addEventListener('submit', handleSubmit);
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  // const urlSearchParams = new URLSearchParams();
  // urlSearchParams.append('email', formData.get('email'));
  // urlSearchParams.append('password', formData.get('password'));

  const jsonData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    const response = await fetch('/login', {
      method: 'POST',
      // body: formData,
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
      },
      // body: urlSearchParams.toString(),
      body: JSON.stringify(jsonData),
    });

    if (!response.ok) {
      alert('API Error');
      return;
    }

    const body = await response.json();
    alert(`Success: ${body.authenticated}`);
  } catch (error) {
    alert('Network Error');
  }
};

document.addEventListener('DOMContentLoaded', init);
