/* =========================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Change the text between the quotes. Save. Refresh the page.
   ========================================================= */

const SITE = {
  name: "Connor Smith",
  role: "Environment & Prop Artist, Unreal Engine 5",
  tagline: "Modular environments and game-ready props, built in Blender and Unreal. Currently building a crypt dungeon kit.",
  location: "Oxfordshire, UK",
  email: "connorjaysmith0123@gmail.com",
  available: true, // shows the green "Open to work" badge. Set to false to hide it.

  about: [
    "I build modular environments and game-ready props in Blender and Unreal Engine 5.",
    "Before games I spent years in IT support, so I care about things being well organised, documented and easy for other people to use. That carries into how I name, structure and package assets.",
  ],

  skills: ["Unreal Engine 5", "Blueprints", "Material Editor", "Nanite", "Lumen", "Niagara", "Blender", "UV unwrapping & baking", "Modular kits"],

  // Leave a link as "" to hide its button.
  links: {
    artstation: "https://www.artstation.com/connorjsmith",
    fab: "",
    github: "https://github.com/cjsmith3d",
    youtube: "",
    linkedin: "",
    cv: "", // e.g. "cv.pdf" once you add your CV to the site folder
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
    title: "Crypt Dungeon Kit",
    category: "Environment",
    year: "2026",
    summary: "A modular crypt kit: rooms and corridors that snap together on a 4 m grid.",
    description:
      "A modular dungeon kit built in Blender and assembled in UE5. Walls, doorways, pillars, trims, floors, ceilings and corridor pieces all snap to a 4 m grid, so 20 x 20 m rooms and 4 m corridors connect in any layout. Stone surfaces use Nanite displacement with an edge-fade mask so neighbouring pieces seal without seams. My own props: sarcophagi, wall torches with Niagara fire and Blueprint flicker, candles, an iron-strapped door and frame, and rubble. Lit only by torches and candles with Lumen. Also includes a bodycam-style player camera with lens distortion, film grain and head bob. Surface textures (stone, wood) and the skull and bone scans are from Fab / Quixel Megascans; the material setup is mine.",
    tools: ["Blender", "UE5", "Nanite", "Lumen", "Niagara", "Blueprints"],
    cover: "images/crypt-corridor.jpg",
    clip: "video/crypt-loop.mp4",
    gallery: ["images/crypt-corridor.jpg", "images/crypt-room.jpg", "images/crypt-door.jpg", "images/crypt-sarcophagus.jpg", "images/crypt-skull.jpg", "images/kit-sheet.jpg", "images/kit-nanite.jpg"],
    video: "",
    fab: "",
    price: "",
    placeholder: false,
  },
  {
    title: "Candlelit Cellar",
    category: "Environment",
    year: "2026",
    summary: "A candlelit cellar where someone has just left in a hurry.",
    description:
      "A small UE5 environment built from a modular kit made in Blender: brick walls and timber beams snapping to a 200uu grid with matched texel density. Every prop is my own: crates, stacked barrels, lanterns, a trestle table and stools. Lit only by candles, with a Blueprint that gives each lantern a natural, uneven flicker. The story is in the details: the table lantern has just been snuffed out, with a thin trail of Niagara smoke still rising from the wick, and a stool lies knocked over beside it.",
    tools: ["Blender", "UE5", "Blueprints", "Niagara"],
    cover: "images/cellar-hero.jpg",
    clip: "video/cellar-flicker.mp4", // a video file in the video folder; plays when the project opens
    gallery: ["images/cellar-hero.jpg", "images/cellar-wide.jpg"],
    video: "",
    fab: "",
    price: "",
    placeholder: false,
  },
  {
    title: "Candle Lantern",
    category: "Props",
    year: "2026",
    summary: "Glass, an emissive flame and a real light source.",
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
    summary: "Curved staves, iron hoops, two materials.",
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
    summary: "Game-ready crate, built in Blender and set up in UE5.",
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
