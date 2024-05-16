import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Darling in the Franxx",
    img: "/v0.jpeg",
    desc: "Darling in the Franxx is a 2018 Japanese science fiction monster romance anime series about artificially-created children who pilot giant robots to defend humanity from monstrous creatures.",
    link:"https://www.crunchyroll.com/series/GY8VEQ95Y/darling-in-the-franxx"
  },
  {
    id: 2,
    title: "The Beast and the Prince",
    img: "/v1.jpeg",
    desc: "The first volume of the manga “Darling in the Franxx” introduces the main characters, Hiro and Zero Two, who are pilots of giant robots called Franxx in a post-apocalyptic world where humanity is threatened by monstrous creatures called klaxosaurs.",
    link:"https://www.amazon.com/Darling-Franxx-Vol-1-Shueisha/dp/4088814541/ref=sr_1_6?keywords=Darling+in+the+FranXX+Manga&qid=1705332666&sr=8-6"

  },
  {
    id: 3,
    title: "The Future You",
    img: "/v2.jpeg",
    desc: "The second volume of the manga “Darling in the Franxx” continues the story of Hiro and Zero Two, who struggle to overcome their differences and form a bond as they fight against the klaxosaurs.",
    link:"https://www.amazon.com/Darling-Franxx-Vol-2-Shueisha/dp/4088814932/ref=sr_1_14?keywords=Darling+in+the+FranXX+Manga&qid=1705332666&sr=8-14"

  },
  {
    id: 4,
    title: "The Garden Where It All Began",
    img: "/v3.jpeg",
    desc: "The third volume of the manga “Darling in the Franxx” shows how Squad 13 is sent back to the Garden for testing and how they encounter the mysterious Nine Alpha, who reveals some secrets about Zero Two and the parasites.",
    link:"https://www.amazon.com/Darling-Franxx-Spanish-Kentaro-Yabuki/dp/8418963026/ref=sr_1_17?keywords=Darling+in+the+FranXX+Manga&qid=1705332666&sr=8-17"

  },
  {
    id: 5,
    title: "The Great Crevasse Battle",
    img: "/v4.jpeg",
    desc: "The fourth volume of the manga “Darling in the Franxx” covers the events of the battle at the Great Crevasse, where Squad 13 faces a massive horde of klaxosaurs and Hiro and Zero Two confront their past.",
    link:"https://www.amazon.com/Darling-Franxx-Vol-4-Kentaro-Yabuki/dp/4088817524/ref=sr_1_1?crid=12SLY72FMZF3D&keywords=Darling+in+the+FranXX+Manga+4&qid=1705332946&sprefix=darling+in+the+franxx+manga%2Caps%2C405&sr=8-1"

  },
  {
    id: 6,
    title: "The World I Dreamt Of",
    img: "/v5.jpeg",
    desc: "The fifth volume of the manga “Darling in the Franxx” depicts the aftermath of the battle at the Crevasse, where Squad 13 learns more about the world outside the Plantations and Hiro and Zero Two grow closer.",
    link:"https://www.amazon.com/Darling-Franxx-5-Kentaro-Yabuki/dp/8418963999/ref=sr_1_16?keywords=Darling+in+the+FranXX+Manga&qid=1705332666&sr=8-16"

  },
  {
    id: 7,
    title: "The Truth About Zero Two",
    img: "/v6.jpeg",
    desc: "The sixth volume of the manga “Darling in the Franxx” reveals the past of Zero Two, how she met Hiro as a child, and how she became a human-like hybrid.",
    link:"https://www.amazon.com/Darling-Franxx-6-Kentaro-Yabuki/dp/8419010669/ref=sr_1_20?keywords=Darling+in+the+FranXX+Manga&qid=1705332666&sr=8-20"

  },
  {
    id: 8,
    title: "The Saviors’ Duty",
    img: "/v7.jpeg",
    desc: "The seventh volume of the manga “Darling in the Franxx” follows Squad 13 as they infiltrate the Garden, where they were raised as children, and discover the truth about their origins and purpose.",
    link:"https://www.amazon.com/Darling-Franxx-7-Kentaro-Yabuki/dp/8419096210/ref=sr_1_10?keywords=Darling+in+the+FranXX+Manga&qid=1705332666&sr=8-10"

  },
  {
    id: 9,
    title: "The Beginning of the End",
    img: "/v8.jpeg",
    desc: "It ends with Hiro and Zero Two defeating the Star Entity, a giant klaxosaur bomb, and returning to Earth to reunite with their friends.",
    link:"https://www.amazon.com/Darling-Franxx-8-Kentaro-Yabuki/dp/841909675X/ref=sr_1_13?keywords=Darling+in+the+FranXX+Manga&qid=1705332666&sr=8-13"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}><button>Check Out</button></a>
          </motion.div>
        </div>
      </div>
    <motion.footer className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        color: 'pink',
        textAlign: 'center',
        padding: '10px',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <p>
        "Darling in the Franxx" Fan Page &copy; {new Date().getFullYear()} | by devankitmishra
      </p>
    </motion.footer>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Anime & Manga</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
    
  );
  
};


export default Portfolio;