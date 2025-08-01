import { Box, ThemeProvider } from "@mui/material";
import { Suspense, lazy } from "react";
import "./assets/css/App.css";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { eriksTheme } from "./utils/theme";
const LazyNavBar = lazy(() => import("./components/NavBar"));
const LazyAbout = lazy(() => import("./components/About"));
const LazyHeader = lazy(() => import("./components/Header"));
const LazyStudentNode = lazy(() => import("./components/StudentNode"));
const LazyProjects = lazy(() => import("./components/Projects"));
const LazyPortfolio = lazy(() => import("./components/Portfolio"));
const CV = lazy(() => import("./components/CV"));
const LazyFooter = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ThemeProvider theme={eriksTheme}>
        <Box>
          <div className="navAndHeaderDiv" id="Home">
            <LazyNavBar />
            <LazyHeader />
          </div>

          <div className="containers" id="About">
            <LazyAbout />
          </div>

          <div className="containers" id="Portfolio">
            <LazyPortfolio />
          </div>

          <div className="containers" id="Projects">
            <LazyProjects />
          </div>
          <div id="Studentnode">
            <LazyStudentNode />
          </div>
          <div className="containers" id="CV">
            <CV />
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
