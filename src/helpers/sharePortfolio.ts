import { PortfolioItem } from "../types/portfolio";

export const copyPortfolioLink = async (item: PortfolioItem): Promise<boolean> => {
  if (!item) return false;

  try {
    const itemSlug = encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, ""));
    const itemUrl = `${window.location.origin}/portfolio?portfolio=${itemSlug}`;

    await navigator.clipboard.writeText(itemUrl);
    return true;
  } catch (err) {
    console.error("Fel vid kopiering: ", err);
    return false;
  }
};
