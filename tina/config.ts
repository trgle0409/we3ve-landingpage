import { FieldDescription, defineConfig } from "tinacms";
import { FeaturedIcons } from "../components/icons"

// Your hosting provider likely exposes this as an environment variable
export default defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "content/german",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static/",
    },
  },
  // See docs on content modeling for more info on how to set up new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        //Home
        name: "home_page",
        label: "Home",
        path: "content/german",
        format: "md",
        match: {
          include: '_index'
        },
        // Visual Editing (realtime editing) funktioniert nicht weil Hugo ein statisches Framework ist
        // ui: {
        //   router: ({ document }) => {
        //     // navigate to the home page
        //     if (document._sys.filename == "_index.md") {
        //       return `/home`;
        //     }
        //     return undefined;
        //   },
        // },
        fields: [
          {
            name: "banner",
            label: "Banner",
            type: "object",
            fields: [
              { name: "title", label: "Titel", type: "string"},
              { name: "content", label: "Inhalt", type: "rich-text"},
              { name: "image", label: "Bild", type: "image" },
              {
                name: "button",
                label: "Button",
                type: "object",
                fields: [
                  {type: "boolean", name: "enable", label: "Button", default: false},
                  {type: "string", name: "link"},
                  {type: "string", name: "label"},
                ],
              },
            ],
          },
          {
            name: "features",
            label: "Features",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return {label: item.title}
              },
              defaultItem: {
                title: "We3ve Feature",
                image: "/images/service-1.png"
              }
            },
            fields: [
              {
                name: "title",
                label: "Titel",
                type: "string",
                
              },
              { type: "image", name: "image", label: "Bild" },
              {
                name: "content",
                label: "Inhalt",
                type: "rich-text"
              },
              {
                name: "bulletpoints",
                label: "Bulletpoints",
                type: "string",
                list: true
              },
              {
                name: "button",
                label: "Button",
                type: "object",
                fields: [
                  {type: "boolean", name: "enable", label: "Button", default: false},
                  {type: "string", name: "link"},
                  {type: "string", name: "label"},
                ],
              },
            ],
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/german/sections",
        format: "md",
        fields: [
          { type: "boolean", name: "enable", label: "Button", default: false },
          { type: "string", name: "title", label: "Titel"},
          { type: "rich-text", name: "description", label: "Inhalt" },
          {
            name: "testimonials",
            label: "Bewertungen",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return {label: item.name}
              },
              defaultItem: {
                name: "Mustermann",
                designation: "Musterjob",
                avatar: "/images/avatar-sm.png",                
              }
            },
            fields: [
              {
                name: "name",
                label: "Name",
                type: "string",
              },
              {
                name: "designation",
                label: "Job",
                type: "string",
              },
              { type: "image", name: "avatar", label: "Avatar" },
              {
                name: "content",
                label: "Inhalt",
                type: "rich-text"
              },
            ]
          },
        ]
      },
      {
        // About
        name: "about",
        label: "About",
        path: "content/german/about",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Titel",
            type: "rich-text",
          },
          {
            name: "meta_title",
            label: "Tab Titel",
            type: "string",
          },
          {
            name: "image",
            type: "image",
            label: "Bild",
          },
          {
            name: "body",
            label: "Inhalt",
            type: "rich-text",
            isBody: true,
          }
        ]
      },

      {
        // Entwickler
        name: "Entwickler",
        label: "Für Entwickler",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'entwickler'
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "meta_title",
            label: "Tab Title",
            type: "string",
          },
          {
            name: "Content",
            label: "Inhalt",
            type: "rich-text",
            isBody: true,
          } 
        ]
      },

      // Entscheider
      {
        name: "Entscheider",
        label: "Für Entscheider",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'entscheider'
        },
        // ui: {
        //   parse(value) {
        //     //remove leading slash if it exists
        //     return value.startsWith("/") ? value.slice(1) : value;
        //   },
        // }
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "meta_title",
            label: "Tab Title",
            type: "string",
          },
          {
            name: "Content",
            label: "Inhalt",
            type: "rich-text",
            isBody: true,
          }
        ]
      },
      // Impressum
      {
        name: "Impressum",
        label: "Impressum",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'impressum'
        },
        // ui: {
        //   parse(value) {
        //     //remove leading slash if it exists
        //     return value.startsWith("/") ? value.slice(1) : value;
        //   },
        // }
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "meta_title",
            label: "Tab Title",
            type: "string",
          },
          {
            name: "Content",
            label: "Inhalt",
            type: "rich-text",
            isBody: true,
          }
        ]
      },

      // Datenschutzerklärung
      {
        name: "Datenschutz",
        label: "Datenschutz",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'datenschutz'
        },
        // ui: {
        //   parse(value) {
        //     //remove leading slash if it exists
        //     return value.startsWith("/") ? value.slice(1) : value;
        //   },
        // }
        fields: [
          {
            name: "title",
            label: "Titel",
            type: "string",
          },
          {
            name: "meta_title",
            label: "Tab Titel",
            type: "string",
          },
          {
            name: "Content",
            label: "Inhalt",
            type: "rich-text",
            isBody: true,
          }
        ]
      }
    ]
  }
});
