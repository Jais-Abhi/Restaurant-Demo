import restaurant, { jsonLd } from "@/lib/restaurant";
import { Navbar, HeroSection, HighlightsSection, AboutPreview, FeaturedDishes, ExperienceGallery, ReviewsLocation, FinalCTA, Footer, MobileActionBar } from "@/components/restaurant/home-sections";

export const metadata = { title: "The Royal Spice | Authentic Indian Restaurant in Kanpur", description: "Experience authentic North Indian and Mughlai cuisine at The Royal Spice in Kanpur. Explore our menu, discover our story, and reserve your table.", alternates: { canonical: "/" }, openGraph: { title: "The Royal Spice | Kanpur", description: "Authentic Indian flavours, unforgettable moments.", type: "website" }, twitter: { card: "summary_large_image", title: "The Royal Spice | Kanpur" } };

export default function Home() { return <><Navbar/><main><HeroSection/><HighlightsSection/><AboutPreview/><FeaturedDishes/><ExperienceGallery/><ReviewsLocation/><FinalCTA/></main><Footer/><MobileActionBar/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/></> }
