import artificialGrass from '../assets/images/artificial-grass.jpg'
import sportsFacility from '../assets/images/sports-facility-night.jpg'
import boxCricket from '../assets/images/box-cricket-night.jpg'
import footballTurf from '../assets/images/football-turf-night.jpg'
import deskBench from '../assets/images/student-desk-bench.jpg'
import deskDetail from '../assets/images/student-desk-detail.jpg'
import deskSide from '../assets/images/student-desk-side.jpg'
import schoolPoster from '../assets/images/school-furniture-reference.jpg'
import boxPoster from '../assets/images/box-net-reference.jpg'
import gemReference from '../assets/images/gem-reference.jpg'
import udyamReference from '../assets/images/udyam-reference.jpg'
import heroPoster from '../assets/images/hero-poster.jpg'
import boxInstallPoster from '../assets/images/box-cricket-installation-poster.jpg'
import boxNightPoster from '../assets/images/box-cricket-night-poster.jpg'
import heroVideo from '../assets/videos/hero-turf-installation.mp4'
import boxInstallVideo from '../assets/videos/box-cricket-installation.mp4'
import boxNightVideo from '../assets/videos/box-cricket-night-play.mp4'

export const BUSINESS = {
  name: 'Hafiz Lifelong Interior',
  phone: '+91 6397163814',
  whatsapp: '916397163814',
  location: 'Pabla, Incholi, Meerut, Uttar Pradesh, India',
  shortLocation: 'Pabla, Incholi, Meerut',
  udyam: 'UDYAM-UP-56-0182372',
  tagline: 'Designing spaces, elevating lifestyles.',
  email: import.meta.env.VITE_BUSINESS_EMAIL || '',
}

export type Product = {
  slug: string
  name: string
  category: 'School Furniture' | 'Sports Infrastructure'
  image: string
  description: string
  details: string
  features: string[]
  applications: string[]
}

export const products: Product[] = [
  {
    slug: 'student-desk-bench',
    name: 'Student Desk & Bench',
    category: 'School Furniture',
    image: deskBench,
    description: 'Practical desk-and-bench furniture for everyday learning environments.',
    details: 'A school-focused desk and bench format shown in the supplied business references. Request a quotation for your required quantity and layout.',
    features: ['Student-friendly format', 'Practical classroom layout', 'Customized quantity support'],
    applications: ['Schools', 'Coaching Centres', 'Institutes'],
  },
  {
    slug: 'classroom-table',
    name: 'Classroom Table',
    category: 'School Furniture',
    image: deskDetail,
    description: 'Clean, practical tables suited to classrooms and educational spaces.',
    details: 'Classroom table imagery is included in the supplied reference material. Dimensions, material grades and configurations can be discussed for the project requirement.',
    features: ['Classroom-ready design', 'Easy-to-use format', 'Project-based quotation'],
    applications: ['Schools', 'Colleges', 'Institutes'],
  },
  {
    slug: 'school-chair',
    name: 'School Chair',
    category: 'School Furniture',
    image: schoolPoster,
    description: 'School seating is part of the furniture range shown in the supplied reference material.',
    details: 'The supplied school-furniture reference presents school chairs alongside desks, classroom tables and library furniture. Contact the team for the current chair options.',
    features: ['Student-friendly focus', 'Multiple furniture categories', 'Requirement-based sourcing'],
    applications: ['Schools', 'Coaching Centres', 'Institutes'],
  },
  {
    slug: 'teacher-table',
    name: 'Teacher Table',
    category: 'School Furniture',
    image: deskSide,
    description: 'Teacher-table solutions for organized classroom spaces.',
    details: 'Teacher tables are shown as part of the school furniture offering. Exact configurations should be confirmed against your project requirement.',
    features: ['Classroom application', 'Practical working surface', 'Custom requirement discussion'],
    applications: ['Schools', 'Colleges', 'Institutes'],
  },
  {
    slug: 'library-furniture',
    name: 'Library Furniture',
    category: 'School Furniture',
    image: schoolPoster,
    description: 'Furniture solutions for libraries and learning spaces.',
    details: 'The supplied school-furniture reference identifies library furniture as part of the range. Discuss layout, quantity and configuration before ordering.',
    features: ['Learning-space focused', 'Project-based planning', 'Requirement-led quotation'],
    applications: ['Libraries', 'Schools', 'Colleges'],
  },
  {
    slug: 'office-furniture',
    name: 'Office Furniture',
    category: 'School Furniture',
    image: schoolPoster,
    description: 'Functional furniture solutions for office environments.',
    details: 'Office furniture is listed in the supplied business material. Current models and specifications should be confirmed during consultation.',
    features: ['Professional workspace use', 'Multiple configurations', 'Direct consultation'],
    applications: ['Offices', 'Institutes', 'Schools'],
  },
  {
    slug: 'box-cricket',
    name: 'Box Cricket',
    category: 'Sports Infrastructure',
    image: boxCricket,
    description: 'Turf and net solutions for enclosed cricket playing environments.',
    details: 'The supplied project references show illuminated box-cricket facilities with artificial grass and netting. Plan your setup around the available space and intended use.',
    features: ['Artificial grass application', 'Sports netting', 'Customized setup planning'],
    applications: ['Sports Facilities', 'Coaching Centres', 'Recreational Venues'],
  },
  {
    slug: 'football-turf',
    name: 'Football Turf',
    category: 'Sports Infrastructure',
    image: footballTurf,
    description: 'Artificial-grass playing surfaces for football-focused facilities.',
    details: 'Football turf is represented in the supplied project imagery. Final turf, line-marking and support requirements should be agreed during quotation.',
    features: ['Artificial grass', 'Football field application', 'Project-specific planning'],
    applications: ['Sports Facilities', 'Coaching Centres', 'Schools'],
  },
  {
    slug: 'artificial-grass',
    name: 'Artificial Grass',
    category: 'Sports Infrastructure',
    image: artificialGrass,
    description: 'Artificial grass solutions for sports and other suitable outdoor applications.',
    details: 'The supplied images show artificial-grass surfaces in sports settings. Installation details, product selection and quantity are confirmed per project.',
    features: ['Durable-use focus', 'Low-maintenance appearance', 'Sports applications'],
    applications: ['Box Cricket', 'Football Turf', 'Sports Facilities'],
  },
  {
    slug: 'cricket-nets',
    name: 'Cricket Nets',
    category: 'Sports Infrastructure',
    image: boxCricket,
    description: 'Cricket practice-net solutions for sports and training spaces.',
    details: 'Cricket netting is explicitly featured in the supplied business references. Discuss the site and desired setup for a quotation.',
    features: ['Practice-area application', 'Sports netting', 'Customized planning'],
    applications: ['Cricket Academies', 'Schools', 'Coaching Centres'],
  },
  {
    slug: 'football-nets',
    name: 'Football Nets',
    category: 'Sports Infrastructure',
    image: footballTurf,
    description: 'Football netting solutions for playing areas and goals.',
    details: 'Football nets are included in the supplied sports-net product references. Confirm dimensions and configuration for the specific facility.',
    features: ['Football application', 'Netting solution', 'Requirement-based quotation'],
    applications: ['Sports Facilities', 'Schools', 'Coaching Centres'],
  },
  {
    slug: 'tennis-court-nets',
    name: 'Tennis Court Nets',
    category: 'Sports Infrastructure',
    image: artificialGrass,
    description: 'Netting solutions for tennis court environments.',
    details: 'Tennis court nets are included in the supplied business material. Final requirements should be confirmed for the court layout.',
    features: ['Tennis-court application', 'Sports netting', 'Customized requirement discussion'],
    applications: ['Tennis Facilities', 'Sports Clubs', 'Institutes'],
  },
  {
    slug: 'safety-nets',
    name: 'Safety Nets',
    category: 'Sports Infrastructure',
    image: sportsFacility,
    description: 'Safety netting solutions for suitable sports and facility applications.',
    details: 'Safety nets are listed in the supplied sports-net references. Project requirements should be assessed before finalizing the setup.',
    features: ['Facility-focused use', 'Protective netting application', 'Project consultation'],
    applications: ['Sports Facilities', 'Schools', 'Training Areas'],
  },
  {
    slug: 'boundary-nets',
    name: 'Boundary Nets',
    category: 'Sports Infrastructure',
    image: sportsFacility,
    description: 'Boundary netting for enclosed sports environments.',
    details: 'Boundary nets are explicitly included in the supplied sports-net material and are visible across the project references.',
    features: ['Enclosed facility use', 'Sports boundary application', 'Customized planning'],
    applications: ['Box Cricket', 'Football Turf', 'Sports Facilities'],
  },
]

export const galleryItems = [
  { image: boxCricket, title: 'Illuminated Box Cricket Facility', category: 'Box Cricket' },
  { image: footballTurf, title: 'Football Turf Project', category: 'Football Turf' },
  { image: artificialGrass, title: 'Artificial Grass Surface', category: 'Artificial Grass' },
  { image: sportsFacility, title: 'Completed Sports Facility', category: 'Completed Projects' },
  { image: deskBench, title: 'Student Desk & Bench', category: 'School Furniture' },
  { image: deskDetail, title: 'Desk & Bench Detail', category: 'School Furniture' },
  { image: deskSide, title: 'Furniture Detail', category: 'School Furniture' },
  { image: boxPoster, title: 'Box Net Solutions Reference', category: 'Sports Nets' },
  { image: schoolPoster, title: 'School Furniture Reference', category: 'School Furniture' },
]

export const videos = {
  hero: { src: heroVideo, poster: heroPoster, title: 'Turf installation in action' },
  project: { src: boxInstallVideo, poster: boxInstallPoster, title: 'Box cricket setup in progress' },
  showcase: { src: boxNightVideo, poster: boxNightPoster, title: 'Box cricket at night' },
}

export const capabilityItems = ['Schools', 'Colleges', 'Coaching Centres', 'Institutes', 'Libraries', 'Offices', 'Sports Facilities']

export const inquiryOptions = [
  'School Furniture', 'Student Desk & Bench', 'Classroom Table', 'School Chair', 'Teacher Table',
  'Library Furniture', 'Office Furniture', 'Artificial Grass', 'Box Cricket', 'Football Turf',
  'Cricket Nets', 'Football Nets', 'Tennis Court Nets', 'Safety Nets', 'Boundary Nets',
  'Complete Sports Setup', 'Other',
]

export const referenceAssets = {
  gemReference,
  udyamReference,
}
