import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

const pink_alt = pink[400]
export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    secondary: {
      main: pink_alt,
    },
  },
});
