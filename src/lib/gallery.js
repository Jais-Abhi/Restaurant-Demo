import restaurant from "./restaurant";

export const galleryCategories = ["all", "food", "restaurant", "chef", "events"];

export const galleryItems = [
  { src: restaurant.dishes[0].image, category: "food", alt: "Butter chicken served with a rich tomato gravy", caption: "The signature butter chicken" },
  { src: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=900&q=85", category: "chef", alt: "Chef preparing a plated Indian dish", caption: "Made with patience" },
  { src: restaurant.heroImage, category: "restaurant", alt: "Warmly lit dining room at The Royal Spice", caption: "A table waiting for you" },
  { src: restaurant.dishes[1].image, category: "food", alt: "Smoky paneer tikka on a serving plate", caption: "From the tandoor" },
  { src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85", category: "restaurant", alt: "Elegant restaurant interior with warm lighting", caption: "The Royal Spice, Kanpur" },
  { src: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=900&q=85", category: "events", alt: "Guests sharing a celebratory dinner", caption: "Gather around" },
  { src: restaurant.dishes[0].image, category: "food", alt: "Butter chicken with a rich tomato gravy", caption: "A beloved classic" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85", category: "chef", alt: "Restaurant chef smiling in the kitchen", caption: "The people behind the plate" },
];

export default galleryItems;

export const galleryMetadata = { title: "Gallery | The Royal Spice | Indian Restaurant in Kanpur", description: "Explore food, interiors, chefs, dining moments, and the atmosphere at The Royal Spice in Kanpur." };
