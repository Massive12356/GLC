import { Project, Event, BlogPost, TeamMember, Partner, NGOInfo, PatientStory, FAQItem } from '../types';

export const ngoInfo: NGOInfo = {
  name: 'Nyamedua Foundation',
  shortName: 'Nyamedua',
  tagline: 'Ensuring equitable access to life-saving interventions',
  description: 'Nyamedua supports financially disadvantaged patients who cannot afford life-saving medical procedures and surgeries, especially within low-income communities across West Africa.',
  descriptionLong: 'Nyamedua Foundation was established in 2024 in Ghana with a singular mission: to ensure that no one dies from treatable medical conditions simply because they cannot afford care. We bridge the gap between vulnerable patients and life-saving medical interventions through fundraising, health education, volunteer mobilization, and strategic partnerships with medical professionals and institutions.',
  founded: '2024',
  registrationNumber: 'NGO-2024-00001',
  location: 'Ghana, West Africa',
  mission: 'To ensure equitable access to life-saving medical interventions for financially disadvantaged patients in low-income communities across West Africa through fundraising, health education, volunteer mobilization, and strategic healthcare partnerships.',
  vision: 'A West Africa where every individual, regardless of financial status, has access to life-saving medical care and the opportunity to live a healthy, fulfilling life.',
  values: [
    {
      title: 'Christ-mindedness',
      adinkra: 'Nyame Nti',
      adinkraMeaning: 'By God\'s grace',
      description: 'We are guided by the love and teachings of Christ, serving every patient with humility, faith, and unconditional compassion.',
      icon: 'Heart'
    },
    {
      title: 'Service',
      adinkra: 'Pempamsie',
      adinkraMeaning: 'Sew in readiness',
      description: 'We dedicate ourselves selflessly to meeting the healthcare needs of the vulnerable, putting others before ourselves in every action.',
      icon: 'Users'
    },
    {
      title: 'Equity',
      adinkra: 'Mate masie',
      adinkraMeaning: 'What I hear, I keep',
      description: 'We champion fair and just access to life-saving medical care, ensuring that no one is denied treatment because of their financial status.',
      icon: 'Scale'
    },
    {
      title: 'Inclusivity',
      adinkra: 'Wonsa da mu a',
      adinkraMeaning: 'Getting involved with others',
      description: 'We embrace and serve all people regardless of background, religion, or ethnicity, creating a community where everyone belongs.',
      icon: 'Globe'
    }
  ],
  address: 'Accra, Ghana, West Africa',
  phone: '+233 24 123 4567',
  email: 'info@nyamedua.org',
  businessHours: 'Monday - Friday: 8:00 AM - 5:00 PM',
  bankDetails: {
    accountName: 'Nyamedua Foundation',
    bankName: 'Ecobank Ghana',
    accountNumber: '0123456789012',
    branch: 'Accra Main Branch'
  },
  momoDetails: {
    number: '+233 59 123 4567',
    name: 'Nyamedua Foundation'
  },
  socialMedia: {
    instagram: 'https://instagram.com/nyamedua',
    twitter: 'https://twitter.com/nyamedua',
    facebook: 'https://facebook.com/nyamedua',
    tiktok: 'https://tiktok.com/@nyamedua'
  }
};

export const founders: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Ama Nyarko',
    role: 'Co-Founder & Executive Director',
    title: 'Medical Director',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Dr. Ama Nyarko is a pediatric surgeon with over 18 years of experience working in public hospitals across Ghana and Nigeria. Having witnessed countless preventable deaths due to inability to afford surgery, she co-founded Nyamedua to bridge the gap between vulnerable patients and life-saving medical care.',
    expertise: ['Pediatric Surgery', 'Healthcare Advocacy', 'Medical Outreach', 'Patient Care', 'Healthcare Policy', 'Community Health'],
    education: [
      'Fellowship in Pediatric Surgery, Royal College of Surgeons',
      'MBChB, University of Ghana Medical School',
      'Masters in Public Health, Johns Hopkins University'
    ],
    email: 'a.nyarko@nyamedua.org',
    achievements: [
      'Performed over 2,000 pediatric surgeries in public hospitals',
      'Established 3 rural medical outreach programs',
      'Advocated for universal health coverage in West Africa',
      'Mentored 50+ young medical professionals'
    ],
    honors: [
      '2024 Ghana Medical Association Humanitarian Award',
      'WHO Africa Health Champions Recognition 2023',
      'Top 100 Women in Healthcare, Africa 2024',
      'UNDP Sustainable Development Goals Champion'
    ],
    publications: [
      'Access to Surgical Care in Low-Income Communities (2024)',
      'Pediatric Healthcare Disparities in West Africa (2023)',
      'Community-Based Health Interventions: A Ghanaian Model (2022)'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/amanyarko',
      twitter: 'https://twitter.com/dramanyarko',
      website: 'https://amanyarko.health'
    }
  },
  {
    id: 2,
    name: 'Mr. Kwesi Asante',
    role: 'Co-Founder & Operations Director',
    title: 'Healthcare Administrator',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Mr. Kwesi Asante brings 15+ years of healthcare administration and nonprofit management experience. Previously the director of operations at a major Ghanaian teaching hospital, he oversees Nyamedua\'s programs, partnerships, and financial accountability.',
    expertise: ['Healthcare Administration', 'Nonprofit Management', 'Strategic Partnerships', 'Financial Transparency', 'Program Development', 'Grant Management'],
    education: [
      'MBA in Healthcare Management, University of Cape Coast',
      'Bachelor of Science in Administration, University of Ghana',
      'Certificate in Nonprofit Leadership, Harvard Kennedy School'
    ],
    email: 'k.asante@nyamedua.org',
    achievements: [
      'Managed healthcare programs serving 100,000+ patients annually',
      'Secured $2M+ in international grants for healthcare initiatives',
      'Built partnerships with 25+ hospitals across West Africa',
      'Implemented digital patient tracking systems for rural clinics'
    ],
    honors: [
      '2024 Ghana Healthcare Leadership Award',
      'Excellence in Nonprofit Management, West Africa 2023',
      'Ashoka Fellowship for Social Entrepreneurship',
      'Forbes Africa 30 Under 30 in Healthcare (2019)'
    ],
    publications: [
      'Sustainable Funding Models for Healthcare NGOs (2024)',
      'Digital Transformation in African Healthcare (2023)',
      'Partnership Frameworks for Medical Outreach (2022)'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/kwesiasante',
      twitter: 'https://twitter.com/kwesiasante',
      website: 'https://kwesiasante.org'
    }
  }
];

export const teamMembers: TeamMember[] = [
  ...founders,
  // Add more team members as needed
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'surgery-fund-program',
    title: 'Life-Saving Surgery Fund',
    category: 'Medical Intervention',
    type: 'Core Program',
    description: 'Our flagship program provides financial support for life-saving surgeries including cardiac procedures, tumor removals, organ transplants, and emergency operations for patients who cannot afford them.',
    fullDescription: 'The Life-Saving Surgery Fund is our flagship program that directly funds critical medical procedures for patients who would otherwise go untreated. We cover cardiac surgeries, tumor removals, organ transplants, emergency operations, and other life-saving procedures. Each case is carefully vetted by our medical board to ensure funds are directed to those with the greatest need and highest chance of successful outcomes.',
    objectives: [
      'Fund life-saving surgeries for financially disadvantaged patients',
      'Partner with hospitals to reduce procedural costs',
      'Ensure transparent allocation of surgical funds',
      'Track and report patient outcomes post-surgery'
    ],
    status: 'Active',
    startDate: 'January 2024',
    location: 'Ghana, Nigeria, Togo',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true,
    impact: {
      patients: 147,
      partners: 12,
      communities: 35,
      reach: 'National & International'
    }
  },
  {
    id: 2,
    slug: 'rural-health-outreach',
    title: 'Rural Health Outreach Initiative',
    category: 'Community Health',
    type: 'Outreach',
    description: 'Mobile medical clinics that bring healthcare directly to underserved rural communities across West Africa, offering screenings, vaccinations, and health education.',
    fullDescription: 'The Rural Health Outreach Initiative deploys mobile medical teams to remote communities that lack access to basic healthcare. Our teams provide free health screenings, vaccinations, malaria treatment, maternal health checkups, and health education. We partner with local community health workers to ensure continuity of care after our teams depart.',
    objectives: [
      'Deliver primary healthcare to remote communities',
      'Provide preventive screenings and vaccinations',
      'Train community health workers',
      'Reduce preventable disease burden in rural areas'
    ],
    status: 'Active',
    startDate: 'March 2024',
    endDate: 'Ongoing',
    location: 'Northern Ghana, Rural Nigeria',
    image: 'https://images.pexels.com/photos/6129045/pexels-photo-6129045.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6129045/pexels-photo-6129045.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true,
    impact: {
      patients: 8500,
      communities: 42,
      reach: 'Regional'
    }
  },
  {
    id: 3,
    slug: 'pediatric-care-program',
    title: 'Pediatric Care & Surgery Program',
    category: 'Pediatric Health',
    type: 'Medical Program',
    description: 'Dedicated program focused on children under 18 requiring medical or surgical interventions, including congenital defect repairs, cancer treatment, and emergency care.',
    fullDescription: 'Our Pediatric Care & Surgery Program is dedicated to children under 18 who require medical or surgical interventions. We fund treatments for congenital heart defects, cleft lip and palate repairs, childhood cancers, emergency surgeries, and specialized pediatric care. We work closely with pediatric specialists and children\'s hospitals across West Africa.',
    objectives: [
      'Fund surgeries and treatments for children in need',
      'Partner with pediatric specialists and hospitals',
      'Provide family support during treatment',
      'Track long-term pediatric health outcomes'
    ],
    status: 'Active',
    startDate: 'June 2024',
    endDate: 'Ongoing',
    location: 'Ghana, Nigeria, Ivory Coast',
    image: 'https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true,
    impact: {
      patients: 89,
      partners: 8,
      communities: 20,
      reach: 'National'
    }
  },
  {
    id: 4,
    slug: 'health-education-campaign',
    title: 'Health Education & Awareness Campaign',
    category: 'Education',
    type: 'Campaign',
    description: 'Community-based health education programs focusing on preventive care, maternal health, child nutrition, and disease awareness across West Africa.',
    fullDescription: 'Our Health Education & Awareness Campaign empowers communities with knowledge to prevent disease and seek timely care. We conduct workshops on maternal health, child nutrition, hygiene, malaria prevention, diabetes awareness, and cancer screening. Our programs are delivered in local languages using community health workers and volunteer educators.',
    objectives: [
      'Educate communities on preventive healthcare',
      'Raise awareness about early disease detection',
      'Train community health educators',
      'Distribute educational materials in local languages'
    ],
    status: 'Active',
    startDate: 'September 2024',
    endDate: 'Ongoing',
    location: 'Ghana, Togo, Benin',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: false,
    impact: {
      patients: 12000,
      communities: 60,
      reach: 'Regional'
    }
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: 'World Health Day Community Screening',
    date: 'April 7, 2026',
    time: '8:00 AM - 4:00 PM',
    location: 'Nima Market, Accra',
    type: 'Health Screening',
    description: 'Free health screenings, blood pressure checks, diabetes testing, and malaria rapid diagnostics for the Nima community.',
    image: 'https://images.pexels.com/photos/6129045/pexels-photo-6129045.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/health-day-2026/register',
    featured: true
  },
  {
    id: 2,
    title: 'Maternal Health Workshop - Kumasi',
    date: 'May 15, 2026',
    time: '10:00 AM - 2:00 PM',
    location: 'Komfo Anokye Teaching Hospital, Kumasi',
    type: 'Workshop',
    description: 'Educational workshop on prenatal care, safe delivery practices, and postnatal nutrition for expectant mothers.',
    image: 'https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/maternal-health-kumasi/register',
    featured: true
  },
  {
    id: 3,
    title: 'Pediatric Surgery Screening Camp',
    date: 'June 20, 2026',
    time: '8:00 AM - 5:00 PM',
    location: 'Rural Health Center, Northern Region',
    type: 'Medical Camp',
    description: 'Screening camp for children requiring surgical interventions. Pediatric surgeons will assess cases for our surgery fund program.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/pediatric-camp-2026/register',
    featured: true
  },
  {
    id: 4,
    title: 'Malaria Prevention & Awareness Drive',
    date: 'July 25, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Tamale Central Market',
    type: 'Awareness Campaign',
    description: 'Community awareness campaign on malaria prevention, distribution of insecticide-treated nets, and free malaria testing.',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/malaria-drive-2026/register',
    featured: true
  },
  {
    id: 5,
    title: 'Virtual Fundraiser Gala 2026',
    date: 'September 12, 2026',
    time: '6:00 PM - 9:00 PM GMT',
    location: 'Online',
    type: 'Fundraiser',
    description: 'Annual virtual gala featuring patient stories, impact reports, and a live donation drive to fund life-saving surgeries.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/gala-2026/register',
    featured: false
  }
];

export const partners: Partner[] = [
  {
    id: 1,
    name: 'Korle Bu Teaching Hospital',
    type: 'Hospital',
    logo: 'https://via.placeholder.com/150x80?text=KBTH',
    description: 'Ghana\'s premier teaching hospital and key surgical partner for cardiac and pediatric procedures.',
    website: 'https://www.korle-bu.gov.gh'
  },
  {
    id: 2,
    name: 'Komfo Anokye Teaching Hospital',
    type: 'Hospital',
    logo: 'https://via.placeholder.com/150x80?text=KATH',
    description: 'Major referral center in Kumasi providing surgical and specialized care for Northern Ghana patients.',
    website: 'https://www.kath.gov.gh'
  },
  {
    id: 3,
    name: 'WHO Ghana',
    type: 'International Organization',
    logo: 'https://via.placeholder.com/150x80?text=WHO',
    description: 'World Health Organization Ghana office supporting our health education and disease prevention programs.',
    website: 'https://www.who.int/ghana'
  },
  {
    id: 4,
    name: 'Ghana Health Service',
    type: 'Government Agency',
    logo: 'https://via.placeholder.com/150x80?text=GHS',
    description: 'National health service agency coordinating community health worker training and rural outreach.',
    website: 'https://www.ghanahealthservice.org'
  },
  {
    id: 5,
    name: 'UNICEF Ghana',
    type: 'International NGO',
    logo: 'https://via.placeholder.com/150x80?text=UNICEF',
    description: 'Supporting our pediatric care programs and child health education initiatives.',
    website: 'https://www.unicef.org/ghana'
  },
  {
    id: 6,
    name: '37 Military Hospital',
    type: 'Hospital',
    logo: 'https://via.placeholder.com/150x80?text=37MH',
    description: 'Strategic partner for emergency surgeries and trauma care for patients in the Greater Accra region.',
    website: 'https://www.37militaryhospital.org'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding Malaria: Prevention, Symptoms, and Treatment',
    excerpt: 'Malaria remains one of the leading causes of death in West Africa. Learn how prevention, early detection, and proper treatment can save lives.',
    content: '',
    date: 'April 15, 2026',
    category: 'Public Health',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/6129045/pexels-photo-6129045.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Nyamedua Health Team',
    likes: 128,
    dislikes: 0
  },
  {
    id: 2,
    title: 'Childhood Cancer in West Africa: Early Signs Every Parent Should Know',
    excerpt: 'Childhood cancers are treatable when caught early. This guide helps parents recognize warning signs and seek timely medical care.',
    content: '',
    date: 'April 1, 2026',
    category: 'Child Health',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Ama Nyarko',
    likes: 95,
    dislikes: 0
  },
  {
    id: 3,
    title: 'Debunking Common Medical Myths in African Communities',
    excerpt: 'From "malaria is caused by mangoes" to "diabetes only affects the wealthy," we tackle harmful health myths with medical facts.',
    content: '',
    date: 'March 20, 2026',
    category: 'Medical Myths',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Nyamedua Health Team',
    likes: 167,
    dislikes: 0
  },
  {
    id: 4,
    title: 'The Importance of Prenatal Care: A Guide for Expectant Mothers',
    excerpt: 'Regular prenatal checkups can prevent complications and ensure healthy deliveries. Here is what every expectant mother needs to know.',
    content: '',
    date: 'March 5, 2026',
    category: 'Maternal Health',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Nyamedua Health Team',
    likes: 84,
    dislikes: 0
  },
  {
    id: 5,
    title: 'How Your Donation Saves Lives: The Real Cost of Surgery in Ghana',
    excerpt: 'A breakdown of what it costs to fund life-saving surgeries and how every contribution, no matter the size, makes a tangible difference.',
    content: '',
    date: 'February 18, 2026',
    category: 'Donor Impact',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Kwesi Asante',
    likes: 203,
    dislikes: 0
  },
  {
    id: 6,
    title: 'Preventive Care: 5 Habits That Can Add Years to Your Life',
    excerpt: 'Simple, evidence-based habits that can dramatically reduce your risk of chronic diseases and improve overall wellbeing.',
    content: '',
    date: 'February 1, 2026',
    category: 'Preventive Care',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Nyamedua Health Team',
    likes: 142,
    dislikes: 0
  }
];

export const impactStats = {
  surgeriesFunded: 147,
  childrenSupported: 89,
  communitiesReached: 60,
  volunteersMobilized: 340,
  fundsRaised: 850000,
  patientsScreened: 20500,
  partners: 25,
  livesSaved: 147
};

export const volunteerOpportunities = [
  {
    id: 1,
    title: 'Medical Outreach Volunteer',
    description: 'Join our mobile medical teams to provide screenings, health education, and patient registration in rural communities.',
    requirements: ['Background in healthcare or community work', 'Willing to travel to rural areas', 'Compassionate and patient'],
    timeCommitment: '2-4 days per month'
  },
  {
    id: 2,
    title: 'Patient Support Volunteer',
    description: 'Provide emotional support, logistics coordination, and family communication for patients awaiting or recovering from surgery.',
    requirements: ['Good communication skills', 'Emotional resilience', 'Available during hospital hours'],
    timeCommitment: '4-8 hours/week'
  },
  {
    id: 3,
    title: 'Health Education Volunteer',
    description: 'Deliver health education workshops in schools, markets, and community centers on preventive care and disease awareness.',
    requirements: ['Public speaking skills', 'Knowledge of basic health topics', 'Fluency in local languages preferred'],
    timeCommitment: 'Flexible'
  },
  {
    id: 4,
    title: 'Fundraising & Events Volunteer',
    description: 'Help organize fundraising events, donor engagement activities, and community awareness campaigns.',
    requirements: ['Event planning experience preferred', 'Networking skills', 'Passion for healthcare equity'],
    timeCommitment: 'Flexible'
  },
  {
    id: 5,
    title: 'Content & Communications Volunteer',
    description: 'Create blog posts, social media content, patient stories, and newsletters to share our impact with the world.',
    requirements: ['Writing skills', 'Social media knowledge', 'Photography skills a plus'],
    timeCommitment: 'Flexible'
  }
];

export const patientStories: PatientStory[] = [
  {
    id: 1,
    name: 'Abena Mensah',
    age: 7,
    condition: 'Congenital Heart Defect',
    location: 'Kumasi, Ghana',
    image: 'https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Abena was born with a hole in her heart that made even walking to school impossible. Her parents, a market vendor and a taxi driver, could never afford the $4,500 surgery. Through Nyamedua\'s Pediatric Surgery Program, Abena received life-saving cardiac surgery at Komfo Anokye Teaching Hospital.',
    outcome: 'Abena is now thriving, attending school daily, and dreams of becoming a doctor to help other children.',
    treatment: 'Open-heart surgery to repair ventricular septal defect',
    fundsRaised: 4500,
    fundsNeeded: 4500,
    status: 'Recovered',
    beforeImage: 'https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    recoveryTimeline: [
      { date: 'Jan 2025', milestone: 'Diagnosed with congenital heart defect' },
      { date: 'Feb 2025', milestone: 'Admitted to Nyamedua program' },
      { date: 'Mar 2025', milestone: 'Successful cardiac surgery' },
      { date: 'Jun 2025', milestone: 'Fully recovered and discharged' }
    ],
    donorImpact: '47 donors contributed to fund Abena\'s surgery, with an average donation of $96.',
    featured: true
  },
  {
    id: 2,
    name: 'Kofi Addo',
    age: 12,
    condition: 'Cleft Lip & Palate',
    location: 'Tamale, Ghana',
    image: 'https://images.pexels.com/photos/6129045/pexels-photo-6129045.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Kofi was born with a severe cleft lip and palate that made eating and speaking difficult. Other children bullied him, and he had dropped out of school. His grandmother, who cares for him, earns less than $2 per day selling vegetables.',
    outcome: 'After reconstructive surgery, Kofi is back in school, speaking clearly, and has made many new friends.',
    treatment: 'Cleft lip and palate reconstructive surgery',
    fundsRaised: 1800,
    fundsNeeded: 1800,
    status: 'Recovered',
    recoveryTimeline: [
      { date: 'Sep 2024', milestone: 'Identified during rural outreach' },
      { date: 'Oct 2024', milestone: 'Surgery scheduled and funded' },
      { date: 'Nov 2024', milestone: 'Successful reconstructive surgery' },
      { date: 'Jan 2025', milestone: 'Speech therapy begins' }
    ],
    donorImpact: '23 donors came together to fund Kofi\'s surgery and speech therapy.',
    featured: true
  },
  {
    id: 3,
    name: 'Ama Serwah',
    age: 34,
    condition: 'Tumor Removal - Ovarian Mass',
    location: 'Accra, Ghana',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Ama is a single mother of three who discovered a large ovarian mass during a community health screening. The tumor was pressing against her organs, causing severe pain. Without surgery, it would have become life-threatening. She works as a seamstress and could not afford the $2,800 procedure.',
    outcome: 'The tumor was successfully removed. Ama is recovering well and has returned to her sewing business to support her children.',
    treatment: 'Laparoscopic tumor removal surgery',
    fundsRaised: 2100,
    fundsNeeded: 2800,
    status: 'In Treatment',
    donorImpact: '34 donors have contributed so far. $700 more is needed to cover post-operative care.',
    featured: true
  },
  {
    id: 4,
    name: 'Yaw Boateng',
    age: 5,
    condition: 'Hernia Repair',
    location: 'Sunyani, Ghana',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Yaw had been living with a painful umbilical hernia since birth. His father is a farmer and his mother sells charcoal. The family had been saving for years but could only raise a fraction of the surgery cost.',
    outcome: 'Yaw\'s hernia was successfully repaired. He is now pain-free and playing with other children in his village.',
    treatment: 'Pediatric hernia repair surgery',
    fundsRaised: 800,
    fundsNeeded: 800,
    status: 'Recovered',
    donorImpact: 'A single corporate sponsor covered Yaw\'s entire surgery cost.',
    featured: false
  }
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'How does Nyamedua select patients for surgery funding?',
    answer: 'Each patient is referred by a licensed medical professional and vetted by our Medical Review Board. We prioritize cases based on medical urgency, financial need, and likelihood of successful outcome. Patients must demonstrate inability to afford the procedure through income verification.',
    category: 'Programs'
  },
  {
    id: 2,
    question: 'How much of my donation goes directly to patient care?',
    answer: '85% of every donation goes directly to patient care, including surgeries, medications, and post-operative support. 10% covers program operations and medical board review, while 5% supports health education and outreach. We publish annual financial reports for full transparency.',
    category: 'Donations'
  },
  {
    id: 3,
    question: 'Can I donate from outside Ghana?',
    answer: 'Yes! We accept international donations via Paystack, bank transfer, and major credit cards (Visa/Mastercard). International donations are converted to Ghana Cedis at current exchange rates. All donors receive receipts for tax purposes where applicable.',
    category: 'Donations'
  },
  {
    id: 4,
    question: 'Do you offer monthly recurring donations?',
    answer: 'Yes, our recurring donation program allows you to give monthly starting from $10. Recurring donors receive quarterly impact reports, early access to patient success stories, and an annual summary of lives saved through their contributions.',
    category: 'Donations'
  },
  {
    id: 5,
    question: 'What types of volunteer opportunities are available?',
    answer: 'We offer medical outreach volunteers, patient support volunteers, health education volunteers, fundraising volunteers, and content creators. Medical volunteers must have healthcare backgrounds, while non-medical roles are open to anyone with passion and commitment.',
    category: 'Volunteering'
  },
  {
    id: 6,
    question: 'How can my hospital or organization partner with Nyamedua?',
    answer: 'We partner with hospitals, clinics, NGOs, and corporate sponsors. Hospital partners provide reduced-cost or pro-bono surgeries. Corporate sponsors can fund specific programs or patient cases. Contact us at partnerships@nyamedua.org to discuss collaboration.',
    category: 'Partnerships'
  },
  {
    id: 7,
    question: 'Can I refer a patient for surgery funding?',
    answer: 'Patient referrals must come from licensed medical professionals (doctors, nurses, or community health officers) who can provide a formal diagnosis and treatment plan. Self-referrals are not accepted to ensure medical appropriateness.',
    category: 'Healthcare Support'
  },
  {
    id: 8,
    question: 'How do I know my donation made a difference?',
    answer: 'All donors receive updates on funded cases, including surgery outcomes and patient recovery progress (with consent). Major donors can also receive detailed impact reports and may be invited to meet recovered patients at our annual gratitude events.',
    category: 'Donations'
  },
  {
    id: 9,
    question: 'Is Nyamedua a registered nonprofit organization?',
    answer: 'Yes, Nyamedua Foundation is registered with the Registrar General\'s Department of Ghana (Registration: CG024202401). We are a legally recognized nonprofit organization committed to full financial transparency and accountability.',
    category: 'Programs'
  },
  {
    id: 10,
    question: 'What regions do you currently serve?',
    answer: 'We currently operate in Ghana, Nigeria, and Togo, with plans to expand to Ivory Coast, Benin, and Burkina Faso by 2027. Our programs focus on underserved communities in these countries where access to surgical care is most limited.',
    category: 'Programs'
  }
];

// Legacy exports for compatibility during transition
export const firmInfo = ngoInfo;
export const lawyers = teamMembers;
export const practiceAreas = projects.map(p => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  shortDescription: p.description,
  fullDescription: p.fullDescription,
  whoItsFor: 'Patients in need of life-saving medical interventions',
  howWeHelp: p.objectives,
  icon: 'Heart',
  image: p.image
}));
export const testimonials: any[] = [];
export const caseStudies = projects.map(p => ({
  id: p.id,
  title: p.title,
  client: p.category,
  practiceArea: p.type,
  outcome: p.description,
  description: p.fullDescription,
  challenges: p.objectives,
  results: p.objectives,
  duration: p.startDate,
  value: p.location,
  featured: p.featured
}));
export const trustIndicators = {
  yearsExperience: 2,
  casesHandled: impactStats.surgeriesFunded,
  clientSatisfaction: 98,
  lawyers: teamMembers.length,
  certifications: ['Registered NGO - Ghana', 'WHO Partner Organization'],
  barMemberships: [],
  awards: ['2025 Healthcare NGO of the Year', 'West African Health Innovation Award']
};
