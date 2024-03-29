const toggleSwitch = document.querySelector('.toggle-checkbox');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

toggleSwitch.addEventListener('change', switchTheme, false);

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'light') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}
