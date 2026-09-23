const form = document.querySelector('#settings-form');
const resetButton = document.querySelector('#reset-button');
const saveMessage = document.querySelector('#save-message');

const defaultSettings = {
  fullName: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  role: 'Software engineer',
  weeklySummary: true,
  productUpdates: false,
  compactNavigation: false
};

function readForm() {
  const data = new FormData(form);
  return {
    fullName: data.get('fullName'),
    email: data.get('email'),
    role: data.get('role'),
    weeklySummary: data.get('weeklySummary') === 'on',
    productUpdates: data.get('productUpdates') === 'on',
    compactNavigation: data.get('compactNavigation') === 'on'
  };
}

function fillForm(settings) {
  form.elements.fullName.value = settings.fullName;
  form.elements.email.value = settings.email;
  form.elements.role.value = settings.role;
  form.elements.weeklySummary.checked = settings.weeklySummary;
  form.elements.productUpdates.checked = settings.productUpdates;
  form.elements.compactNavigation.checked = settings.compactNavigation;
}

function showMessage(message) {
  saveMessage.textContent = message;
  window.setTimeout(() => {
    saveMessage.textContent = '';
  }, 3500);
}

const storedSettings = localStorage.getItem('flyrank-settings');
if (storedSettings) {
  try {
    fillForm({ ...defaultSettings, ...JSON.parse(storedSettings) });
  } catch {
    localStorage.removeItem('flyrank-settings');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  localStorage.setItem('flyrank-settings', JSON.stringify(readForm()));
  showMessage('Your changes have been saved.');
});

resetButton.addEventListener('click', () => {
  fillForm(defaultSettings);
  localStorage.removeItem('flyrank-settings');
  showMessage('Settings reset to defaults.');
});
