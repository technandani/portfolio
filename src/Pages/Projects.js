import React, { useState } from "react";

const Project = [
  {
    projectId: 1,
    Title: "Dreamify: AI Image Generator",
    description:
      "Dreamify is an image generation platform where users can create stunning visuals by providing prompts. Explore, post your own creations, and discover a vibrant community sharing inspiring images.",
    img: "images/Dreamify.png",
    repo: "https://github.com/technandani/Dreamify",
    type: "web",
    view: "https://dreamify-sigma.vercel.app/",
    techStack: ["React js", "Express js", "MongoDB"],
  },
  {
    projectId: 2,
    Title: "E-commerce",
    description:
      "Developed a personalized e-commerce platform, 'Senh Sangrah,' with browsing, shopping, cart, and wishlist functionalities. Enabled user authentication and shop creation for sellers.",
    img: "images/SenhSangrah.png",
    repo: "https://github.com/technandani/e-commerce",
    type: "php",
    view: "https://youtu.be/3jh1oqnANUI",
    techStack: ["PHP", "MySQL"],
  },
  {
    projectId: 3,
    Title: "Queto app",
    description:
      "Implemented a dynamic quote management system with features like search, filter, and add quotes functionality. Integrated form validation, and state management to ensure smooth user experience and efficient backend operations.",
    img: "images/dailyQuote.jpg",
    repo: "https://github.com/technandani/QuoteAPI",
    type: "web",
    view: "https://quote-api-frontend-lt1d.vercel.app/",
    techStack: ["React js", "Express js","REST API", "MongoDB"],
  },
  {
    projectId: 4,
    Title: "FreshBeatsLaundry",
    description:
      "A laundry service web app where customers can select and book services. Integrated Email.js to notify the owner of bookings, ensuring efficient communication and service management.",
    img: "images/12.png",
    repo: "https://github.com/technandani/LaundryService",
    type: "web",
    view: "https://technandani.github.io/LaundryService/",
    techStack: ["HTML", "CSS", "JavaScript", "Email js"],
  },
  {
    projectId: 5,
    Title: "Sneaker Selling Store",
    description:
      "Developed a dynamic shoe store using React Context API for state management, featuring cart management and a 'Proceed to Payment' button for future integration.",
    img: "images/shoe.png",
    repo: "https://github.com/technandani/task24",
    type: "web",
    view: "https://task24-qr7h.vercel.app/",
    techStack: ["React js"],

  },
  {
    projectId: 6,
    Title: "EchoTune",
    description:
      "Developed a music app with interactive features like playlists and playback controls.",
    img: "images/music.jpg",
    repo: "https://github.com/technandani/Music_App",
    type: "web",
    view: "https://music-app-ashy-one.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    projectId: 7,
    Title: "ClimaCast",
    description:
      " Built a weather app providing real-time weather information with forecasts up to 1 week ahead",
    img: "images/weather.png",
    repo: "https://github.com/technandani/Weather-app",
    type: "web",
    view: "https://weather-app-peach-one-84.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript", "APIs"],
  },
  {
    projectId: 8,
    Title: "Kabadi Connect",
    description:
    "KabadiConnect is your go-to platform for eco-friendly scrap management, connecting users with trusted local rag pickers for responsible and sustainable disposal of scrap materials. Experience efficient and reliable service for all your scrap management needs.",
    img: "images/5.png",
    repo: "https://github.com/technandani/-KabadiConnect",
    type: "php",
    view: "https://drive.google.com/file/d/1iIvNhVSHkcb7xuZPn_OoZw03Tu2z_Qc5/view",
    techStack: ["PHP", "MySQL"],
  },
  {
    projectId: 9,
    Title: "NutriEase (UI/UX Design)",
    description:
      " Created a user-friendly app combining nutrition tracking, meal planning, and subscription features for a restaurant. Focused on seamless user experience and functionality to enhance meal plan management.",
    img: "images/11.jpeg",
    repo: "",
    type: "UI/UX",
    view: "https://www.behance.net/gallery/201137863/NutriEase",
    techStack: ["Figma"],
  },
  {
    projectId: 10,
    Title: "Image Generator UI",
    description:
      "AI image generator app UI design, effortlessly converting text prompts into captivating images.",
    img: "images/Dreamify.png",
    repo: "",
    type: "UI/UX",
    view: "https://www.behance.net/gallery/211666459/Dreamify-AI-Image-Generator-UI-Design",
    techStack: ["Figma"],
  },
  {
    projectId: 11,
    Title: "NFT-UI",
    description:
      "The NFT-UI Project, developed for the Upskill Mafia Weekly Group Project, features a sleek, user-friendly interface for NFT interactions, with light and dark mode options and responsive design for an optimal experience on desktop and mobile devices.",
    img: "images/6.png",
    repo: "https://github.com/technandani/NFT_Project",
    type: "web",
    view: "https://friendly-seahorse-582b31.netlify.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  
  {
    projectId: 12,
    Title: "Alabay UI Design",
    description:
    "A simple and clean React-based interface for the Central Asian Shepherd Dog community, designed to connect dog lovers and share valuable information.",
    img: "images/Alabay.png",
    repo: "https://github.com/technandani/dogSite",
    type: "web",
    view: "https://dog-site-xi.vercel.app/",
    techStack: ["React js"],
  },
  {
    projectId: 13,
    Title: "image Gallery",
    description:
      "This full-stack application allows users to upload image files via a React frontend, store metadata in a MongoDB database, and display uploaded images.",
    img: "images/imageUpload.jpg",
    repo: "https://github.com/technandani/FileUploadUsingMulter",
    type: "web",
    view: "https://multer-frontend.vercel.app/",
    techStack: ["React js", "Express js", "Cloudinary", "MongoDB"],
  },
  {
    projectId: 14,
    Title: "News Fetch Web App",
    description:
    "Developed a news web app using a custom useFetch hook to retrieve news from an API. Features include search filtering, news removal, and a 'Read More' option for viewing full articles.",
    img: "images/news.png",
    type: "web",
    repo: "",
    view: "",
    techStack: ["React js", "Fetch API"],
  },
  {
    projectId: 15,
    Title: "Portfolio UI",
    description:
      "Portfolio UI showcasing creative designs, transforming ideas into visually captivating digital experiences.",
    img: "images/port.jpg",
    repo: "",
    type: "UI/UX",
    view: "https://www.behance.net/gallery/212142291/Portfolio-UI-design",
    techStack: ["Figma"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [filter, setFilter] = useState("all");

  const filteredProjects = Project.filter((project) =>
    filter === "all" ? true : project.type === filter
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProjects >= filteredProjects.length ? 0 : prevIndex + visibleProjects
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - visibleProjects : prevIndex - visibleProjects
    );
  };

  return (
    <section className="ProjectSection ServicesSection" id="projects">
      <div className="mainSectionHeading">
        <h3>
          My <span>Projects</span>
        </h3>
      </div>
      <div className="servicesParagraph HeroParagraph">
        College and Side Projects for practice.
      </div>
      <div className="section2heading">
        <div className="sec2Btns">
          <div
            className={`sec2Btn btn1 ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </div>
          <div
            className={`sec2Btn btn2 ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web
          </div>
          <div
            className={`sec2Btn btn3 ${filter === "php" ? "active" : ""}`}
            onClick={() => setFilter("php")}
          >
            PHP
          </div>
          <div
            className={`sec2Btn btn3 ${filter === "UI/UX" ? "active" : ""}`}
            onClick={() => setFilter("UI/UX")}
          >
            UI/UX
          </div>
        </div>
      </div>

      <div className="serviceLowerContainer projectContainer">
        <div className="ProjectSlideIcon phoneHide" onClick={handlePrev}>
          <span>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </div>

        <div className="projectCards">
          {filteredProjects.slice(currentIndex, currentIndex + visibleProjects).map((Data) => (
            <div className="projectCard" key={Data.projectId} style={{ flex: "1 1 30%" }}>
              <div className="projectCardtop">
                <div className="ProjectImage">
                  <img src={Data.img} alt={Data.Title} height="60px" />
                </div>
              </div>
              <div className="projectCardMid">
                <div className="ProjectHeading">{Data.Title}</div>
                <div className="ProjectParagraph">
                  {Data.description}
                </div>
              </div>
              {/* <div className="projectCardSecMid">
                {Data.techStack.map((tech, index) => (
                  <div key={index} className="projectTechList">
                    {tech}
                  </div>
                ))}
              </div> */}
              <div className="projectCardBottom">
                <a href={Data.view}>
                  <button className="projectLeftBtn">View</button>
                </a>
                <a href={Data.repo}>
                  <button className="projectRightBtn">Github Repo</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="ProjectSlideIcon phoneHide" onClick={handleNext}>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
      {visibleProjects < Project.length && (
        <div className="seeMore laptopHide" onClick={() => setVisibleProjects((prev) => prev + 3)}>
          See More <img src="images/send.png" alt="" style={{height:"20px", width:"auto"}} />
        </div>
      )}
    </section>
  );
};

export default Projects;
