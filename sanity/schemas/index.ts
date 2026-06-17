import { postSchema } from "./post";
import { categorySchema } from "./category";
import { tagSchema } from "./tag";
import { authorSchema } from "./author";
import { siteSettingsSchema } from "./siteSettings";

export const schemaTypes = [
  postSchema,
  categorySchema,
  tagSchema,
  authorSchema,
  siteSettingsSchema,
];
