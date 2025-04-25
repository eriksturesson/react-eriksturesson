import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { PortfolioItem } from "../types/portfolio";

export function PortfolioHelmet({ selectedItem }: { selectedItem: PortfolioItem | null }) {
  const location = useLocation();
  const url = `https://eriksturesson.se${location.pathname}${location.search}`;
  const hero = "https://eriksturesson.se/og-background.jpg"; // Default image if none is provided
  return (
    <Helmet>
      <title>{selectedItem ? selectedItem.title : "Erik Sturesson | Portfolio"}</title>
      <meta
        name="description"
        content={selectedItem ? selectedItem.description : "Portfolio of Erik Sturesson, Product Manager & Tech Leader"}
      />
      <meta property="og:title" content={selectedItem ? selectedItem.title : "Erik Sturesson | Portfolio"} />
      <meta
        property="og:description"
        content={selectedItem ? selectedItem.description : "Portfolio of Erik Sturesson, showcasing various projects."}
      />
      <meta property="og:image" content={selectedItem ? selectedItem.image.src : hero} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
