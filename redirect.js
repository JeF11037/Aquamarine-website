var language = localStorage.getItem('language');
if (language != null)
    window.location.replace(`./${language}`);
else
    window.location.replace(`./en/index.html`);