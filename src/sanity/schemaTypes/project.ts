import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'recognition',
      title: 'Recognition',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true }, // Allows you to crop images in the CMS
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }, // Allows you to crop images in the CMS
    }),
    defineField({
      name: 'imageCallout',
      title: 'Image Callout',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'links',
      title: 'Project Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'projectLink',
          fields: [
            {
              name: 'label',
              title: 'Link Label',
              type: 'string',
              placeholder: 'e.g., View Website, GitHub Repo'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})