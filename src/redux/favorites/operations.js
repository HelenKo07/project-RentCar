export const loadFavoritesFromStorage = () => {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load favorites from storage", error);
    return [];
  }
};

export const saveFavoritesToStorage = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Failed to save favorites to storage", error);
  }
};
