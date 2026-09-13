import { GalleryPageContent } from "@/components/restaurant/gallery-sections";
import { galleryMetadata } from "@/lib/gallery";

export const metadata = galleryMetadata;

export default function GalleryPage() {
  return <main className="gallery-page"><GalleryPageContent /></main>;
}
