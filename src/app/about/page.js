import { AboutPageContent } from "@/components/restaurant/about-sections";
import { aboutMetadata } from "@/lib/about";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return <main className="about-page"><AboutPageContent /></main>;
}
