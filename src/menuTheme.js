const refs = {
  body: document.querySelector('body'),
  themeButton: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.themeButton.addEventListener('change', toggleClass);
refs.themeButton.addEventListener('change', makeCookie);

function toggleClass(e) {
  let flag = refs.themeButton.checked;
  console.log(refs.themeButton.checked);
  if (flag) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function makeCookie(e) {
  let flag = refs.themeButton.checked;

  if (flag) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

let getStatus = localStorage.getItem('theme');

if (getStatus === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.themeButton.checked = true;
  console.log(getStatus);
}
