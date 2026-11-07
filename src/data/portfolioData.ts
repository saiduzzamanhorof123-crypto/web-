export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'Completed' | 'In Progress' | 'Research Concept';
  featured: boolean;
  architectureHighlights: string[];
  metricHighlights?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  categoryKey: 'programming' | 'ai_research' | 'dev_tools' | 'creative';
  description: string;
  skills: {
    name: string;
    icon: string;
    highlight: string;
  }[];
}

export interface ResearchPaper {
  title: string;
  subtitle: string;
  authors: string[];
  institution: string;
  description: string;
  abstract: string;
  interests: string[];
  methodologySteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  bibtexKey: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Saiduzzaman Horof',
    monogram: 'SH',
    label: "HELLO, WORLD! I'M",
    title: 'SAIDUZZAMAN HOROF',
    subtitles: 'Computer Science & Engineering Student | AI Enthusiast | Software Developer',
    typingRoles: [
      'AI Enthusiast',
      'Software Developer',
      'Machine Learning Explorer',
      'Technology Researcher',
      'Problem Solver'
    ],
    bio: "I'm a Computer Science and Engineering student at Hamdard University Bangladesh, passionate about Artificial Intelligence, software development, and innovative technologies. I enjoy exploring intelligent systems, conducting research, and transforming creative ideas into practical solutions.",
    extendedBio: [
      "I'm Saiduzzaman Horof, a Computer Science and Engineering student at Hamdard University Bangladesh.",
      "My interests include Artificial Intelligence, Machine Learning, Software Development, Natural Language Processing, and technological innovation.",
      "I enjoy exploring emerging technologies, developing practical applications, understanding algorithms, and conducting research.",
      "My ambition is to become a skilled AI Engineer and Software Developer who creates meaningful technological solutions."
    ],
    avatarUrl: '/assets/aistudio/ChatGPT_Image_Nov_6__2026__08_05_03_PM_57f243b4.jpg',
    university: 'Hamdard University Bangladesh',
    department: 'Computer Science & Engineering (CSE)',
    status: 'Undergraduate Studies · Currently Studying',
    email: 'saiduzzamanhorof123@gmail.com',
    github: 'https://github.com/saiduzzamanhorof123-crypto',
    linkedin: 'https://linkedin.com/in/saidu-zzaman-horof-0aa040420',
  },

  aboutCards: [
    {
      index: '01',
      title: 'AI & Machine Learning',
      description: 'Exploring intelligent systems, machine learning techniques, and deep learning technologies with high attention to mathematical principles and transformer models.',
      focus: ['Deep Neural Networks', 'Transformer Architectures', 'Bangla NLP Research', 'Noise Robustness']
    },
    {
      index: '02',
      title: 'Software Development',
      description: 'Building applications, exploring programming languages, and solving real-world problems through clean code, structured design patterns, and modern tooling.',
      focus: ['Full-Stack Principles', 'Python Ecosystem', 'Systems & Algorithms', 'Responsive Web UI']
    },
    {
      index: '03',
      title: 'Research & Innovation',
      description: 'Investigating new technologies, formalizing experimental pipelines, and contributing to meaningful academic research in low-resource language processing.',
      focus: ['Hierarchical Classification', 'Relevance Scoring', 'Empirical Benchmarking', 'Academic Publications']
    }
  ],

  skillCategories: [
    {
      title: 'Programming',
      categoryKey: 'programming',
      description: 'Core languages utilized for software development, systems understanding, and algorithmic computation.',
      skills: [
        { name: 'Python', icon: 'Terminal', highlight: 'AI modeling, data pipelines & rapid software prototyping' },
        { name: 'C', icon: 'Cpu', highlight: 'Foundational systems programming, memory management & OS concepts' },
        { name: 'C++', icon: 'Binary', highlight: 'Object-oriented programming, data structures & competitive coding' },
        { name: 'Java', icon: 'Code', highlight: 'Enterprise design principles, OOP paradigms & algorithmic logic' }
      ]
    },
    {
      title: 'AI & Research',
      categoryKey: 'ai_research',
      description: 'Theoretical foundations and applied neural network frameworks for intelligent systems.',
      skills: [
        { name: 'Artificial Intelligence', icon: 'Brain', highlight: 'Heuristics, search algorithms & agent representations' },
        { name: 'Machine Learning', icon: 'Network', highlight: 'Supervised, unsupervised & ensemble learning approaches' },
        { name: 'Deep Learning', icon: 'Layers', highlight: 'CNNs, Transformers, attention mechanisms & backpropagation' },
        { name: 'Natural Language Processing', icon: 'MessageSquareText', highlight: 'Text classification, BanglaBERT tokenization & embeddings' },
        { name: 'Data Analysis', icon: 'BarChart2', highlight: 'Feature engineering, dataset cleaning & statistical inference' },
        { name: 'Prompt Engineering', icon: 'Sparkles', highlight: 'Context design, chain-of-thought & LLM steerability' }
      ]
    },
    {
      title: 'Development Tools',
      categoryKey: 'dev_tools',
      description: 'Modern engineering environment and version control utilities.',
      skills: [
        { name: 'Git', icon: 'GitBranch', highlight: 'Distributed version control, branching workflows & commit discipline' },
        { name: 'GitHub', icon: 'Github', highlight: 'Open-source collaboration, issue tracking & code repositories' },
        { name: 'VS Code', icon: 'TerminalSquare', highlight: 'Primary development IDE with custom linting & debugging' },
        { name: 'Jupyter Notebook', icon: 'FileCode', highlight: 'Interactive data exploration, visualization & ML prototyping' },
        { name: 'Kaggle', icon: 'Globe', highlight: 'Benchmark datasets, GPU compute clusters & machine learning challenges' }
      ]
    },
    {
      title: 'Creative Technologies',
      categoryKey: 'creative',
      description: 'Visual communication, design principles, and media production.',
      skills: [
        { name: 'Graphic Design', icon: 'Palette', highlight: 'Composition, visual hierarchy, typography & color theory' },
        { name: 'Adobe Photoshop', icon: 'Image', highlight: 'Digital image manipulation, asset preparation & UI mockups' },
        { name: 'Canva', icon: 'PenTool', highlight: 'Rapid layout prototyping, presentations & visual documentation' },
        { name: 'Video Editing', icon: 'Film', highlight: 'Motion pacing, video demonstrations & technical presentations' },
        { name: 'AI Content Creation', icon: 'Wand2', highlight: 'Generative AI workflows, multi-modal asset synthesis' }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'rs-chaf-net',
      name: 'RS-CHAF-Net — Bangla News Classification',
      category: 'AI Research / NLP',
      description: 'A research-oriented Bangla news classification framework exploring relevance-score prediction, hierarchical classification, and noise-robust learning using transformer-based language models.',
      longDescription: 'RS-CHAF-Net tackles complex real-world multi-topic Bangla news corpora where class overlap and editorial noise introduce significant misclassifications. By coupling a pretrained BanglaBERT backbone with an auxiliary relevance-score branch and hierarchical loss calibration, the model dynamically filters noisy instances and enforces taxonomic consistency across news categories.',
      technologies: ['Python', 'PyTorch', 'BanglaBERT', 'NLP', 'Deep Learning', 'Transformers', 'Hugging Face'],
      githubUrl: 'https://github.com/saiduzzamanhorof123-crypto',
      status: 'Research Concept',
      featured: true,
      architectureHighlights: [
        'BanglaBERT tokenization & contextual vector extraction',
        'Auxiliary relevance-score estimator to attenuate noisy editorial text',
        'Hierarchical loss function that penalizes cross-domain taxonomical mistakes',
        'Comprehensive evaluation protocol on benchmark Bangla datasets'
      ],
      metricHighlights: [
        { label: 'Domain', value: 'Bangla NLP' },
        { label: 'Backbone', value: 'BanglaBERT' },
        { label: 'Taxonomy', value: 'Hierarchical' }
      ]
    },
    {
      id: 'ai-student-super-app',
      name: 'AI All-in-One Student Super App',
      category: 'AI Application Concept',
      description: 'An innovative student-focused platform concept designed to integrate AI-powered academic assistance, productivity features, and intelligent learning utilities.',
      longDescription: 'A unified conceptual workspace for modern computer science and engineering students. Combines contextual lecture summarization, assignment planning, code snippet explanations, and intelligent schedule optimization in a single responsive interface.',
      technologies: ['AI', 'Python', 'Web Development', 'FastAPI', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/saiduzzamanhorof123-crypto',
      status: 'In Progress',
      featured: true,
      architectureHighlights: [
        'Academic assistant with dynamic study material indexing',
        'Intelligent timetable & assignment deadline optimizer',
        'Algorithmic flashcards generated from lecture notes',
        'Minimalist, distraction-free student workspace'
      ],
      metricHighlights: [
        { label: 'Focus', value: 'Academic AI' },
        { label: 'Target', value: 'CSE Students' },
        { label: 'Architecture', value: 'Modular' }
      ]
    },
    {
      id: 'personal-portfolio',
      name: 'Personal Portfolio Website',
      category: 'Frontend Development',
      description: 'A modern, responsive personal portfolio showcasing technical skills, research interests, professional identity, and selected projects.',
      longDescription: 'Crafted with React, TypeScript, Tailwind CSS, and Framer Motion. Engineered with a futuristic AI-developer aesthetic, dark and light mode persistent theming, accessible form validation, and interactive research architecture viewers.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Motion', 'Lucide React'],
      githubUrl: 'https://github.com/saiduzzamanhorof123-crypto',
      demoUrl: '#home',
      status: 'Completed',
      featured: true,
      architectureHighlights: [
        'Responsive fluid layout adhering to strict design standards',
        'Persistent dark/light theme switcher stored in localStorage',
        'Dynamic interactive research architecture breakdown modal',
        'Accessible client-side validated contact channel'
      ],
      metricHighlights: [
        { label: 'Score', value: '100% Responsive' },
        { label: 'Theme', value: 'Dual-Engine' },
        { label: 'Framework', value: 'React 19' }
      ]
    }
  ] as Project[],

  research: {
    paper: {
      title: 'RS-CHAF-Net: Relevance-Score-Based Hierarchical Bangla News Classification',
      subtitle: 'Noise-Robust Hierarchical Text Classification with Pretrained Transformer Backbones',
      authors: ['Saiduzzaman Horof'],
      institution: 'Hamdard University Bangladesh',
      description: 'My research interests focus on Bangla Natural Language Processing, transformer-based language models, relevance-aware learning, hierarchical text classification, and noise-robust machine learning.',
      abstract: 'Bangla text classification in real-world news journalism faces substantial bottlenecks owing to multi-topic overlapping, linguistic nuances, and colloquial editorial noise. RS-CHAF-Net introduces a unified framework combining relevance-score prediction with hierarchical label propagation over BanglaBERT representations. By calibrating loss weights against predicted content relevance, the model attenuates noisy passages while maintaining high categorical fidelity.',
      interests: [
        'Bangla Natural Language Processing',
        'Bangla News Classification',
        'BanglaBERT',
        'Transformer-Based Models',
        'Explainable Artificial Intelligence',
        'Deep Learning Architectures',
        'Noise-Robust Learning'
      ],
      methodologySteps: [
        {
          step: '01',
          title: 'Bangla Text Preprocessing & Tokenization',
          detail: 'Sentence extraction, Unicode normalization, Bengali punctuation standardization, and subword tokenization via BanglaBERT vocabulary.'
        },
        {
          step: '02',
          title: 'Relevance-Score Estimation Engine',
          detail: 'An auxiliary feed-forward network evaluates topical salience to compute instance-level relevance weights, diminishing the influence of noisy sentences.'
        },
        {
          step: '03',
          title: 'Deep Transformer Contextual Representation',
          detail: '12-layer multi-head self-attention maps contextual embeddings across long-range Bengali news articles.'
        },
        {
          step: '04',
          title: 'Hierarchical Classification & Calibration',
          detail: 'Top-level broad domains (e.g., Politics, Economics, Sports) propagate latent features down to fine-grained sub-categories with uncertainty estimation.'
        }
      ],
      bibtexKey: 'horof2026rschaf'
    } as ResearchPaper
  },

  education: {
    institution: 'Hamdard University Bangladesh',
    campus: 'Hamdard Nagar, Gazaria, Munshiganj, Bangladesh',
    department: 'Department of Computer Science & Engineering',
    degree: 'Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)',
    status: 'Undergraduate Studies · Currently Studying',
    coreSubjects: [
      'Data Structures & Algorithms',
      'Artificial Intelligence',
      'Machine Learning Foundations',
      'Database Management Systems',
      'Object Oriented Programming (C++, Java)',
      'Operating Systems & System Architecture',
      'Discrete Mathematics & Formal Automata',
      'Computer Networks & Distributed Systems'
    ],
    academicFocus: 'Concentrating on machine learning, natural language processing for low-resource languages, and software engineering principles.'
  },

  vision: {
    heading: 'MY VISION',
    quote: 'My goal is to become a skilled AI Engineer and Software Developer, contribute to meaningful research, build innovative applications, and use technology to solve real-world challenges.',
    pillars: [
      {
        number: '01',
        title: 'Build Intelligent Solutions',
        description: 'Engineering resilient, scalable software systems powered by intelligent machine learning models that solve practical human problems.',
        icon: 'Cpu'
      },
      {
        number: '02',
        title: 'Contribute to AI Research',
        description: 'Advancing research in Natural Language Processing and deep learning, particularly for low-resource languages such as Bengali.',
        icon: 'Sparkles'
      },
      {
        number: '03',
        title: 'Create Meaningful Technology',
        description: 'Developing applications with human-centered empathy, high ethical standards, and accessible digital experiences that empower communities.',
        icon: 'Compass'
      }
    ]
  }
};
