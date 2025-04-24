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
