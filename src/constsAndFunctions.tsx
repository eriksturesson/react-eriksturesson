import { createTheme } from "@mui/material/styles";

import * as React from "react";
/*

export const eriksNavTheme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#494d52',
        secondary: '#46505A',

      },
      action: {
        active: '#001E3C',

      },
    }
  });
*/
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

export const eriksTheme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "rgba(40, 44, 52, 0)",
      darker: "#282c34",
      contrastText: "#fff",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000",
      secondary: "#4552EB",
    },
  },
});
