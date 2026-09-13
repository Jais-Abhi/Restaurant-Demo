import restaurant from "./restaurant";

export const aboutContent = {
  hero: { eyebrow: "OUR STORY", title: <>Tradition on the plate. <i>Memories at the table.</i></>, copy: `For more than a decade, ${restaurant.name} has brought authentic Indian flavours, warm hospitality, and unforgettable dining experiences to Kanpur.`, image: restaurant.aboutImage },
  story: { eyebrow: "THE BEGINNING", title: <>Where it <i>all began.</i></>, copy: "What started as a small family dream grew into a place where food, culture, and people come together. Every recipe is rooted in tradition, then given room to become something beautifully our own.", detail: "EST. 2014", image: restaurant.gallery[0].src },
  journey: [{ year: "2014", title: "The journey begins" }, { year: "2017", title: "Our community grows" }, { year: "2020", title: "A new chapter" }, { year: "2026", title: "Still serving with love" }],
  chef: { eyebrow: "THE PEOPLE", title: <>The hands behind <i>the flavour.</i></>, name: "Chef Arjun Mehra", role: "Founder & Culinary Director", philosophy: "Every dish begins with respect for ingredients, patience in preparation, and a love for bringing people together.", portrait: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85", kitchen: "https://images.unsplash.com/photo-1556910103-1c02745abd4d?auto=format&fit=crop&w=900&q=85" },
  values: [{ title: "Authentic Ingredients", copy: "Seasonal produce and spices chosen with intention." }, { title: "Traditional Recipes", copy: "Time-honoured techniques, never rushed." }, { title: "Warm Hospitality", copy: "A generous welcome from the first hello." }, { title: "Thoughtful Dining", copy: "Small details that make an evening linger." }],
};

export default aboutContent;

export const aboutMetadata = { title: "About The Royal Spice | Indian Restaurant in Kanpur", description: "Discover the story, people, values, and culinary philosophy behind The Royal Spice, an Indian restaurant in Kanpur." };
