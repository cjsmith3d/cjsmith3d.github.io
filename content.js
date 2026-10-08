/* =========================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Change the text between the quotes. Save. Refresh the page.
   ========================================================= */

const SITE = {
  name: "Connor Smith",
  role: "Unreal Engine Artist & Technical Designer",
  tagline: "Environments, props and Blueprint tools built in Unreal Engine 5.",
  location: "Oxfordshire, UK",
  email: "connorjaysmith0123@gmail.com",
  available: true, // shows the green "Open to work" badge. Set to false to hide it.

  about: [
    "I build environments, modular kits and gameplay tools in Unreal Engine 5.",
    "Before games I spent years in IT support, so I care about things being well organised, documented and easy for other people to use. That carries into how I name, structure and package assets.",
  ],

  skills: ["Unreal Engine 5", "Blueprints", "Nanite / Lumen", "Material Editor", "PCG", "Blender", "Substance Painter", "Quixel Megascans"],

  // Leave a link as "" to hide its button.
  links: {
    artstation: "https://www.artstation.com/connorjsmith",
    fab: "",
    github: "https://cjsmith3d.github.io",
    youtube: "",
    linkedin: "https://www.linkedin.com/in/connor-smith-754aa8196",
  },
};

/* ---------------------------------------------------------
   PROJECTS
   Copy one { ... } block, paste it below, and change it.
   category must be one of:
     "Environment"  "Props"  "Materials"  "Blueprints"  "Game"
   cover: path to an image in the images folder, e.g. "images/forest.jpg"
          leave as "" and a placeholder is drawn instead.
   video: just the YouTube ID (the bit after v= in the link), or "".
   fab:   link to the asset on Fab if it is for sale, or "".
   placeholder: true = shows a "WIP" tag. Set false once it's real.
   --------------------------------------------------------- */

const PROJECTS = [
  {
    title: "Candlelit Cellar",
    category: "Environment",
    year: "2026",
    summary: "First environment: a modular cellar kit dressed with my own props.",
    description:
      "A small UE5 environment built from a modular kit made in Blender: 2m floor tiles, brick walls and timber beams, all snapping to a 200uu grid with matched texel density. Dressed with my crate, barrel and lantern props. Lit only by candles, with a Blueprint that gives each lantern a natural, uneven flicker.",
    tools: ["Blender", "UE5", "Blueprints"],
    cover: "images/cellar-hero.jpg",
    clip: "video/cellar-flicker.mp4", // a video file in the video folder; plays when the project opens
    gallery: [],
    video: "",
    fab: "",
    price: "",
    placeholder: false,
  },
  {
    title: "Candle Lantern",
    category: "Props",
    year: "2026",
    summary: "Third prop: glass, emissive flame and a real light source.",
    description:
      "Modelled in Blender: metal cage built with the Wireframe modifier, glass panes, pyramid roof, ring handle and candle. In UE5 the glass uses a translucent material, the flame is emissive, and a warm point light at the wick casts the cage shadows across the scene.",
    tools: ["Blender", "UE5"],
    cover: "images/lantern-hero.jpg",
    gallery: [],
    video: "",
    fab: "",
    price: "",
    placeholder: false,
  },
  {
    title: "Oak Barrel",
    category: "Props",
    year: "2026",
    summary: "Second prop: curved staves, iron hoops, two materials.",
    description:
      "Modelled in Blender from a 20-sided cylinder: stave grooves bevelled in, the bulge shaped with proportional editing, recessed lids top and bottom. Hoops are separate smooth bands with a metal material. Cylinder-projected UVs so the grain runs along each stave. Set up in UE5 with wood and metallic materials and rounded collision.",
    tools: ["Blender", "UE5"],
    cover: "images/barrel-hero.jpg",
    gallery: [],
    video: "",
    fab: "",
    price: "",
    placeholder: false,
  },
  {
    title: "Wooden Shipping Crate",
    category: "Props",
    year: "2026",
    summary: "My first game-ready prop, built in Blender and set up in UE5.",
    description:
      "Frame built with a Wireframe modifier, planks with Array and Bevel. Each plank's UVs are offset so no two boards share the same grain. Ambient occlusion baked to a second UV channel. Imported into UE5 at real-world scale (1m) with two material slots and collision.",
    tools: ["Blender", "UE5"],
    cover: "images/crate-hero.jpg",
    gallery: [],
    video: "",
    fab: "",
    price: "",
    placeholder: false,
  },
];
