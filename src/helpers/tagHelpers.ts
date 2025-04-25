export const getCategoryColor = (
  category: "Techstack" | "Architecture" | "ProductFocus"
): "success" | "info" | "warning" | "default" => {
  switch (category) {
    case "Techstack":
      return "success";
    case "Architecture":
      return "info";
    case "ProductFocus":
      return "warning";
    default:
      return "default"; // Om någon annan kategori skulle komma in, vilket inte borde hända.
  }
};
// Funktion som mappar interna tags till de vi vill använda i getCategoryColor
export const mapTagToCategory = (tagKey: string): "Techstack" | "Architecture" | "ProductFocus" => {
  switch (tagKey) {
    case "techStack":
      return "Techstack";
    case "architecture":
      return "Architecture";
    case "productFocus":
      return "ProductFocus";
    default:
      return "Techstack";
  }
};
