export type ThumbKind = "figma" | "icons" | "chart" | "focus" | "line" | "team";

export interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  category: string;
  thumb: ThumbKind;
}

export const courses: Course[] = [
  { id: "figma", title: "Learn Figma from Basic", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, category: "UI/UX Design", thumb: "figma" },
  { id: "assets", title: "Build Digital Asset", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, category: "Graphic Design", thumb: "icons" },
  { id: "bigdata", title: "the Power of Big Data", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, category: "Data Science", thumb: "chart" },
  { id: "focus", title: "Balancing Productivity and Life", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, category: "Productivity", thumb: "focus" },
  { id: "money", title: "Mastering Money Management", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, category: "Freelance & Entrepreneurship", thumb: "line" },
  { id: "startup", title: "From Idea to Startup Success", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, category: "Marketing", thumb: "team" },
];

export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design",
  "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship",
  "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

export const paths = ["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"] as const;

export const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", avatar: "https://i.pravatar.cc/120?img=47", quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", avatar: "https://i.pravatar.cc/120?img=33", quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", avatar: "https://i.pravatar.cc/120?img=12", quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
