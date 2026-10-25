export interface ProfileData {
  name: string;
  badge: string;
  headline: string;
  supportingText: string;
  aboutHeading: string;
  aboutText: string[];
  education: {
    degree: string;
    institution: string;
    affiliation: string;
    interests: string;
    focus: string;
  };
  location: string;
  email: string;
  github: string;
  linkedin: string;
  credly: string;
  leetcode: string;
  hackerrank: string;
  instagram?: string;
  resumeUrl: string | null;
}

export const PROFILE: ProfileData = {
  name: 'Priyansh Singh',
  badge: 'ECE STUDENT · DEVELOPER · BUILDER',
  headline: 'Building at the intersection of software, electronics, and intelligent systems.',
  supportingText:
    "I'm an Electronics and Communication Engineering student exploring software engineering, IoT, robotics, cybersecurity, and AI-powered products. I enjoy turning ideas into practical projects and learning by building.",
  aboutHeading: 'A little about me.',
  aboutText: [
    "I'm an Electronics and Communication Engineering undergraduate at Ajay Kumar Garg Engineering College, affiliated with AKTU.",
    "I'm part of the Phoenix technical society at my college, where I've helped organise technical events like RoboVerse, which saw participation from 200+ students. I'm also part of AI Skill House, an initiative by IICT × MIB × Google × YouTube, and a participant in GDG Code for Community 2.0.",
    "I have experience with C++, Python, web development, AI, IoT, and cybersecurity projects. I'm also a contributor in GSSoC 2026 and have participated in hackathons and CTF competitions. Through these experiences, I've developed teamwork, coordination, and problem-solving skills.",
    "I enjoy learning new technologies, connecting with people in the tech community, and helping organise events. I'm always willing to take responsibility, contribute wherever needed, and learn from others.",
  ],
  education: {
    degree: 'B.Tech, Electronics and Communication Engineering',
    institution: 'Ajay Kumar Garg Engineering College (AKGEC)',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    interests: 'Software engineering, IoT, robotics, AI, cybersecurity',
    focus: 'Building projects, improving development skills, and contributing to open source',
  },
  location: 'India',
  email: 'priyansh.singh019@gmail.com',
  github: 'https://github.com/priyansh019',
  linkedin: 'https://www.linkedin.com/in/priyansh019',
  credly: 'https://www.credly.com/users/priyansh19',
  leetcode: 'https://leetcode.com/u/priyxnsh19/',
  hackerrank: 'https://www.hackerrank.com/profile/priyansh_singh01',
  instagram: 'https://www.instagram.com/itspriyansh19',
  resumeUrl: null, // Set to '/documents/resume.pdf' when real PDF is placed in public
};
