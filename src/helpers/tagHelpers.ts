export const getCategoryColor = (
  category: "Languages" | "Tools" | "Platforms"
): "success" | "info" | "warning" | "default" => {
  switch (category) {
    case "Languages":
      return "success";
    case "Tools":
      return "info";
    case "Platforms":
      return "warning";
    default:
      return "default"; // Om någon annan kategori skulle komma in, vilket inte borde hända.
  }
};
// Funktion som mappar interna tags till de vi vill använda i getCategoryColor
export const mapTagToCategory = (tagKey: string): "Languages" | "Tools" | "Platforms" => {
  switch (tagKey) {
    case "programmingLanguages":
      return "Languages";
    case "tools":
      return "Tools";
    case "platforms":
      return "Platforms";
    default:
      return "Languages";
  }
};
