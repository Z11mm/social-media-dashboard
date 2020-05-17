const white = 'hsl(0, 0 %, 100 %)';
const veryPaleBlue = 'hsl(225, 100%, 98%)';
const lightGreyishBlue = 'hsl(227, 47%, 96%)';
const darkGreyishBlue = 'hsl(228, 12%, 44%)';
const veryDarkBlue = 'hsl(230, 17%, 14%)';
const veryDarkBlueTop = 'hsl(232, 19%, 15%)';
const darkDesaturatedBlue = 'hsl(228, 28%, 20%)';
const desaturatedBlue = 'hsl(228, 34%, 66%)';

export const lightTheme = {
  background: ${ white },
  topBackground: ${ veryPaleBlue },
  cardBackground: ${ lightGreyishBlue },
  textDarkGreyBlue: ${ darkGreyishBlue },
  textVeryDarkBlue: ${veryDarkBlue}
};
  
export const darkTheme = {
  background: ${ veryDarkBlue },
  topBackground: ${ veryDarkBlueTop },
  cardBackground: ${ darkDesaturatedBlue },
  textDesaturatedBlue: ${ desaturatedBlue },
  textWhite: ${white}
}
