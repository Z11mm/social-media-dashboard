const white = 'hsl(0, 0 %, 100 %)';
const veryPaleBlue = 'hsl(225, 100%, 98%)';
// const lightGreyishBlue = 'hsl(227, 47%, 96%)';
// const darkGreyishBlue = 'hsl(228, 12%, 44%)';
const veryDarkBlue = 'hsl(230, 17%, 14%)';
const veryDarkBlueTop = 'hsl(232, 19%, 15%)';
// const darkDesaturatedBlue = 'hsl(228, 28%, 20%)';
// const desaturatedBlue = 'hsl(228, 34%, 66%)';
// const toggleBackground = 'hsl(230, 22%, 74%)'

export const lightTheme = {
  body:
    'linear-gradient(hsl(225, 100%, 98%))',
  cardBackground: 'hsl(227, 47%, 96%)',
  textDarkGreyBlue: 'hsl(228, 12%, 44%)',
  textVeryDarkBlue: 'hsl(230, 17%, 14%)',
  toggleBackground: 'hsl(230, 22%, 74%)'
};

export const darkTheme = {
  body: `linear-gradient(${veryDarkBlueTop} 0 %, ${veryDarkBlueTop} 10 %, ${veryDarkBlue} 10 %, ${veryDarkBlue} 100%)`,
  cardBackground: 'hsl(228, 28%, 20%)',
  textDesaturatedBlue: 'hsl(228, 34%, 66%)',
  textWhite: 'hsl(0, 0 %, 100 %)',
  toggleBackground: 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
};
