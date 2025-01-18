// récupère l'élément qui a l'id themeChanger dans la variable buttonThemeChanger
const buttonThemeChanger = document.querySelector('#themeChanger');
console.log(buttonThemeChanger);

// si un clic est détecté sur le bouton, la fonction suivante est appelée
buttonThemeChanger.addEventListener('click', function() {
  // récupère l'élément qui a l'id theme dans la variable theme
  const theme = document.querySelector('#theme');
  // si le lien contient 'light', on remplace par 'dark'
  if (theme.href.includes('light')) {
    theme.href = theme.href.replace('light', 'dark');
    return;
  }
  // si le lien contient 'sark', on remplace par 'light'
  theme.href = theme.href.replace('dark', 'light');
});