// src/sanity/lib/queries.ts
export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, _createdAt desc) {
  _id,
  title,
  role,
  recognition,
  imageCallout,
  challenge,
  solution,
  impact,
  order,
  mainImage,
  imageCallout,
  thumbnailImage,
  "stack": techStack[],
  "link": websiteUrl,
  links[] {
    label,
    url
  }
}`;