import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    fontFamily: ["dm", "Menlo", "Monaco", "'Courier New'", "monospace"].join()
  }
});

export default theme;