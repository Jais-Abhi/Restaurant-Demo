const restaurant = {
  name: "The Royal Spice",
  tagline: "Authentic Indian Flavours, Unforgettable Moments",
  description: "Traditional recipes, bold spices, and warm hospitality come together in an unforgettable dining experience.",
  cuisine: "North Indian · Mughlai · Contemporary Indian",
  rating: "4.8",
  reviewsCount: "1,240+",
  experience: "12+",
  location: "Kanpur, Uttar Pradesh",
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85",
  aboutImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
  dishes: [
    { name: "Butter Chicken", description: "Charred chicken, tomato, fenugreek", price: "₹349", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80" },
    { name: "Paneer Tikka", description: "Smoked cottage cheese, royal marinade", price: "₹289", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80" },
    { name: "Royal Dum Biryani", description: "Slow-cooked basmati, saffron, whole spices", price: "₹329", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80" },
    { name: "Dal Makhani", description: "Black lentils, butter, finished overnight", price: "₹249", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80" },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85", alt: "Warmly lit dining room" },
    { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", alt: "Fresh Indian dumplings" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80", alt: "Aromatic Indian curry" },
  ],
  reviews: [
    { quote: "Every dish felt like a story from home, told with so much care.", author: "Aditi S.", place: "Google review" },
    { quote: "The perfect place for a special evening in Kanpur. Beautiful food and service.", author: "Rohan M.", place: "Google review" },
  ],
  contact: { address: "18 Mall Road, Civil Lines, Kanpur", phone: "+91 98765 43210", whatsapp: "+919876543210" },
  hours: ["Mon – Thu  12:00 PM – 10:30 PM", "Fri – Sun  12:00 PM – 11:00 PM"],
  social: { instagram: "#", facebook: "#" },
};

export default restaurant;
export { restaurant };

export const navigation = [
  { label: "Home", href: "/" }, { label: "Menu", href: "/menu" }, { label: "About", href: "/about" }, { label: "Gallery", href: "/gallery" }, { label: "Order & Reserve", href: "/order" },
];

export const jsonLd = { "@context": "https://schema.org", "@type": "Restaurant", name: restaurant.name, image: restaurant.heroImage, telephone: restaurant.contact.phone, servesCuisine: ["North Indian", "Mughlai", "Contemporary Indian"], priceRange: "₹₹", address: { "@type": "PostalAddress", streetAddress: restaurant.contact.address, addressLocality: "Kanpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" }, aggregateRating: { "@type": "AggregateRating", ratingValue: restaurant.rating, reviewCount: "1240" }, url: "https://theroyalspice.example.com", sameAs: [restaurant.social.instagram, restaurant.social.facebook] };

