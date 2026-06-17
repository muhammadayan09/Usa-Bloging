export const categorySchema = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule: any) =>
        Rule.required().max(300).warning("Keep it under 300 characters"),
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Leave empty to use title field",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Leave empty to use description field",
    },
  ],
};
