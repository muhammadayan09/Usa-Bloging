export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    logo,
    defaultOgImage,
    socialLinks
  }
`;

export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    updatedAt,
    author->,
    category->,
    tags[]->,
    readingTime,
    featured
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    updatedAt,
    author->,
    category->,
    tags[]->,
    content,
    seoTitle,
    seoDescription,
    canonicalUrl,
    readingTime,
    affiliateDisclosureEnabled
  }
`;

export const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "post" && category._ref == $categoryId] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    author->,
    category->,
    readingTime
  }
`;

export const POSTS_BY_TAG_QUERY = `
  *[_type == "post" && $tagId in tags[]._ref] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    author->,
    category->,
    readingTime
  }
`;

export const POSTS_BY_AUTHOR_QUERY = `
  *[_type == "post" && author._ref == $authorId] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime
  }
`;

export const RELATED_POSTS_QUERY = `
  *[_type == "post" && category._ref == $categoryId && slug.current != $slug] | order(publishedAt desc) [0..2] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    author->,
    readingTime
  }
`;

export const ALL_CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    image
  }
`;

export const CATEGORY_BY_SLUG_QUERY = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image,
    seoTitle,
    seoDescription
  }
`;

export const ALL_TAGS_QUERY = `
  *[_type == "tag"] | order(title asc) {
    _id,
    title,
    slug
  }
`;

export const TAG_BY_SLUG_QUERY = `
  *[_type == "tag" && slug.current == $slug][0] {
    _id,
    title,
    slug
  }
`;

export const AUTHOR_BY_SLUG_QUERY = `
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    bio,
    socialLinks
  }
`;

export const ALL_AUTHORS_QUERY = `
  *[_type == "author"] {
    _id,
    name,
    slug,
    image,
    bio
  }
`;
