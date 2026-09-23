function validateSettings(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();

  if (!name) {
    errors.name = 'Name is required.';
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  return errors;
}

function submitSettings(values) {
  const errors = validateSettings(values);

  return {
    saved: Object.keys(errors).length === 0,
    errors
  };
}

if (typeof document !== 'undefined') {
  const form = document.querySelector('#settings-form');
  const fields = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email')
  };
  const successMessage = document.querySelector('#success-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = submitSettings({
      name: fields.name.value,
      email: fields.email.value
    });

    Object.entries(fields).forEach(([fieldName, field]) => {
      const error = result.errors[fieldName] || '';
      field.setAttribute('aria-invalid', String(Boolean(error)));
      document.querySelector(`#${fieldName}-error`).textContent = error;
    });

    successMessage.textContent = result.saved ? 'Your settings were saved.' : '';

    if (!result.saved) {
      const firstInvalidField = Object.keys(fields).find((fieldName) => result.errors[fieldName]);
      fields[firstInvalidField].focus();
    }
  });
}

if (typeof module !== 'undefined') {
  module.exports = { submitSettings, validateSettings };
}