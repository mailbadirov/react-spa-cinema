import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./app";
import ErrorBoundary from "./components/ErrorBoundary";

import store, { persistor } from "./redux/store";

import "app/i18n";

import { ThemeProvider } from "@mui/material/styles";

import darkTheme from "./app/theme";
import { CssBaseline } from "@mui/material";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
