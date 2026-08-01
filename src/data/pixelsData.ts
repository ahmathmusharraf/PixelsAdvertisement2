import {
  ServiceItem,
  PortfolioProject,
  TeamMember,
  Testimonial,
  ClientLogo,
  TimelineMilestone,
  BlogPost,
  LiveOrder
} from '../types';

export const companyDetails = {
  name: 'Pixels Advertisement',
  arabicName: 'بيكسلز للدعاية والاعلان',
  tagline: 'UAE’s Leading Outdoor & Indoor LED Screen Specialists & 3D Signage Experts',
  subHeading: 'Specializing in High-Brightness Outdoor & Indoor LED Display Screens, 3D Illuminated Signboards, Sticker Branding, Neon Signs, and Commercial Printing in Ajman, UAE.',
  address: 'China Mall, Gate No. 6, Opposite Ajman, Al Jerf Industrial 1, Ajman, UAE',
  phone: '+971 52 139 9918',
  phoneClean: '+971521399918',
  email: 'info@pixelsadv.ae',
  website: 'https://pixelsadv.ae',
  whatsapp: '+971521399918',
  workingHours: 'Monday–Saturday: 8:00 AM – 8:30 PM (Sunday Closed)',
  googleMapsUrl: 'https://maps.app.goo.gl/ENLYyavqa8gwa69e9',
  social: {
    facebook: 'https://facebook.com/pixelsadvertisement',
    instagram: 'https://instagram.com/pixelsadvertisement',
    tiktok: 'https://tiktok.com/@pixelsadvertisement',
    linkedin: 'https://linkedin.com/company/pixelsadvertisement'
  },
  stats: [
    { label: 'LED & Signage Projects', value: 1000, suffix: '+' },
    { label: 'Happy UAE Clients', value: 300, suffix: '+' },
    { label: 'Years Experience', value: 10, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' }
  ]
};

export const servicesData: ServiceItem[] = [
  {
    id: 'led-screens',
    title: 'Outdoor & Indoor LED Screens',
    category: 'LED Screens',
    shortDesc: 'High-brightness, ultra-definition outdoor (P2.5, P6, P10) & indoor (P1.5, P1.8, P2.5, P3) LED screens & video walls.',
    fullDesc: 'Custom fabricated Outdoor LED Display Screens (P2.5, P6, P10) and Indoor LED Screens (P1.5, P1.8, P2.5, P3) for shopping malls, control rooms, retail venues, and outdoor building facades across the UAE. Engineered for high refresh rates, vivid contrast, and 50°C+ heat endurance.',
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    items: ['Outdoor LED (P2.5, P6, P10)', 'Indoor LED (P1.5, P1.8, P2.5, P3)', 'LED Video Walls', 'Digital Display Panels', 'Transparent LED Displays'],
    turnaroundTime: '5-7 Days'
  },
  {
    id: '3d-signage',
    title: '3D Signages (Outdoor & Indoor)',
    category: '3D Signage',
    shortDesc: 'Custom 3D illuminated channel letters, acrylic & stainless steel back-lit signboards.',
    fullDesc: 'Premium quality 3D indoor and outdoor signboards crafted with CNC laser precision. From stainless steel backlit logos and 3D acrylic channel letters to rooftop signs.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1200&auto=format&fit=crop',
    items: ['Outdoor 3D Signage', 'Indoor 3D Signage', '3D Acrylic Channel Letters', 'Stainless Steel Backlit Signs', '3D Illuminated Logos'],
    turnaroundTime: '3-5 Business Days'
  },
  {
    id: 'sticker-branding',
    title: 'Sticker Branding',
    category: 'Sticker Branding',
    shortDesc: 'High-resolution vinyl sticker printing, vehicle fleet wrapping & glass frosted graphics.',
    fullDesc: 'Transform your vehicles, retail glass windows, and office walls into powerful branding assets. We use top-grade 3M and Avery cast vinyl with anti-UV lamination.',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
    items: ['Sticker Branding', 'Vehicle Fleet Wrapping', 'Frosted Glass Stickers', 'Wall Murals & Decals', 'Perforated Window Vinyl'],
    turnaroundTime: '2-3 Days'
  },
  {
    id: 'neon-signs',
    title: 'Neon Signs',
    category: 'Neon Signs',
    shortDesc: 'Vibrant custom LED flex neon signs for storefronts, cafes & interior branding.',
    fullDesc: 'Handcrafted LED flex neon signage designed to illuminate your space. Safe, energy-efficient, custom-shaped acrylic backing with multi-color RGB remote control options.',
    iconName: 'Maximize2',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
    items: ['Custom LED Flex Neon', 'Boutique Neon Logos', 'Acrylic Neon Art', 'Open / Closed Neon Signs', 'RGB Multi-Color Neon'],
    turnaroundTime: '2-3 Days'
  },
  {
    id: 'traffic-signs',
    title: 'Traffic Signs',
    category: 'Traffic Signs',
    shortDesc: '3M reflective traffic signs, directional wayfinding & road safety boards.',
    fullDesc: 'UAE municipality compliant traffic and safety signage manufactured with high-intensity 3M reflective sheeting, rust-proof aluminum substrate, and heavy-duty posts.',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1200&auto=format&fit=crop',
    items: ['Reflective Traffic Signs', 'Directional Wayfinding Signs', 'Construction Safety Boards', 'Parking Signs', 'Custom Road Signs'],
    turnaroundTime: '2-4 Days'
  },
  {
    id: 'business-cards-flyers',
    title: 'Business Card, Flyer',
    category: 'Business Card, Flyer',
    shortDesc: 'Ultra-crisp offset & digital printing for business cards, flyers, and brochures.',
    fullDesc: 'High-volume offset & fast digital printing for luxury business cards, promotional flyers, trifold brochures, menus, and corporate stationery with foil & spot UV options.',
    iconName: 'Printer',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1200&auto=format&fit=crop',
    items: ['Luxury Business Cards', 'Promotional Flyers', 'Brochures & Leaflets', 'Company Profiles', 'Menus & Folders'],
    turnaroundTime: '24-48 Hours'
  },
  {
    id: 'bill-books-flags',
    title: 'Bill Book & Flags',
    category: 'Bill Book & Flags',
    shortDesc: 'Custom carbonless NCR bill books, teardrop outdoor flags & promotional banners.',
    fullDesc: 'Customized duplicate/triplicate NCR invoice bill books, order receipt books, teardrop & feather beach flags, trade show pop-up banners, and corporate rubber stamps.',
    iconName: 'Gift',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1200&auto=format&fit=crop',
    items: ['NCR Duplicate Bill Books', 'Feather & Teardrop Flags', 'Roll-up Banners', 'Company Seals & Stamps', 'Event Flags & Banners'],
    turnaroundTime: '1-3 Days'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Outdoor & Indoor P3.91 Giant LED Display Wall',
    category: 'LED Display',
    client: 'China Mall Commercial Facade',
    location: 'Gate 6, China Mall, Ajman',
    completionYear: '2026',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    description: 'High refresh rate outdoor & indoor LED video display screen with auto-brightness sensors and remote cloud content scheduling.',
    tags: ['Outdoor LED', 'Indoor LED Wall', 'High Brightness'],
    featured: true
  },
  {
    id: 'proj-2',
    title: '3D Illuminated Storefront Signboard',
    category: 'Signage',
    client: 'Gym Nation Ajman',
    location: 'Al Jerf Industrial, Ajman',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1000&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1000&auto=format&fit=crop',
    description: 'Custom fabricated stainless steel channel letters with high-lumen IP67 water-resistant Samsung LEDs for 24/7 high visibility.',
    tags: ['3D Signage', 'LED Backlit', 'Acrylic Fabrication'],
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Spicy Hub Restaurant Neon & LED Facade',
    category: 'Signage',
    client: 'Spicy Hub Restaurant',
    location: 'China Mall Road, Ajman',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop',
    description: 'Custom warm orange flex neon acrylic logo with outdoor rated black ACP backing panel, giving a high-end luxury night ambiance.',
    tags: ['Custom Neon', 'ACP Panel', 'Restaurant Sign'],
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Commercial Fleet Sticker Branding Wrap',
    category: 'Vehicle Branding',
    client: 'Pixels Service Fleet',
    location: 'Ajman & Dubai',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
    description: 'Full body 3M vinyl vehicle wrap with UV glossy laminate protection and precise door seam trimming for 5 service vans.',
    tags: ['Sticker Branding', '3M Cast Vinyl', 'RTA Approved'],
    featured: true
  },
  {
    id: 'proj-5',
    title: 'Al Jerf Corporate Wall Branding & Frosted Glass',
    category: 'Printing',
    client: 'Al Zaroni Group',
    location: 'Al Jerf, Ajman',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    description: 'Plotter-cut frosted glass film with laser acrylic logo reception backdrop and custom textured wallpaper installation.',
    tags: ['Frosted Film', 'Acrylic Logo', 'Wall Mural'],
    featured: false
  },
  {
    id: 'proj-6',
    title: 'ADCB Exhibition Pavilion Stand',
    category: 'Exhibition',
    client: 'ADCB Ajman Branch',
    location: 'Sharjah Expo Centre',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
    description: 'Custom 6x4m exhibition stand with raised gloss flooring, illuminated acrylic counters, LED video backdrop, and private meeting pod.',
    tags: ['Custom Stand', 'Trade Show', 'Modular LED'],
    featured: true
  },
  {
    id: 'proj-7',
    title: 'Nesto Hypermarket Grand Opening Print & Banners',
    category: 'Printing',
    client: 'Nesto Group',
    location: 'Ajman',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1000&auto=format&fit=crop',
    description: 'Over 10,000 promotional flyers, 50 roll-up banners, and high-impact exterior mesh building graphics for opening event.',
    tags: ['Flyers', 'Rollups', 'Large Format'],
    featured: false
  },
  {
    id: 'proj-8',
    title: 'Ramada Hotel Luxury Corporate Gift Set',
    category: 'Printing',
    client: 'Ramada Hotel Ajman',
    location: 'Ajman Corniche',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop',
    description: 'Custom embossed leather notebooks, laser engraved metal pens, 10,000mAh powerbanks and velvet gift presentation boxes.',
    tags: ['Corporate Gifts', 'Laser Engraving', 'Luxury Packaging'],
    featured: false
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Danyal',
    role: 'CEO & Founder',
    department: 'Leadership',
    bio: 'Visionary founder leading Pixels Advertisement to become the premier outdoor & indoor LED display screen and 3D signage specialist in the UAE.',
    photo: '/Danyal.jpg',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-2',
    name: 'Nero',
    role: 'Assistant Operation Manager',
    department: 'Operations & HR',
    bio: 'Streamlining operational workflows, project execution timelines, on-site installation logistics, and client coordination.',
    photo: '/Nero.jpg',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-3',
    name: 'Alex Aquino',
    role: 'Human Resource',
    department: 'Operations & HR',
    bio: 'Managing talent acquisition, employee relations, workspace welfare, and organizational culture at Pixels Advertisement.',
    photo: '/Alex.jpg',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-4',
    name: 'Saroj Khan',
    role: 'Production Manager',
    department: 'Production Team',
    bio: 'Supervising CNC laser cutting, indoor & outdoor LED screen assembly, channel letter fabrication, and quality assurance.',
    photo: '/Saroj.jpg'
  },  
  {
    id: 'team-5',
    name: 'Roney Thomas',
    role: 'Design Manager',
    department: 'Creative Team',
    bio: 'Directing 3D signage design, LED display layout visualizers, vector branding architecture, and creative artwork approvals.',
    photo: '/Roney.jpg'
  },
  {
    id: 'team-6',
    name: 'Tony Thomas',
    role: 'Designer',
    department: 'Creative Team',
    bio: 'Specializing in high-precision vector layouts, 3D channel letter mockups, grand format artwork prepress, and branding assets.',
    photo: '/Tony.jpg'
  },
  {
    id: 'team-7',
    name: 'Susan Rony Thomas',
    role: 'Junior Accountant',
    department: 'Finance',
    bio: 'Overseeing corporate accounts, client invoicing, vendor statements, financial bookkeeping, and audit preparation.',
    photo: '/Susan.jpg'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Mohammed Al Zaroni',
    companyName: 'Al Zaroni Group',
    role: 'Operations Director',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'Pixels Advertisement delivered our project beyond expectations. Highly professional 3D LED signage installation and strictly on-time delivery!',
    projectType: '3D LED Signage',
    date: 'February 2026'
  },
  {
    id: 'test-2',
    clientName: 'Sara Ahmed',
    companyName: 'Nesto Hypermarket',
    role: 'Marketing Manager',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'Excellent quality and creative designs. Their team is very responsive and supportive for urgent grand opening printing deadlines.',
    projectType: 'Flyers & Large Format Printing',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    clientName: 'Anas Perera',
    companyName: 'Gym Nation',
    role: 'Facility Manager',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'Best signage company in Ajman! We are very happy with their work, durability under heat, and post-installation service.',
    projectType: 'Outdoor Signboard & Wall Wrap',
    date: 'March 2026'
  },
  {
    id: 'test-4',
    clientName: 'Rashid Al Nuaimi',
    companyName: 'Gulf Logistics LLC',
    role: 'Fleet Manager',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'Branded our entire fleet of 25 commercial trucks with 3M vinyl wrapping. Outstanding precision, zero air bubbles, and extremely durable finish.',
    projectType: 'Commercial Fleet Wrapping',
    date: 'April 2026'
  },
  {
    id: 'test-5',
    clientName: 'Priya Sharma',
    companyName: 'Bloom Boutique',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'Their team fabricated our custom acrylic neon signage and boutique storefront display in record time. Stunning craftsmanship!',
    projectType: 'Acrylic Neon & Storefront',
    date: 'May 2026'
  },
  {
    id: 'test-6',
    clientName: 'Tariq Mansoor',
    companyName: 'City Centre Ajman',
    role: 'Events Coordinator',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'Flawless exhibition stand fabrication and backlit fabric pop-up displays for our seasonal promotional campaigns. Highly recommended!',
    projectType: 'Exhibition Booth & Displays',
    date: 'June 2026'
  }
];

export const clientsData: ClientLogo[] = [
  { id: 'c1', name: 'ADCB', category: 'Banking' },
  { id: 'c2', name: 'Emirates', category: 'Aviation' },
  { id: 'c3', name: 'Sharjah Police', category: 'Government' },
  { id: 'c4', name: 'Nesto Hypermarket', category: 'Retail' },
  { id: 'c5', name: 'LuLu Hypermarket', category: 'Retail' },
  { id: 'c6', name: 'Ajman Bank', category: 'Banking' },
  { id: 'c7', name: 'Ramada Hotel', category: 'Hospitality' }
];

export const timelineData: TimelineMilestone[] = [
  {
    year: '2018',
    title: 'Company Founded in Ajman',
    description: 'Started as a boutique print shop in China Mall area offering quick turnaround business cards and banner prints.'
  },
  {
    year: '2020',
    title: 'Expanded Printing & Fabrication Facility',
    description: 'Invested in high-precision CNC laser cutters, channel letter bending machines, and Roland Japanese print machinery.'
  },
  {
    year: '2022',
    title: 'Launched LED Display Division',
    description: 'Introduced high-definition Outdoor (P2.5, P6, P10) & Indoor (P1.5, P1.8, P2.5, P3) LED screens, video walls, and custom digital signage solutions.'
  },
  {
    year: '2024',
    title: 'Large Scale Commercial Fleet & Mall Branding',
    description: 'Secured major enterprise contracts with corporate groups, commercial malls, and multi-vehicle fleet wrapping projects.'
  },
  {
    year: '2026',
    title: 'Over 300+ Active UAE Enterprise Clients',
    description: 'Recognized as a premier full-service advertising agency in Ajman serving Dubai, Sharjah, Abu Dhabi & entire UAE.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 5 Signage Regulations & Guidelines for Businesses in Ajman & Dubai',
    category: 'Signage Tips',
    excerpt: 'Navigating municipality approvals, illuminated display safety rules, and choosing heat-resistant acrylic materials.',
    content: 'When planning store signage in Ajman or Dubai, understanding local municipality guidelines is key. Ensure your 3D illuminated letters use IP67 water-resistant LEDs, anti-yellowing cast acrylic, and conform to height and luminance limits.',
    author: 'Nishad Nizar',
    date: 'July 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'blog-2',
    title: 'Why Vehicle Fleet Branding Is the Highest ROI Advertising in the UAE',
    category: 'Vehicle Branding',
    excerpt: 'How commercial van wraps generate over 50,000 daily visual impressions at zero monthly recurring ad fees.',
    content: 'A branded delivery van circulating through Ajman, Sharjah, and Dubai acts as a mobile billboard 24 hours a day. With 3M laminated cast vinyl lasting up to 5 years, your cost per impression is lower than social media ads.',
    author: 'Dilshan Jay',
    date: 'June 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'blog-3',
    title: 'Indoor vs. Outdoor LED Video Walls: Choosing Pixel Pitch (Outdoor P2.5, P6, P10 | Indoor P1.5, P1.8, P2.5, P3)',
    category: 'LED Tech',
    excerpt: 'Complete guide on selecting Outdoor (P2.5, P6, P10) & Indoor (P1.5, P1.8, P2.5, P3) pitch sizes based on viewing distance and environment.',
    content: 'Selecting the right LED video screen pitch depends on viewing distance and installation environment. For indoor retail displays, boardrooms, and control rooms, indoor pitches P1.5, P1.8, P2.5, and P3 deliver crisp detail. For outdoor building facades, roadside billboards, and stadium screens, outdoor pitches P2.5, P6, and P10 deliver high brightness and weather resistance.',
    author: 'Faisal Khan',
    date: 'May 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  }
];

export const sampleLiveOrders: LiveOrder[] = [
  {
    orderId: 'PX-8921',
    clientName: 'Al Zaroni Group',
    projectType: '3D Backlit LED Signboard (12ft x 4ft)',
    startDate: '2026-07-20',
    estimatedDelivery: '2026-07-27',
    currentStepIndex: 3,
    steps: [
      { title: 'Consultation & Site Measurement', description: 'Site dimensions surveyed at Al Jerf', completed: true, date: '2026-07-20' },
      { title: '3D CAD & Vector Design', description: 'Client approved final layout proof', completed: true, date: '2026-07-22' },
      { title: 'CNC Fabrication & Assembly', description: 'Channel letters laser cut and Samsung LEDs wired', completed: true, date: '2026-07-24' },
      { title: 'Quality Control & Illumination Test', description: '24-hour burn-in stress test in progress', completed: false },
      { title: 'Site Crane Mounting & Handover', description: 'Installation scheduled for 10 AM', completed: false }
    ]
  },
  {
    orderId: 'PX-7412',
    clientName: 'Spicy Hub Restaurant',
    projectType: 'Custom Acrylic Flex Neon Sign & ACP Backing',
    startDate: '2026-07-22',
    estimatedDelivery: '2026-07-28',
    currentStepIndex: 2,
    steps: [
      { title: 'Consultation & Design Proof', description: 'Neon flex color mockups confirmed', completed: true, date: '2026-07-22' },
      { title: 'Material Slicing & Laser Cut', description: 'ACP sheet routed and acrylic grooves cut', completed: true, date: '2026-07-24' },
      { title: 'Neon Soldering & Wiring', description: 'Assembly of silicone neon tubing', completed: false },
      { title: 'Quality Inspection', description: 'Voltage test and wiring insulation check', completed: false },
      { title: 'Delivery & On-site Fitting', description: 'Final wall mounting at China Mall Road', completed: false }
    ]
  }
];

export const faqsData = [
  {
    q: 'Where is Pixels Advertisement located in UAE?',
    a: 'We are located at China Mall, Gate No. 6, Opposite Ajman, Al Jerf Industrial 1, Ajman, UAE. We serve clients across Ajman, Dubai, Sharjah, Abu Dhabi, and the rest of the Emirates.'
  },
  {
    q: 'Do you help with municipality signage permissions?',
    a: 'Yes, we provide technical drawings, load-bearing calculations, and assistance with Ajman / Dubai Municipality signage approval processes.'
  },
  {
    q: 'How long does a 3D LED signboard fabrication take?',
    a: 'Standard 3D LED signboards typically take 3 to 5 business days from design proof approval to final installation.'
  },
  {
    q: 'Are your outdoor signs heat and weather resistant?',
    a: 'Absolutely. We use high-grade anti-UV cast acrylics, powder-coated aluminum/stainless steel, and IP67 waterproof LED modules tested for UAE summer temperatures up to 50°C+.'
  },
  {
    q: 'How can I request a quote for my project?',
    a: 'Simply click "Get A Quote" on our website to send us your project requirements, or contact our team directly via WhatsApp or phone call for an immediate proposal.'
  }
];
