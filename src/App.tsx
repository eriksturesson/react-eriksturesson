import { Box, ThemeProvider } from "@mui/material";
import { Suspense, lazy } from "react";
import CookieConsentBanner from "./CookieConsentBanner";
import { LoadingSpinner } from "./LoadingSpinner";
import { eriksTheme } from "./constsAndFunctions";
import "./css/App.css";
const LazyNavBar = lazy(() => import("./NavBar"));
const LazyAbout = lazy(() => import("./About"));
const LazyHeader = lazy(() => import("./Header"));
const LazyProjects = lazy(() => import("./Projects"));
const LazyFooter = lazy(() => import("./Footer"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ThemeProvider theme={eriksTheme}>
        <Box>
          <CookieConsentBanner />

          <div className="navAndHeaderDiv" id="Home">
            <LazyNavBar />
            <LazyHeader />
          </div>

          <div className="containers" id="About">
            <LazyAbout />
          </div>
          <div className="containers" id="Projects">
            <LazyProjects />
          </div>
          <div id="Contact">
            <LazyFooter />
          </div>
        </Box>
      </ThemeProvider>
    </Suspense>
  );
}
export default App;
