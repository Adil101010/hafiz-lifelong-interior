import artificialGrass from "../assets/images/artificial-grass.jpg";
import sportsFacility from "../assets/images/sports-facility-night.jpg";
import boxCricket from "../assets/images/box-cricket-night.jpg";
import footballTurf from "../assets/images/football-turf-night.jpg";

import deskBench from "../assets/images/student-desk-bench.jpg";
import deskDetail from "../assets/images/student-desk-detail.jpg";
import deskSide from "../assets/images/student-desk-side.jpg";
import schoolFurniture from "../assets/images/school-furniture-reference.jpg";
import classRoomChair from "../assets/images/class-room-chair.jpg";
import teacherTable from "../assets/images/teacher-table.avif";
import boxNetReference from "../assets/images/box-net-reference.jpg";
import officeFurniture from "../assets/images/office-furniture.jfif";

// ============================================================
// BUSINESS
// ============================================================

export const BUSINESS = {
  name: "Hafiz Lifelong Interior",

  phone: "+91 6397163814",

  alternatePhone: "+91 9759343623",

  whatsapp: "916397163814",

  location: "Pabla, Incholi, Meerut, Uttar Pradesh, India",

  shortLocation: "Pabla, Incholi, Meerut",

  tagline: "Furniture, interiors and sports infrastructure solutions.",

  email: import.meta.env.VITE_BUSINESS_EMAIL || "",
} as const;


// ============================================================
// CONTACT
// ============================================================

export const CONTACT = {
  primaryPhone: BUSINESS.phone,
  secondaryPhone: BUSINESS.alternatePhone,
  whatsapp: BUSINESS.whatsapp,
  location: BUSINESS.location,
  email: BUSINESS.email,
} as const;


// ============================================================
// PRODUCT TYPES
// ============================================================

export const PRODUCT_CATEGORIES = {
  SCHOOL_FURNITURE: "School Furniture",
  SPORTS_INFRASTRUCTURE: "Sports Infrastructure",
} as const;

export type ProductCategory =
  (typeof PRODUCT_CATEGORIES)[keyof typeof PRODUCT_CATEGORIES];


export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;

  image: string;

  description: string;

  details: string;

  features: string[];

  applications: string[];

  seoTitle?: string;

  seoDescription?: string;
};


// ============================================================
// PRODUCTS
// ============================================================

export const products: Product[] = [
  // ----------------------------------------------------------
  // SCHOOL FURNITURE
  // ----------------------------------------------------------

  {
    slug: "student-desk-bench",

    name: "Student Desk & Bench",

    category: PRODUCT_CATEGORIES.SCHOOL_FURNITURE,

    image: deskBench,

    description:
      "Practical student desk and bench solutions for classrooms and educational spaces.",

    details:
      "Student desk and bench solutions designed around practical classroom use. Quantity, layout and configuration can be discussed according to the project requirement.",

    features: [
      "Student-focused classroom design",
      "Practical everyday use",
      "Suitable for bulk requirements",
      "Project-based configuration",
    ],

    applications: [
      "Schools",
      "Coaching Centres",
      "Colleges",
      "Educational Institutes",
    ],

    seoTitle: "Student Desk & Bench | Hafiz Lifelong Interior",

    seoDescription:
      "Student desk and bench solutions for schools, colleges, coaching centres and educational institutes.",
  },


  {
    slug: "classroom-table",

    name: "Classroom Table",

    category: PRODUCT_CATEGORIES.SCHOOL_FURNITURE,

    image: deskDetail,

    description:
      "Functional classroom tables designed for organized educational environments.",

    details:
      "Classroom table solutions for educational spaces. Dimensions, configurations and quantity can be discussed according to the requirements of the project.",

    features: [
      "Classroom-ready design",
      "Practical working surface",
      "Multiple configuration options",
      "Requirement-based quotation",
    ],

    applications: [
      "Schools",
      "Colleges",
      "Institutes",
      "Coaching Centres",
    ],
  },


{
  slug: "school-chair",

  name: "School Chair",

  category: PRODUCT_CATEGORIES.SCHOOL_FURNITURE,

  image: classRoomChair,

  description:
    "School seating solutions for classrooms and educational environments.",

  details:
    "School seating is part of the furniture range represented in the supplied business material. Current models and configurations can be discussed according to the requirement.",
    features: [
      "Student-focused seating",
      "Classroom application",
      "Multiple furniture requirements",
      "Project-based sourcing",
    ],

    applications: [
      "Schools",
      "Coaching Centres",
      "Colleges",
      "Institutes",
    ],
  },


  {
    slug: "teacher-table",

    name: "Teacher Table",

    category: PRODUCT_CATEGORIES.SCHOOL_FURNITURE,

    image: teacherTable,

    description:
      "Functional teacher-table solutions for organized classroom spaces.",

    details:
      "Teacher tables form part of the school furniture range. Configuration and quantity can be discussed according to the classroom layout and project requirements.",

    features: [
      "Professional classroom use",
      "Practical working surface",
      "Organized teacher workspace",
      "Custom requirement discussion",
    ],

    applications: [
      "Schools",
      "Colleges",
      "Educational Institutes",
    ],
  },


  {
    slug: "library-furniture",

    name: "Library Furniture",

    category: PRODUCT_CATEGORIES.SCHOOL_FURNITURE,

    image: schoolFurniture,

    description:
      "Furniture solutions for libraries, reading areas and learning spaces.",

    details:
      "Library furniture solutions for educational environments. Layout, quantity and configuration can be planned around the available space and requirement.",

    features: [
      "Learning-space focused",
      "Library application",
      "Layout-based planning",
      "Requirement-led quotation",
    ],

    applications: [
      "Libraries",
      "Schools",
      "Colleges",
      "Educational Institutes",
    ],
  },


  {
    slug: "office-furniture",

    name: "Office Furniture",

    category: PRODUCT_CATEGORIES.SCHOOL_FURNITURE,

   image: officeFurniture,

    description:
      "Functional furniture solutions for offices and institutional workspaces.",

    details:
      "Office furniture is included in the supplied business material. Current configurations and specifications can be discussed during consultation.",

    features: [
      "Professional workspace use",
      "Functional design",
      "Multiple configurations",
      "Direct consultation",
    ],

    applications: [
      "Offices",
      "Institutes",
      "Schools",
      "Organizations",
    ],
  },


  // ----------------------------------------------------------
  // SPORTS INFRASTRUCTURE
  // ----------------------------------------------------------

  {
    slug: "box-cricket",

    name: "Box Cricket",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: boxCricket,

    description:
      "Box cricket infrastructure with turf and netting solutions for enclosed playing spaces.",

    details:
      "Box-cricket facilities represented in the supplied project references include artificial grass and sports netting. Site dimensions and intended use can be discussed for project planning.",

    features: [
      "Artificial grass application",
      "Sports netting",
      "Enclosed playing environment",
      "Customized setup planning",
    ],

    applications: [
      "Sports Facilities",
      "Cricket Academies",
      "Coaching Centres",
      "Recreational Venues",
    ],
  },


  {
    slug: "football-turf",

    name: "Football Turf",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: footballTurf,

    description:
      "Artificial-grass turf solutions for football-focused sports facilities.",

    details:
      "Football turf solutions represented in the supplied project imagery. Turf requirements, field layout and related infrastructure can be discussed according to the site.",

    features: [
      "Artificial grass",
      "Football application",
      "Field-specific planning",
      "Project consultation",
    ],

    applications: [
      "Sports Facilities",
      "Football Academies",
      "Coaching Centres",
      "Schools",
    ],
  },


  {
    slug: "artificial-grass",

    name: "Artificial Grass",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: artificialGrass,

    description:
      "Artificial grass solutions for sports facilities and suitable outdoor applications.",

    details:
      "Artificial-grass surfaces are represented throughout the supplied sports references. Product selection, installation requirements and quantity can be finalized according to the project.",

    features: [
      "Sports applications",
      "Low-maintenance surface",
      "Outdoor-use applications",
      "Project-based installation planning",
    ],

    applications: [
      "Box Cricket",
      "Football Turf",
      "Sports Facilities",
      "Recreational Areas",
    ],
  },


  {
    slug: "cricket-nets",

    name: "Cricket Nets",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: boxNetReference,

    description:
      "Cricket practice-net solutions for training areas and sports facilities.",

    details:
      "Cricket netting is featured in the supplied business references. Site dimensions, net configuration and intended use can be discussed before quotation.",

    features: [
      "Practice-area application",
      "Sports netting",
      "Training-space use",
      "Customized planning",
    ],

    applications: [
      "Cricket Academies",
      "Schools",
      "Coaching Centres",
      "Sports Facilities",
    ],
  },


  {
    slug: "football-nets",

    name: "Football Nets",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: footballTurf,

    description:
      "Football netting solutions for sports grounds and playing areas.",

    details:
      "Football netting solutions included within the sports-net range. Dimensions and configuration should be confirmed according to the specific facility.",

    features: [
      "Football application",
      "Sports netting",
      "Playing-area use",
      "Requirement-based quotation",
    ],

    applications: [
      "Sports Facilities",
      "Schools",
      "Coaching Centres",
    ],
  },


  {
    slug: "tennis-court-nets",

    name: "Tennis Court Nets",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: artificialGrass,

    description:
      "Netting solutions for tennis court environments and sports facilities.",

    details:
      "Tennis court nets are included in the supplied sports material. Final dimensions and installation requirements should be confirmed according to the court layout.",

    features: [
      "Tennis-court application",
      "Sports netting",
      "Court-focused setup",
      "Customized requirement discussion",
    ],

    applications: [
      "Tennis Facilities",
      "Sports Clubs",
      "Schools",
      "Institutes",
    ],
  },


  {
    slug: "safety-nets",

    name: "Safety Nets",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: sportsFacility,

    description:
      "Safety netting solutions for suitable sports and facility applications.",

    details:
      "Safety nets are included within the supplied sports-net references. The application and site should be assessed before finalizing the setup.",

    features: [
      "Facility-focused application",
      "Protective netting",
      "Sports-area use",
      "Project consultation",
    ],

    applications: [
      "Sports Facilities",
      "Schools",
      "Training Areas",
    ],
  },


  {
    slug: "boundary-nets",

    name: "Boundary Nets",

    category: PRODUCT_CATEGORIES.SPORTS_INFRASTRUCTURE,

    image: sportsFacility,

    description:
      "Boundary netting solutions for enclosed sports environments.",

    details:
      "Boundary nets are included within the supplied sports-net material and can be planned according to the dimensions and layout of the facility.",

    features: [
      "Enclosed facility use",
      "Sports boundary application",
      "Customized planning",
      "Project consultation",
    ],

    applications: [
      "Box Cricket",
      "Football Turf",
      "Sports Facilities",
      "Training Areas",
    ],
  },
];


// ============================================================
// GALLERY
// ============================================================

export type GalleryCategory =
  | "School Furniture"
  | "Sports"
  | "Artificial Grass"
  | "Box Cricket"
  | "Sports Nets"
  | "Football Turf";


export type GalleryItem = {
  image: string;
  title: string;
  category: GalleryCategory;
};


export const galleryItems: GalleryItem[] = [
  {
    image: boxCricket,
    title: "Box Cricket Facility",
    category: "Box Cricket",
  },

  {
    image: footballTurf,
    title: "Football Turf",
    category: "Football Turf",
  },

  {
    image: artificialGrass,
    title: "Artificial Grass",
    category: "Artificial Grass",
  },

  {
    image: sportsFacility,
    title: "Sports Infrastructure",
    category: "Sports",
  },

  {
    image: deskBench,
    title: "Student Desk & Bench",
    category: "School Furniture",
  },

  {
    image: deskDetail,
    title: "Desk & Bench Detail",
    category: "School Furniture",
  },

  {
    image: deskSide,
    title: "School Furniture Detail",
    category: "School Furniture",
  },

  {
    image: boxNetReference,
    title: "Sports Netting",
    category: "Sports Nets",
  },

  {
    image: schoolFurniture,
    title: "School Furniture",
    category: "School Furniture",
  },
];


// ============================================================
// CAPABILITIES
// ============================================================

export const capabilityItems = [
  "Schools",
  "Colleges",
  "Coaching Centres",
  "Educational Institutes",
  "Libraries",
  "Offices",
  "Sports Facilities",
] as const;


// ============================================================
// INQUIRY OPTIONS
// ============================================================

export const inquiryOptions = [
  "School Furniture",
  "Student Desk & Bench",
  "Classroom Table",
  "School Chair",
  "Teacher Table",
  "Library Furniture",
  "Office Furniture",

  "Artificial Grass",
  "Box Cricket",
  "Football Turf",
  "Cricket Nets",
  "Football Nets",
  "Tennis Court Nets",
  "Safety Nets",
  "Boundary Nets",

  "Complete Sports Setup",
  "Other",
] as const;