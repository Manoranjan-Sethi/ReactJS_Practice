import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Call Of Duty Warzone",
      body: "Caldera is shifting. A new era of Call of Duty®: Warzone™ is upon us, but unfinished business remains on the island. Legendary villains have put their nefarious Doomsday Station plan into motion, and it is up to you to stop them and collect some last-minute loot.",
      author: "Ritvik",
      id: 1,
    },
    {
      title: "Bermuda Triangle",
      body: "The Bermuda Triangle, also known as the Devil's Triangle, is an urban legend focused on a loosely-defined region in the western part of the North Atlantic Ocean where a number of aircraft and ships are said to have disappeared under mysterious circumstances. The idea of the area as uniquely prone to disappearances arose in the mid-20th century, but most reputable sources dismiss the idea that there is any mystery",
      author: "Wiki-Bot",
      id: 2,
    },
    {
      title: "Valorant",
      body: "Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by an official release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.",
      author: "Kr$na",
      id: 3,
    },
    {
      title: "Mariana Trench",
      body: "While thousands of climbers have successfully scaled Mount Everest, the highest point on Earth, only two people have descended to the planet’s deepest point, the Challenger Deep in the Pacific Ocean Mariana Trench.Located in the western Pacific east of the Philippines and an average of approximately 124 miles (200 kilometers) east of the Mariana Islands, the Mariana Trench is a crescent-shaped scar in the Earth’s crust that measures more than 1,500 miles (2,550 kilometers) long and 43 miles (69 kilometers) wide on average.",
      author: "Wiki-Bot",
      id: 4,
    },
    {
      title: "React",
      body: "A JavaScript library for building user interfaces.React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started",
      author: "React-Bot",
      id: 5,
    },
    {
      title: "Node JS",
      body: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following 'hello world' example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.",
      author: "Node-Bot",
      id: 6,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Wiki-Bot")}
        title="Wiki Blogs!"
      />  resusable component */}
    </div>
  );
};

export default Home;
