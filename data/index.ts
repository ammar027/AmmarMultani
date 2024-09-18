import { profile } from "console";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start",
      img: "/b1Mac.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Innovating with JS libraries for interactive web experiences.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "NewsRadar",
      des: "A go-to source for the latest headlines and breaking news from around the world. Our mission is to provide up-to-date and relevant news coverage in various categories, including technology, business, science, and more.",
      img: "/p1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://ammars-newsradar.vercel.app/",
    },
    {
      id: 2,
      title: "iNotes",
      des: "iNotes is your personal note-taking companion, designed to simplify your life and help you stay organized. Whether it's for work, personal projects, or just jotting down random thoughts, iNotes is here to make note management easy and intuitive.",
      img: "/p2.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://ammars-inotes.vercel.app/",
    },
    {
      id: 3,
      title: "RenewNest: Ecom-web",
      des: "Discover RenewNest, your go-to destination for eco-friendly home goods and sustainable products. From stylish furniture to green cleaning solutions, we offer a curated selection of items designed to enhance your home while protecting the planet. Shop with us for quality, sustainability, and style.",
      img: "/p3.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://ecommerce-renewnest.vercel.app/",
    },
    {
      id: 4,
      title: "iPhone Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://ammars-iphone.vercel.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Ammar on our web development project was seamless. His ability to understand the technical requirements and translate them into functional, scalable solutions was impressive. His attention to detail ensured the project was delivered on time with top-notch quality.",
      name: "Keyur Surati",
      title: "Senior Lecturer, NAMTECH",
      profile: "/keyur.S.jpeg",
    },
    {
      quote:
        "Ammar played a pivotal role in enhancing our development process. His quick problem-solving skills and expertise in modern technologies helped streamline our project workflow. He consistently delivered beyond expectations, making him a valuable asset to any team.",
      name: "Adarsh Singh",
      title: "Lead Developer, Akiyam Solutions",
      profile: "/as.jpeg",
    },
    {
      quote:
        "Ammar's professionalism and enthusiasm for development are unparalleled. His ability to communicate complex ideas clearly and his dedication to delivering high-quality results stood out throughout the project. It was a pleasure collaborating with him, and I look forward to future partnerships.",
      name: "Shubham Singh",
      title: "CEO of Success, Innovative Technologies",
      profile: "/ss.jpeg",
    },
    {
      quote:
        "Ammar demonstrated an exceptional ability to work under pressure and meet tight deadlines without compromising quality. His technical skills and creative approach helped our team overcome multiple challenges. He’s a great team player and an even better developer.",
      name: "Vikram Yadav",
      title: "Senior Developer, Success Innovative Technologies",
      profile: "/vikram.Y.jpeg",
    },
    {
      quote:
        "Ammar's expertise in web development was instrumental in building our online presence. He delivered exactly what we envisioned, with attention to detail and professionalism throughout the project. His technical knowledge and proactive attitude made the process smooth and successful.",
      name: "Roheel M.",
      title: "Director, Exelligent Immigration Consultants",
      profile: "/rm.jpeg",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Success Innovative Technologies",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Senior WebDevloper Intern - Akiyam Solution",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Full stack devloper - Success Inovative Technologies",
      desc: "Designed Developed & Maintained web apps",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Designer/Devloper",
      desc: "Led the dev of a web app for a clients, from initial concept to deployment online.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/",  // GitHub URL
    },
    {
      id: 2,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/ammar-multani/",  // LinkedIn URL
    },
  ];
  