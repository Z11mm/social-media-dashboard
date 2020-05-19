const white = 'hsl(0, 0 %, 100 %)';
const veryPaleBlue = 'hsl(225, 100%, 98%)';
const lightGreyishBlue = 'hsl(227, 47%, 96%)';
const darkGreyishBlue = 'hsl(228, 12%, 44%)';
const veryDarkBlue = 'hsl(230, 17%, 14%)';
const veryDarkBlueTop = 'hsl(232, 19%, 15%)';
const darkDesaturatedBlue = 'hsl(228, 28%, 20%)';
const desaturatedBlue = 'hsl(228, 34%, 66%)';
const toggleBackground = 'hsl(230, 22%, 74%)'

export const lightTheme = {
  body: `linear-gradient(${ veryPaleBlue } 0%, ${ veryPaleBlue } 10%, ${ white } 10%, ${white} 100%)`,
  cardBackground: ${ lightGreyishBlue },
  textDarkGreyBlue: ${ darkGreyishBlue },
  textVeryDarkBlue: ${ veryDarkBlue },
  toggleBackground: ${toggleBackground}
};
  
export const darkTheme = {
  body: `linear-gradient(${ veryDarkBlueTop } 0 %, ${ veryDarkBlueTop } 10 %, ${ veryDarkBlue } 10 %, ${veryDarkBlue} 100%)`,
  cardBackground: ${ darkDesaturatedBlue },
  textDesaturatedBlue: ${ desaturatedBlue },
  textWhite: ${ white },
  toggleBackground: 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
}
