import { Box, ThemeProvider } from "@mui/material";
import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import "./assets/css/App.css";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { eriksTheme } from "./utils/theme";
const LazyNavBar = lazy(() => import("./components/NavBar"));
const LazyAbout = lazy(() => import("./components/About"));
const LazyHeader = lazy(() => import("./components/Header"));
const LazyProjects = lazy(() => import("./components/Projects"));
const LazyPortfolio = lazy(() => import("./components/Portfolio"));
const CV = lazy(() => import("./components/CV"));
const LazyFooter = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ThemeProvider theme={eriksTheme}>
        <Box>
          <Helmet>
            <title>Erik Sturesson | Product Manager & Tech-ledare</title>
            <meta
              name="description"
              content="Erik Sturesson – Product Manager med fokus på affärsutveckling, automation och teknisk ledning."
            />
            <meta name="keywords" content="Erik Sturesson, Product Manager, Tech Lead, Affärsutveckling, Automation" />
            <meta property="og:title" content="Erik Sturesson | Product Manager & Tech-ledare" />
            <meta
              property="og:description"
              content="Utforska min portfolio och lär känna mig som digital produktutvecklare."
            />
            <meta property="og:image" content="https://eriksturesson.se/og-background.jpg" />
          </Helmet>

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
