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
  tagline: 'Transforming Ideas Into Powerful Visual Experiences',
  subHeading: 'Creative Advertising Solutions that Elevate Your Brand Across UAE.',
  address: 'China Mall, Gate No. 6, Opposite Ajman, Al Jerf Industrial 1, Ajman, UAE',
  phone: '+971 52 139 9918',
  phoneClean: '+971521399918',
  email: 'info@pixelsadvertisement.ae',
  whatsapp: '+971521399918',
  workingHours: 'Monday–Saturday: 9:00 AM – 8:00 PM',
  social: {
    facebook: 'https://facebook.com/pixelsadvertisement',
    instagram: 'https://instagram.com/pixelsadvertisement',
    tiktok: 'https://tiktok.com/@pixelsadvertisement',
    linkedin: 'https://linkedin.com/company/pixelsadvertisement'
  },
  stats: [
    { label: 'Projects Completed', value: 1000, suffix: '+' },
    { label: 'Happy Clients', value: 300, suffix: '+' },
    { label: 'Years Experience', value: 10, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' }
  ]
};

export const servicesData: ServiceItem[] = [
  {
    id: 'signage',
    title: 'Signage Solutions',
    category: 'Signage',
    shortDesc: 'Custom 3D illuminated & non-illuminated signage crafted with precision engineering.',
    fullDesc: 'Pixels Advertisement delivers high-impact indoor and outdoor signage designed to capture attention and endure UAE climate conditions. From acrylic 3D channel letters and stainless steel backlit logos to wayfinding systems.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1200&auto=format&fit=crop',
    items: ['Indoor Signs', 'Outdoor Signs', '3D Sign Boards', 'LED Signs', 'Wayfinding & Pylon Signs', 'Flex Face Lightboxes'],
    startingPrice: 'AED 450',
    turnaroundTime: '3-5 Business Days'
  },
  {
    id: 'printing',
    title: 'Commercial Printing',
    category: 'Printing',
    shortDesc: 'Ultra-crisp offset & digital offset printing with premium finishings.',
    fullDesc: 'Complete business collateral printing under one roof in Ajman. We offer foil stamping, spot UV, matte and gloss lamination, custom die-cutting, and eco-friendly cardstock options.',
    iconName: 'Printer',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1200&auto=format&fit=crop',
    items: ['Business Cards', 'Flyers & Leaflets', 'Brochures & Menus', 'Catalogues', 'Posters & Wall Charts', 'Roll-up Banners'],
    startingPrice: 'AED 99',
    turnaroundTime: '24-48 Hours'
  },
  {
    id: 'vehicle-branding',
    title: 'Vehicle Branding',
    category: 'Vehicle Branding',
    shortDesc: 'Mobile billboards that turn your fleet into high-frequency advertising.',
    fullDesc: 'Full and partial vehicle wrapping using top-grade 3M and Avery Dennison cast vinyl with UV-laminated protection. RTA approval guidance and bubble-free seamless application.',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
    items: ['Car Wrapping', 'Van Wrapping', 'Bus & Fleet Branding', 'Commercial Pickup Graphics', 'Reflective Safety Graphics'],
    startingPrice: 'AED 650',
    turnaroundTime: '2-3 Days'
  },
  {
    id: 'led-display',
    title: 'LED Displays & Video Walls',
    category: 'LED Display',
    shortDesc: 'High-brightness, energy-efficient LED screens for indoor & outdoor impact.',
    fullDesc: 'State-of-the-art P2 to P10 outdoor and indoor LED screen modules, video wall controllers, transparent LED glass screens, and programmable digital signage software.',
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    items: ['Indoor LED Screens', 'Outdoor LED Billboards', 'LED Video Walls', 'Digital Window Screens', 'Programmable Scroll LED'],
    startingPrice: 'AED 2,500',
    turnaroundTime: '5-7 Days'
  },
  {
    id: 'exhibition-stands',
    title: 'Exhibition & Event Booths',
    category: 'Exhibition Stands',
    shortDesc: 'Custom tradeshow booths and display systems built to engage visitors.',
    fullDesc: 'End-to-end event production across Dubai World Trade Centre, ADNEC, and UAE venues. Custom wooden/metal fabrication, LED backdrops, pop-up displays, and audio-visual setups.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    items: ['Custom Booths', 'Modular Fabric Backdrops', 'Display Counters & Systems', 'Event Photo Walls', 'Portable Truss Systems'],
    startingPrice: 'AED 1,800',
    turnaroundTime: '4-7 Days'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Identity',
    category: 'Digital Marketing',
    shortDesc: 'Strategic social media management, brand guidelines, and visual content.',
    fullDesc: 'Empower your brand online with localized UAE marketing campaigns, creative graphic design, motion graphics video production, and conversion-oriented social media strategy.',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    items: ['Social Media Management', 'Brand Identity & Logo Design', 'Campaign Graphic Design', 'Video & Reels Production', 'SEO & Ad Content'],
    startingPrice: 'AED 1,200/mo',
    turnaroundTime: 'Ongoing / Project based'
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional & Corporate Gifts',
    category: 'Promotional Gifts',
    shortDesc: 'Branded corporate merchandise, custom apparel, and gift sets.',
    fullDesc: 'Premium promotional giveaways customized with laser engraving, screen printing, or UV print. Leather executive notebooks, power banks, custom drinkware, and embroidered uniforms.',
    iconName: 'Gift',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1200&auto=format&fit=crop',
    items: ['Corporate Gift Boxes', 'Branded Drinkware & Tech', 'Custom T-Shirts & Caps', 'Uniform Embroidery', 'Keychains & Lanyards'],
    startingPrice: 'AED 25 / item',
    turnaroundTime: '3-5 Days'
  },
  {
    id: 'large-format',
    title: 'Large Format Printing',
    category: 'Large Format Printing',
    shortDesc: 'High-resolution grand format graphics on vinyl, canvas, and ACP cladding.',
    fullDesc: 'Japanese Roland & Mimaki eco-solvent printing up to 3.2m width. Custom frosted glass film, wall murals, building wraps, acrylic laser cutting, and aluminum composite cladding.',
    iconName: 'Maximize2',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    items: ['Custom Wallpaper Murals', 'Frosted Glass Stickers', 'Window Graphics & Perforated Vinyl', 'ACP Cladding Graphics', 'Canvas Printing'],
    startingPrice: 'AED 45 / sq.m',
    turnaroundTime: '1-2 Days'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'proj-1',
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
    id: 'proj-2',
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
    id: 'proj-3',
    title: 'Commercial Van Fleet Cast Wrapping',
    category: 'Vehicle Branding',
    client: 'Pixels Service Fleet',
    location: 'Ajman & Dubai',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
    description: 'Full body 3M vinyl vehicle wrap with UV glossy laminate protection and precise door seam trimming for 5 service vans.',
    tags: ['3M Cast Vinyl', 'Fleet Wrap', 'RTA Approved'],
    featured: true
  },
  {
    id: 'proj-4',
    title: 'China Mall Gate Outdoor P3 LED Screen',
    category: 'LED Display',
    client: 'China Mall Management',
    location: 'Gate 6, China Mall, Ajman',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    description: 'High refresh rate outdoor P3.91 LED billboard with auto-brightness sensors and remote cloud content scheduling software.',
    tags: ['Outdoor LED', 'Video Wall', 'High Brightness'],
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
    name: 'Rizwan Farook',
    role: 'Managing Director',
    department: 'Leadership',
    bio: 'Over 14 years driving visual advertising excellence in UAE. Passionate about innovation, top-quality materials, and building long-term client trust.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-2',
    name: 'Nishad Nizar',
    role: 'Creative Director',
    department: 'Leadership',
    bio: 'Visual strategy specialist leading our high-concept design department. Expert in 3D signage modeling, typography, and identity architecture.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-3',
    name: 'Faisal Khan',
    role: 'Production Manager',
    department: 'Leadership',
    bio: 'Oversees CNC laser cutting, LED assembly, and grand format printing workflows ensuring flawless execution and on-time delivery.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-4',
    name: 'Tharindu Perera',
    role: 'Graphic Designer',
    department: 'Creative Team',
    bio: 'Senior print & vector precision designer focused on vibrant color profiles, large format layout accuracy, and branding mockups.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'team-5',
    name: 'Ishara Silva',
    role: 'UI/UX & Brand Specialist',
    department: 'Creative Team',
    bio: 'Crafting modern digital design, digital signage UX, and cohesive brand systems for physical & online touchpoints.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'team-6',
    name: 'Samith Perera',
    role: 'Installation Supervisor',
    department: 'Production Team',
    bio: 'Certified site installation expert leading structural mounting, high-rise boom crane installations, and safety compliance across UAE.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'team-7',
    name: 'Dilshan Jay',
    role: 'Digital Marketing Head',
    department: 'Digital Marketing',
    bio: 'Data-driven performance marketer specializing in UAE local SEO, Google Ads, and high-ROI Meta ad campaigns.',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'team-8',
    name: 'Fathima Rizvi',
    role: 'Social Media Manager',
    department: 'Digital Marketing',
    bio: 'Creating viral reels, engaging social media graphics, and brand stories that resonate with diverse audiences across the Gulf.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
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
    description: 'Introduced high-definition P2 to P10 outdoor LED screens, video walls, and custom digital signage solutions.'
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
    title: 'Indoor vs. Outdoor LED Video Walls: Selecting Pixel Pitch (P1.8 to P4)',
    category: 'LED Tech',
    excerpt: 'A complete buyer guide on resolution, brightness nits, viewing distance, and weatherproofing.',
    content: 'Selecting the right LED video screen pitch depends on viewing distance. For indoor retail displays viewed within 2 meters, P1.8 or P2.5 delivers crystal clarity. For outdoor billboards viewed from 10+ meters, P3.91 or P5 offers maximum brightness.',
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
