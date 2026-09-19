// ---------------------------------------------------------------------------
// Central content file. Edit this file to update site copy, links and data.
// Replace PLACEHOLDER values (marked below) with your real details.
// ---------------------------------------------------------------------------

export const personal = {
  name: 'Swapnil Gavit',
  titles: ['Full Stack Java Developer', 'DevOps Engineer', 'Traveller'],
  typingRoles: [
    'Full Stack Java Developer',
    'Java Developer',
    'Spring Boot Developer',
    'React Developer',
    'Linux Engineer',
    'DevOps Engineer',
    'Production Support Engineer',
  ],
  philosophy:
    'Building scalable software while exploring the world — one deployment and one destination at a time.',
  location: 'Mumbai, Maharashtra, India', 
  email: 'swapnilgavit19@gmail.com',
  phone: '+91 81779 31221',
  resumeUrl: '/resume-swapnil-gavit.pdf',
}

export const socials = {
  email: 'mailto:swapnilgavit19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/swapnil-gavit', 
  github: 'https://github.com/SwapnilGavit', 
  twitter: 'https://x.com/swapnilgavit30', 
  instagram: 'https://instagram.com/swapnil___gavit',
  facebook: 'https://www.facebook.com/swapnil.gavit.30' 
}

export const githubUsername = 'SwapnilGavit' // PLACEHOLDER — used by GitHub contributions widget

export const about = {
  intro:
    'I am a Full-Stack Java Developer with DevOps expertise and 4+ years of experience building, deploying, and supporting enterprise-grade web applications.',
  body: [
    'My primary expertise is in Java, Spring Boot, JSP/Servlet, React.js, Oracle SQL, and Linux. I enjoy working across the complete software development lifecycle — from understanding business requirements and performing impact analysis to development, deployment, troubleshooting, and production support.',
    'What makes my journey interesting is that my work goes beyond writing code. I have hands-on experience with Linux, Apache Tomcat, Apache HTTP Server, Jenkins, JFrog Artifactory, Git, CI/CD, Shell Scripting, SSL/HTTPS, and enterprise system migrations. I have worked on application, web-server, and database migrations and enjoy solving challenging production and infrastructure problems.',
    'Outside of technology, I’m passionate about travelling and exploring new places. From the mountains of Kashmir, Ladakh, Spiti Valley, and Zanskar to exploring Bhutan, Dubai, Goa, Delhi, and Agra, travelling gives me a chance to experience different cultures, landscapes, and perspectives.',
    'I believe in continuous learning, building things that matter, solving problems, and exploring beyond my comfort zone.',
    'Code. Deploy. Explore. Repeat.',
  ],
  highlights: [
    { label: 'Years of Experience', value: '4+' },
    { label: 'Production Systems Migrated', value: '3' },
    { label: 'Core Stack', value: 'Java · Spring · React' },
    { label: 'Based in', value: 'India' },
  ],
}

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'code',
    skills: [
      'Java',
      'JavaScript',
      'Python',
      'SQL',
      'PL/SQL',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'layers',
    skills: [
      'Spring',
      'Spring Boot',
      'JSP/Servlet',
      'React.js',
      'JUnit',
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: [
      'Oracle',
      'MySQL',
    ],
  },
]

export const experience = [
  {
    company: 'Excellex Technologies Pvt. Ltd.',
    position: 'Software Developer',
    duration: 'June 2022 — Present',
    points: [
      'Own features end-to-end across the SDLC: requirement analysis, impact analysis, development, testing, deployment and production support.',
      'Configure and manage Linux, Apache Tomcat, and Apache HTTP Server.',
      'Build and maintain CI/CD pipelines for automated, repeatable deployments.',
      'Write and optimize Oracle SQL for application data layers.',
      'Contributed to Windows-to-Linux application/web server migration and MSSQL-to-Oracle database migration.',
      'Implemented SSL/HTTPS, Shell scripting, SFTP automation, and scheduled tasks using crontab.',
      'Provide UAT and production support, troubleshooting application, database, server, and deployment issues.',
    ],
    tags: ['Java', 'Spring Boot', 'React.js', 'Oracle SQL', 'Linux', 'CI/CD', 'Production Support'],
    projects: ['CBRICS – Corporate Bond Reporting & Integrated Clearing System','EBP – Electronic Bidding Platform'],
  },
]

export const projects = [
  {
    id: 'cbrics',
    name: 'CBRICS',
    fullName: 'Corporate Bond Reporting & Integrated Clearing System',
    summary:
      'Enterprise reporting and clearing platform for corporate bonds, covering the full software development lifecycle from analysis to production support.',
    tags: ['Java', 'Spring Boot', 'Oracle SQL', 'Linux', 'Apache Tomcat', 'Jenkins', 'CI/CD'],
    category: ['Full Stack', 'DevOps'],
    highlights: [
      'Full SDLC ownership — requirement analysis through production support',
      'Windows to Linux server migration',
      'Apache Tomcat setup and tuning',
      'Apache HTTP Server configuration',
      'Database migration from MSSQL to Oracle',
      'Jenkins CI/CD pipeline and JFrog artifact management',
      'SSL implementation and HTTPS migration',
    ],
  },
  {
    id: 'ebp',
    name: 'EBP',
    fullName: 'Electronic Bidding Platform',
    summary:
      'Electronic platform enabling secure, auditable bidding workflows, built and deployed with a strong focus on reliability and production stability.',
    tags: ['Java', 'Spring', 'React.js', 'Oracle SQL', 'Shell Scripting'],
    category: ['Full Stack', 'DevOps'],
    highlights: [
      'Requirement and impact analysis for bidding workflows',
      'Shell scripting for deployment automation',
      'Git-based version control and release management',
      'Production issue troubleshooting and resolution',
    ],
  },
  {
    id: 'clinic-management-system',
    name: 'Clinic Management System',
    fullName: 'Clinic Management System',
    summary:
      'End-to-end healthcare management application for patient records, appointments and clinic operations.',
    tags: ['Java', 'Spring Boot', 'JSP/Servlet', 'MySQL', 'React.js'],
    category: ['Full Stack'],
    highlights: [
      'Designed core modules for patient and appointment management',
      'Built REST APIs with Spring Boot',
      'Implemented a responsive front end with React.js',
    ],
  },{
  id: 'r26-resort',
  name: 'R26 Resort',
  fullName: 'R26 Resort & Restaurant Static Web Application',
  summary:
    'Modern web application for R26 Resort & Restaurant, designed to showcase resort facilities, restaurant services, accommodation, and provide an engaging digital experience for visitors.',
  tags: [
    'React.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Responsive Design',
    'REST API',
  ],
  category: ['Full Stack', 'Web Development'],
  url: 'https://swapnilgavit.com/R26/',
  highlights: [
    'Designed and developed the complete resort and restaurant web application',
    'Responsive and mobile-friendly user interface',
    'Resort information, facilities, and accommodation sections',
    'Restaurant and food service showcase',
    'Interactive navigation and user-friendly page layouts',
    'Reusable React components for maintainable UI development',
    'Modern and visually appealing design focused on user experience',
  ],
},  
]

export const devops = [
  {
    title: 'Linux Administration',
    description: 'Day-to-day administration, hardening and troubleshooting of production Linux servers.',
    icon: 'linux',
  },
  {
    title: 'Apache Tomcat',
    description: 'Installation, configuration and performance tuning of Apache Tomcat for Java application hosting.',
    icon: 'tomcat',
  },
  {
    title: 'Apache HTTP Server',
    description: 'Reverse proxy, virtual host and load-balancing configuration with Apache HTTPD.',
    icon: 'apache',
  },
  {
  title: 'AWS',
  icon: 'aws',
  description:
    'Hands-on learning and practical experience with AWS cloud infrastructure, EC2 instances, networking, server configuration and application hosting.',
},
  {
    title: 'Jenkins',
    description: 'Building and maintaining CI/CD pipelines for automated build, test and deployment.',
    icon: 'jenkins',
  },
  {
    title: 'JFrog Artifactory',
    description: 'Artifact versioning and repository management across environments.',
    icon: 'jfrog',
  },
  {
    title: 'Git',
    description: 'Branching strategies, code reviews and release management.',
    icon: 'git',
  },
  {
    title: 'CI/CD',
    description: 'Designing automated pipelines that take code from commit to production safely.',
    icon: 'cicd',
  },
  {
    title: 'SSL / HTTPS',
    description: 'Certificate implementation and migration of services from AJP to HTTPS.',
    icon: 'ssl',
  },
  {
    title: 'Shell Scripting',
    description: 'Automating deployments, backups and routine operations with shell scripts.',
    icon: 'shell',
  },
  {
    title: 'Production Deployment',
    description: 'Planning and executing zero-drama releases to production environments.',
    icon: 'deploy',
  },
  {
    title: 'Monitoring',
    description: 'Keeping an eye on application and server health to catch issues early.',
    icon: 'monitor',
  },
  {
    title: 'Troubleshooting',
    description: 'Diagnosing and resolving production issues quickly under pressure.',
    icon: 'troubleshoot',
  },
]

export const achievements = [
  'Migrated application servers from Windows to Linux',
  'Migrated web servers from Windows to Linux',
  'Migrated database from MSSQL to Oracle',
  'Configured Apache Tomcat for production workloads',
  'Configured Apache HTTP Server as reverse proxy',
  'Implemented SSL certificates across environments',
  'Migrated AJP connections to HTTPS',
  'Automated deployments with Jenkins and shell scripts',
  'Created and maintained shell scripts for operations',
  'Resolved critical production issues under pressure',
]

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = [
  {
    id: 'pgdac',
    institution: 'Centre for Development of Advanced Computing (CDAC)',
    qualification: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    duration: 'September 2021 — April 2022',
    grade: 'A Grade',
    description:
      'PG-DAC is an intensive postgraduate program focused on advanced software development and computer engineering, with hands-on learning across Java, Data Structures, Operating Systems, Web Technologies, Database Management Systems, Software Engineering, Cloud Computing, Linux, and Enterprise Application Development.',
    skills: [
      'Java',
      'Data Structures & Algorithms',
      'Spring Framework',
      'Database Management',
      'Web Development',
      'Linux',
      'Software Engineering',
      'Object-Oriented Programming',
    ],
  },
  {
    id: 'btech',
    institution: 'Dr. Babasaheb Ambedkar Technological University',
    qualification: 'Bachelor of Technology (B.Tech)',
    branch: 'Electronics & Telecommunication Engineering',
    duration: 'July 2015 — January 2021',
    description:
      'Completed Bachelor of Technology with a strong engineering foundation in electronics, communication systems, networking, programming fundamentals, mathematics, and problem-solving.',
    skills: ['Electronics', 'Communication Systems', 'Networking Fundamentals', 'Programming Fundamentals', 'Mathematics'],
  },
]

export const academicAchievements = [
  { label: 'PG-DAC (A Grade)', icon: 'award' },
  { label: 'B.Tech Graduate', icon: 'graduation' },
  { label: '4+ Years Industry Experience', icon: 'briefcase' },
]

export const certifications = [
  {
    title: 'PG-DAC Certificate',
    issuer: 'Centre for Development of Advanced Computing (CDAC)',
    date: 'April 2022',
    available: true,
  },
  {
    title: 'DevOps-certification',
    issuer: 'TBD',
    date: 'Upcoming',
    available: false,
  },
  {
    title: 'Future Certification',
    issuer: 'TBD',
    date: 'Upcoming',
    available: false,
  },
]

export const careerTimeline = [
  { year: '2015', label: 'Started B.Tech', type: 'education' },
  { year: '2021', label: 'Completed B.Tech', type: 'education' },
  { year: '2021', label: 'Joined CDAC', type: 'education' },
  { year: '2022', label: 'Completed PG-DAC (A Grade)', type: 'education' },
  { year: '2022', label: 'Joined Excellex Technologies Pvt. Ltd.', type: 'work' },
  { year: 'Present', label: 'Working as Full Stack Java Developer with DevOps Expertise', type: 'work' },
]

// ---------------------------------------------------------------------------
// Travel
// ---------------------------------------------------------------------------

export const travelStats = {
  countries: 2,
  states: 6,
  trips: 9,
  kilometers: '18,500+',
  highestAltitude: '17,586 ft (Changla Pass, Ladakh)',
  favoriteDestination: 'Ladakh',
}

export const travelDestinations = [
  {
    id: 'dubai-2022',
    place: 'Dubai',
    country: 'UAE',
    date: 'November 2022',
    year: 2022,
    mapCoords: [25.2048, 55.2708],
    category: ['Cities', 'Architecture'],
    overview:
      'A first international trip exploring the skyline, desert and the mix of ultra-modern architecture against the Arabian desert.',
    itinerary: ['Day 1 : Burj Khalifa & Downtown Dubai',
                'Day 2 : Desert safari & Bedouin camp', 
                'Day 3 : Dubai Marina & Palm Jumeirah', 
                'Day 4 : Old Dubai & Gold Souk'],
    budget: '₹65,000 approx. (flights, stay, activities)', // PLACEHOLDER
    route: ['Mumbai → Dubai (flight)'],
    tips: ['Book desert safari in advance', 'Best visited Oct–Mar for cooler weather', 'Metro is the easiest way to get around'],
    images: [
      '/travel-images/dubai-1.jpg',
      '/travel-images/dubai-2.jpg',
      '/travel-images/dubai-3.jpg',
      '/travel-images/dubai-4.jpg',
      '/travel-images/dubai-5.jpg',
      '/travel-images/dubai-6.jpg',
      '/travel-images/dubai-7.jpg',
      '/travel-images/dubai-8.jpg',
      '/travel-images/dubai-9.jpg',
      '/travel-images/dubai-10.jpg',
      '/travel-images/dubai-11.jpg',
      '/travel-images/dubai-12.jpg',
      '/travel-images/dubai-13.jpg',
      '/travel-images/dubai-14.jpg',
    ],
  },
  {
    id: 'delhi-agra-2025',
    place: 'Delhi-Agra',
    country: 'India',
    date: 'August 2025',
    year: 2025,
    mapCoords: [28.6139, 77.2090],
    category: ['Cities', 'Architecture'],
    overview: 'Exploring the capital\'s layered history — Mughal monuments, colonial architecture and modern India side by side.',
    itinerary: ['Day 1 : India Gate & Rashtrapati Bhavan', 
                'Day 2 : Red Fort & Old Delhi', 
                'Day 3 : Qutub Minar & Humayun\'s Tomb',
                'Day 4 : Taj Mahal, Agra Fort  '],
    budget: '₹15,000 approx.',
    route: ['Flight to Delhi',
            'VandeBharat Train to Agra'
          ],
    tips: ['Carry water in summer', 'Metro connects most major sights'],
    images: [
      '/travel-images/delhi-agra-1.jpg',
      '/travel-images/delhi-agra-2.jpg',
      '/travel-images/delhi-agra-3.jpg',
      '/travel-images/delhi-agra-4.jpg',
      '/travel-images/delhi-agra-5.jpg',
      '/travel-images/delhi-agra-6.jpg',
      '/travel-images/delhi-agra-7.jpg',
      '/travel-images/delhi-agra-8.jpg',
      '/travel-images/delhi-agra-9.jpg',
      '/travel-images/delhi-agra-10.jpg',
      '/travel-images/delhi-agra-11.jpg',
      '/travel-images/delhi-agra-12.jpg',
      '/travel-images/delhi-agra-13.jpg',
      '/travel-images/delhi-agra-14.jpg',
      '/travel-images/delhi-agra-15.jpg',
      '/travel-images/delhi-agra-16.jpg',
      '/travel-images/delhi-agra-17.jpg',
      '/travel-images/delhi-agra-18.jpg',
      '/travel-images/delhi-agra-19.jpg',
      '/travel-images/delhi-agra-20.jpg',
    ],
  },
  // {
  //   id: 'agra-2025',
  //   place: 'Agra',
  //   country: 'India',
  //   date: 'August 2025',
  //   year: 2025,
  //   category: ['Architecture'],
  //   overview: 'A short trip built entirely around one goal: watching sunrise at the Taj Mahal.',
  //   itinerary: ['Day 1: Sunrise at '],
  //   budget: '₹8,000 approx.',
  //   route: 'Delhi → Agra (road)',
  //   tips: ['Reach the Taj Mahal before sunrise for the best light and fewer crowds'],
  //   photos: 5,
  //   images: [
  //     '/travel-images/agra-1.jpg',
  //     '/travel-images/agra-2.jpg',
  //     '/travel-images/agra-3.jpg',
  //     '/travel-images/agra-4.jpg',
  //     '/travel-images/agra-5.jpg',
  //   ],
  // },
  {
    id: 'kashmir-2025',
    place: 'Kashmir',
    country: 'India',
    date: 'September 2025',
    year: 2025,
    mapCoords: [34.0837, 74.7973],
    category: ['Mountains', 'Nature'],
    overview: 'Paradise on earth — Dal Lake, Gulmarg and the valleys of Kashmir in early autumn colors.',
    itinerary: ['Day 1-2: Srinagar & Dal Lake shikara ride', 'Day 3: Gulmarg gondola', 'Day 4: Pahalgam valley'],
    budget: '₹35,000 approx.',
    route: ['Flight to Srinagar'],
    tips: ['Carry layers — mornings and evenings are cold', 'Houseboat stay is worth it'],
    images: [
      '/travel-images/kashmir-1.jpg',
      '/travel-images/kashmir-2.jpg',
      '/travel-images/kashmir-3.jpg',
      '/travel-images/kashmir-4.jpg',
      '/travel-images/kashmir-5.jpg',
      '/travel-images/kashmir-6.jpg',
      '/travel-images/kashmir-7.jpg',
      '/travel-images/kashmir-8.jpg',
      '/travel-images/kashmir-9.jpg',
      '/travel-images/kashmir-10.jpg',
      '/travel-images/kashmir-11.jpg',
    ],
  },
  {
    id: 'ladakh-2025',
    place: 'Ladakh',
    country: 'India',
    date: 'September 2025',
    year: 2025,
    mapCoords: [34.1526, 77.5771],
    category: ['Mountains', 'Adventure', 'Road Trips'],
    overview: 'High-altitude desert landscapes, Pangong Lake, and some of the highest motorable passes in the world.',
    itinerary: ['Day 1 : Leh acclimatization', 
                'Day 2 : Nubra Valley via Khardung La', 
                'Day 3 : Pangong Lake', 
                'Day 4 : Magnetic Hill & Sangam'],
    budget: '₹40,000 approx.',
    route: ['Flight to Shrinagar, Kashmir',
            'Road trip to Leh via Kargil'
    ],
    tips: ['Acclimatize for at least a day before gaining altitude', 'Carry cash — limited ATMs outside Leh'],
    images: [
      '/travel-images/ladakh-1.jpg',
      '/travel-images/ladakh-2.jpg',
      '/travel-images/ladakh-3.jpg',
      '/travel-images/ladakh-4.jpg',
      '/travel-images/ladakh-5.jpg',
      '/travel-images/ladakh-6.jpg',
      '/travel-images/ladakh-7.jpg',
      '/travel-images/ladakh-8.jpg',
      '/travel-images/ladakh-9.jpg',
      '/travel-images/ladakh-10.jpg',
      '/travel-images/ladakh-11.jpg',
      '/travel-images/ladakh-12.jpg',
      '/travel-images/ladakh-13.jpg',
      '/travel-images/ladakh-14.jpg',
      '/travel-images/ladakh-15.jpg',
      '/travel-images/ladakh-16.jpg',
      '/travel-images/ladakh-17.jpg',
      '/travel-images/ladakh-18.jpg',
      '/travel-images/ladakh-19.jpg',
      '/travel-images/ladakh-20.jpg',
    ],
  },
  {
    id: 'spiti-2025',
    place: 'Spiti Valley',
    country: 'India',
    date: 'November 2025',
    year: 2025,
    mapCoords: [32.2461, 78.0349],
    category: ['Mountains', 'Adventure', 'Road Trips'],
    overview: 'A cold desert mountain valley in Himachal Pradesh — remote monasteries, dramatic landscapes, and winding roads.',
    itinerary: ['Day 1 : Delhi → Shimla',
                'Day 2 : Shimla → Chitkul',
                'Day 3 : Chitkul → Tabo',
                'Day 4 : Tabo → Dhankar → Kaza',
                'Day 5 : Hikkim → Komic → Langza → Kaza',
                'Day 6 : KeyMonastery → Chicham Bridge → Kaza',
                'Day 7 : Kaza → Kalpa',
                'Day 8 : Kalpa → Shimla → overnight Volvo to Delhi',
                'Day 9 : Reach Delhi',],
    budget: '₹30,000 approx.',
    route: ['Flight to Delhi',
            'Road trip via Shimla-Kaza-Manali'],
    tips: ['Roads can close due to snow in late season',
           'Carry warm clothing even in November'],
    images: [
      '/travel-images/spiti-1.jpg',
      '/travel-images/spiti-2.jpg',
      '/travel-images/spiti-3.jpg',
      '/travel-images/spiti-4.jpg',
      '/travel-images/spiti-5.jpg',
      '/travel-images/spiti-6.jpg',
      '/travel-images/spiti-7.jpg',
      '/travel-images/spiti-8.jpg',
      '/travel-images/spiti-9.jpg',
      '/travel-images/spiti-10.jpg',
      '/travel-images/spiti-11.jpg',
      '/travel-images/spiti-12.jpg',
      '/travel-images/spiti-13.jpg',
      '/travel-images/spiti-14.jpg',
      '/travel-images/spiti-15.jpg',
      '/travel-images/spiti-16.jpg',
      '/travel-images/spiti-17.jpg',
      '/travel-images/spiti-18.jpg',
      '/travel-images/spiti-19.jpg',
      '/travel-images/spiti-20.jpg',
    ],
  },
  {
    id: 'goa-2026',
    place: 'Goa',
    country: 'India',
    date: 'January 2026',
    year: 2026,
    mapCoords: [15.2993, 74.1240],
    category: ['Sunsets', 'Nature'],
    overview: 'Beaches, sunsets and a laid-back pace to start the year.',
    itinerary: ['Day 1: North Goa beaches',
                'Day 2: Old Goa churches', 
                'Day 3: South Goa & sunset points'
              ],
    budget: '₹20,000 approx.',
    route: ['VandeBharat Train to Goa'],
    tips: ['Rent a scooter to explore at your own pace', 'Sunset at Vagator/Chapora Fort is unmissable'],
    images: [
      '/travel-images/goa-1.jpg',
      '/travel-images/goa-2.jpg',
      '/travel-images/goa-3.jpg',
      '/travel-images/goa-4.jpg',
      '/travel-images/goa-5.jpg',
      '/travel-images/goa-6.jpg',
      '/travel-images/goa-7.jpg',
      '/travel-images/goa-8.jpg',  
    ],
  },
  {
    id: 'bhutan-2026',
    place: 'Bhutan',
    country: 'Bhutan',
    date: 'April 2026',
    year: 2026,
    mapCoords: [27.5142, 90.4336],
    category: ['Mountains', 'Nature', 'Adventure'],
    overview: 'The Land of the Thunder Dragon — Tiger\'s Nest Monastery, pristine valleys, and a carbon-negative country.',
    itinerary: ['Day 1 : Bagdogra → Jaigaon → Phuentsholing', 
                'Day 2 : Phuentsholing → Thimphu',
                'Day 3 : Thimphu → Punakha → Dochula Pass → Chimi Lhakhang',
                'Day 4 : Thimphu sightseeing → Paro',                 
                'Day 2 : Paro → Tiger\'s Nest / Taktsang Monastery', 
                'Day 6 : Paro → Phuentsholing → Siliguri',
                'Day 7 : Siliguri → Bagdogra / Departure',
              ],
    budget: '₹90,000 approx. (incl. permits)',
    route: ['Flight to Bagdogra',
            'Road trip to Thimphu via Phuentsholing'
    ],
    tips: ['Sustainable Development Fee applies for international travelers', 'Tiger\'s Nest trek is steep — start early'],
    images: [
      '/travel-images/bhutan-1.jpg',
      '/travel-images/bhutan-2.jpg',
      '/travel-images/bhutan-3.jpg',
      '/travel-images/bhutan-4.jpg',
      '/travel-images/bhutan-5.jpg',
      '/travel-images/bhutan-6.jpg',
      '/travel-images/bhutan-7.jpg',
      '/travel-images/bhutan-8.jpg',
      '/travel-images/bhutan-9.jpg',
      '/travel-images/bhutan-10.jpg',
      '/travel-images/bhutan-11.jpg',
      '/travel-images/bhutan-12.jpg',
      '/travel-images/bhutan-13.jpg',
      '/travel-images/bhutan-14.jpg',
      '/travel-images/bhutan-15.jpg',
      '/travel-images/bhutan-16.jpg',
      '/travel-images/bhutan-17.jpg',
      '/travel-images/bhutan-18.jpg',
      '/travel-images/bhutan-19.jpg',
      '/travel-images/bhutan-20.jpg',
      '/travel-images/bhutan-21.jpg',
      '/travel-images/bhutan-22.jpg',
      '/travel-images/bhutan-23.jpg',
      '/travel-images/bhutan-24.jpg',
      '/travel-images/bhutan-25.jpg',
      '/travel-images/bhutan-26.jpg',
    ],
  },
  {
    id: 'zanskar-2026',
    place: 'Zanskar Valley',
    country: 'India',
    date: 'June 2026',
    year: 2026,
    mapCoords: [33.6940, 76.8544],
    category: ['Mountains', 'Adventure', 'Road Trips'],
    overview: 'One of the most remote valleys in the Himalayas — dramatic gorges, monasteries clinging to cliffs, and near-total silence.',
    itinerary: ['Day 1 : Delhi → Manali',
                'Day 2 : Manali → Jispa',
                'Day 3 : Jispa → Padum via Shingo La',
                'Day 4 : Padum → Karsha Monastery → Pensi La → Sani Lake → Drang Drung Glacier',
                'Day 5 : Phugtal Monastery → Gonbo Rangjon',
                'Day 6 : Gonbo Rangjon → Manali',
                'Day 7 : Manali exploration → Delhi',
                'Day 8 : Reach Delhi',
              ],
    budget: '₹45,000 approx.',
    route: ['Flight to Delhi',
            'Road trip from Delhi via Manali'],
    tips: ['Limited connectivity — inform people before you go off-grid', 'Carry extra fuel and supplies'],
    images: [
      '/travel-images/zanskar-1.jpg',
      '/travel-images/zanskar-2.jpg',
      '/travel-images/zanskar-3.jpg',
      '/travel-images/zanskar-4.jpg',
      '/travel-images/zanskar-5.jpg',
      '/travel-images/zanskar-6.jpg',
      '/travel-images/zanskar-7.jpg',
      '/travel-images/zanskar-8.jpg',
      '/travel-images/zanskar-9.jpg',
      '/travel-images/zanskar-10.jpg',
      '/travel-images/zanskar-11.jpg',
      '/travel-images/zanskar-12.jpg',
      '/travel-images/zanskar-13.jpg',
      '/travel-images/zanskar-14.jpg',
      '/travel-images/zanskar-15.jpg',
      '/travel-images/zanskar-16.jpg',
      '/travel-images/zanskar-17.jpg',
      '/travel-images/zanskar-18.jpg',
      '/travel-images/zanskar-19.jpg',
      '/travel-images/zanskar-20.jpg',
      '/travel-images/zanskar-21.jpg',
      '/travel-images/zanskar-22.jpg',
    ],
  },
]

export const bucketList = [
  { destination: 'Nepal — Annapurna Base Camp Trek & Shey Phoksundo Lake', done: false },
  { destination: 'Vietnam', done: false },
  { destination: 'Japan (Cherry Blossom Season)', done: false },
  { destination: 'Iceland', done: false },
  { destination: 'Northeast India (Meghalaya & Arunachal)', done: false },
  { destination: 'Andaman & Nicobar Islands', done: false },
  { destination: 'Switzerland', done: false },
]

// export const galleryCategories = ['All', 'Mountains', 'Cities', 'Nature', 'Architecture', 'Road Trips', 'Adventure', 'Sunsets']

// // Simple gradient placeholders used until real photos are added.
// export const galleryPhotos = [
//   { id: 1, category: 'Mountains', title: 'Ladakh Passes', image: '/travel-images/image1.jpg' },
//   { id: 2, category: 'Cities', title: 'Dubai Skyline', image: '/travel-images/image2.jpg' },
//   { id: 3, category: 'Nature', title: 'Kashmir Valleys', image: '/travel-images/image3.jpg' },
//   { id: 4, category: 'Architecture', title: 'Taj Mahal, Agra', image: '/travel-images/image12.jpg' },
//   { id: 5, category: 'Road Trips', title: 'Spiti Highways', image: '/travel-images/image4.jpg' },
//   { id: 6, category: 'Adventure', title: 'Zanskar Gorges', image: '/travel-images/image5.jpg' },
//   { id: 7, category: 'Sunsets', title: 'Goa Beaches', image: '/travel-images/image6.jpg' },
//   { id: 8, category: 'Mountains', title: 'Bhutan Peaks', image: '/travel-images/image7.jpg' },
//   { id: 9, category: 'Cities', title: 'Delhi Monuments', image: '/travel-images/image8.jpg' },
//   { id: 10, category: 'Nature', title: 'Pangong Lake', image: '/travel-images/image9.jpg' },
//   { id: 11, category: 'Architecture', title: 'Punakha Dzong', image: '/travel-images/image10.jpg' },
//   { id: 12, category: 'Adventure', title: 'Khardung La', image: '/travel-images/image11.jpg' },
// ]

// ---------------------------------------------------------------------------
// Travel Gallery
// Automatically generated from travelDestinations.
// travelDestinations is the single source of truth for travel photos.
// ---------------------------------------------------------------------------

export const galleryCategories = [
  'All',
  ...travelDestinations.map((destination) => destination.place),
]

export const galleryPhotos = travelDestinations.flatMap((destination) =>
  (destination.images || []).map((image, index) => ({
    id: `${destination.id}-${index + 1}`,
    image,
    title: `${destination.place} - Photo ${index + 1}`,
    destination: destination.place,
    destinationId: destination.id,
    country: destination.country,
    date: destination.date,
    year: destination.year,
    category: destination.category,
  }))
)
// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export const blogCategories = ['Java', 'Spring Boot', 'React', 'Linux', 'Apache', 'SQL', 'DevOps', 'Travel', 'Photography']

export const blogPosts = [
  {
    id: 'migrating-tomcat-windows-to-linux',
    title: 'Migrating Apache Tomcat from Windows to Linux: Lessons Learned',
    category: 'DevOps',
    date: '2025-03-12',
    readTime: '7 min read',
    excerpt: 'A practical walkthrough of moving a production Tomcat deployment from Windows Server to Linux — including the gotchas nobody warns you about.',
  },
  {
    id: 'spring-boot-production-checklist',
    title: 'My Spring Boot Production Readiness Checklist',
    category: 'Spring Boot',
    date: '2025-01-20',
    readTime: '6 min read',
    excerpt: 'Everything I check before a Spring Boot service goes live — from connection pools to health checks.',
  },
  {
    id: 'oracle-sql-performance-tips',
    title: '5 Oracle SQL Tuning Tricks That Actually Move the Needle',
    category: 'SQL',
    date: '2024-11-05',
    readTime: '8 min read',
    excerpt: 'Query tuning tips I picked up while working on high-throughput enterprise reporting systems.',
  },
  {
    id: 'apache-httpd-reverse-proxy',
    title: 'Configuring Apache HTTP Server as a Reverse Proxy for Tomcat',
    category: 'Apache',
    date: '2024-09-18',
    readTime: '5 min read',
    excerpt: 'A step-by-step guide to fronting Tomcat with Apache HTTPD for SSL termination and load distribution.',
  },
  {
    id: 'linux-production-support-toolkit',
    title: 'My Linux Toolkit for Production Support',
    category: 'Linux',
    date: '2024-07-02',
    readTime: '6 min read',
    excerpt: 'The commands and scripts I reach for first when something breaks in production.',
  },
  {
    id: 'react-hooks-for-java-devs',
    title: 'React Hooks Explained for Backend Java Developers',
    category: 'React',
    date: '2024-05-14',
    readTime: '7 min read',
    excerpt: 'Bridging the mental model gap between Spring beans and React hooks.',
  },
  {
    id: 'ssl-ajp-to-https-migration',
    title: 'Migrating from AJP to HTTPS: A Field Guide',
    category: 'DevOps',
    date: '2024-03-08',
    readTime: '6 min read',
    excerpt: 'Why we moved off AJP, how we implemented SSL, and what broke along the way.',
  },
  {
    id: 'ladakh-road-trip-guide',
    title: 'Planning a Ladakh Road Trip: Complete Guide',
    category: 'Travel',
    date: '2025-10-02',
    readTime: '10 min read',
    excerpt: 'Routes, altitude acclimatization, budget and packing list for a Ladakh road trip.',
  },
  {
    id: 'mountain-photography-basics',
    title: 'Mountain Photography Basics for Beginners',
    category: 'Photography',
    date: '2025-11-20',
    readTime: '5 min read',
    excerpt: 'Simple composition and gear tips that improved my mountain photography the most.',
  },
]

export const jenkinsPipelineSnippet = `pipeline {
  agent any
  stages {
    stage('Build')   { steps { sh 'mvn clean package' } }
    stage('Test')    { steps { sh 'mvn test' } }
    stage('Publish') { steps { sh 'jfrog rt upload target/*.war releases/' } }
    stage('Deploy')  { steps { sh './deploy.sh production' } }
  }
}`
