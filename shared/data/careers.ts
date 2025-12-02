export interface CareerBenefit {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const careerBenefits: CareerBenefit[] = [
  {
    id: "1",
    title: "Innovative Projects",
    description:
      "Work on cutting-edge technologies and meaningful projects that challenge your skills and foster creativity from concept to execution.",
  },
  {
    id: "2",
    title: "Professional Growth",
    description:
      "Gain mentorship, continuous learning, and hands-on experience that help you evolve both personally and professionally.",
  },
  {
    id: "3",
    title: "Transparency and Autonomy",
    description:
      "Enjoy a culture where every team member understands their responsibilities and contributes freely with trust and clarity.",
  },
  {
    id: "4",
    title: "Happiness",
    description:
      "Experience a positive and inclusive environment where your work is valued and your well-being is our priority.",
  },
  {
    id: "5",
    title: "Healthy Environment",
    description:
      "Work in a supportive, flexible, and collaborative setting designed to promote wellness and sustainable growth.",
  },
  {
    id: "6",
    title: "Experienced Benefits",
    description:
      "Grow your expertise with access to mentoring from senior professionals and opportunities to master new skills and technologies.",
  },
];

export const jobOpenings = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    location: "Surat, Gujarat",
    type: "Full-time",
    description:
      "We're looking for an experienced full stack developer with expertise in React, Node.js, and cloud technologies.",
  },
  {
    id: "2",
    title: "Mobile App Developer",
    location: "Surat, Gujarat",
    type: "Full-time",
    description:
      "Join our team to develop innovative mobile applications for iOS and Android platforms.",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    location: "Surat, Gujarat",
    type: "Full-time",
    description:
      "Create beautiful and intuitive user interfaces for our web and mobile applications.",
  },
];
