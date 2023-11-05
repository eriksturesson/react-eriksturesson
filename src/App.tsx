import "./css/App.css";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsentBanner from "./CookieConsentBanner";
import Projects from "./Projects";
import { eriksTheme } from "./constsAndFunctions";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
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
