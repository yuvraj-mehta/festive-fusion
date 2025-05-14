import { createTheme, ThemeOptions } from "@mui/material/styles";

// Common theme settings
const commonSettings: ThemeOptions = {
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.75rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.7,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 28px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
};

// Light theme
export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED", // Vibrant Purple
      light: "#A78BFA",
      dark: "#5B21B6",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F59E0B", // Warm Amber
      light: "#FCD34D",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
    },
    error: {
      main: "#D32F2F",
    },
    warning: {
      main: "#FFA000",
    },
    info: {
      main: "#1976D2",
    },
    success: {
      main: "#388E3C",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  components: {
    ...commonSettings.components,
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "dark",
    primary: {
      main: "#A78BFA", // Lighter Purple
      light: "#C4B5FD",
      dark: "#7C3AED",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FCD34D", // Lighter Amber
      light: "#FDE68A",
      dark: "#F59E0B",
      contrastText: "#000000",
    },
    background: {
      default: "#111827",
      paper: "#1F2937",
    },
    text: {
      primary: "#F9FAFB",
      secondary: "#D1D5DB",
    },
    error: {
      main: "#EF5350",
    },
    warning: {
      main: "#FFB74D",
    },
    info: {
      main: "#64B5F6",
    },
    success: {
      main: "#81C784",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  components: {
    ...commonSettings.components,
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(17, 24, 39, 0.95)",
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            backgroundColor: "#FF8A65",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#FFAB91",
            },
          },
          "&.MuiButton-outlined": {
            borderColor: "#FF8A65",
            color: "#FF8A65",
            "&:hover": {
              borderColor: "#FFAB91",
              backgroundColor: "rgba(255, 138, 101, 0.08)",
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3": {
            color: "#FFFFFF",
          },
          "&.MuiTypography-body1, &.MuiTypography-body2": {
            color: "#B0B0B0",
          },
        },
      },
    },
  },
});
