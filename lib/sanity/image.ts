import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./client";

const imageBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export function getImageUrl(source: SanityImageSource, width?: number, height?: number) {
  let url = urlFor(source);
  
  if (width) {
    url = url.width(width);
  }
  
  if (height) {
    url = url.height(height);
  }
  
  return url.url();
}
