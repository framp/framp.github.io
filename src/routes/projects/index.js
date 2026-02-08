import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";
import {
  lamp,
  sofa,
  table,
  gramophone,
  artwork
} from "../../components/furniture";
import {
  calendar,
  sudoku,
  fontina,
  code,
  bubble,
  database,
  book,
  frappe,
  lock,
  brainBookshelf,
  robotBookshelf,
  fpBookshelf,
  catBookshelf,
  monsterBookshelf,
  microphone,
  imageEdit,
  chartMoney,
  brainsBookshelf,
  videoPlay,
  sunMoon,
  gamepad,
  faceAnimation
} from "../../components/pictures";

const projects = [
  {
    type: "gap"
  },
  {
    name: "Transformers Internals",
    type: "shelf",
    description: "A presentation on the internals of transformer neural networks",
    image: brainsBookshelf,
    link: "https://github.com/framp/transformers-internals-presentation",
  },
  {
    name: "Qwen TTS UI",
    type: "frame",
    description: "Voice cloning & talking avatar video generator with Qwen TTS",
    image: microphone,
    link: "https://github.com/apiplant/qwen-tts-ui",
  },
  {
    name: "AIBox Image",
    type: "frame",
    description: "AI-powered image editing with inpainting, face swapping, and upscaling",
    image: imageEdit,
    link: "https://github.com/apiplant/aibox-image",
  },
  {
    name: "Financial Dashboard",
    type: "frame",
    description: "Interactive financial dashboard with dynamic formulas and sliders",
    image: chartMoney,
    link: "https://framp.me/financials-open/"
  },
  {
    name: "Insta Baka Mitai",
    type: "frame",
    description: "Deepfake face animation using First Order Motion Model",
    image: faceAnimation,
    link: "https://github.com/framp/insta-baka-mitai",
  },
  {
    name: "Day Night Toggle",
    type: "frame",
    description: "An animated day/night toggle switch with pure CSS",
    image: sunMoon,
    link: "https://framp.me/day-night-toggle/"
  },
  {
    name: "Joystick Mapper",
    type: "frame",
    description: "Rust library for transforming joystick input to keyboard keys and mouse actions",
    image: gamepad,
    link: "https://github.com/framp/joystick-mapper",
  },
  {
    name: "YT Transcribe & Summarize",
    type: "shelf",
    description: "Download YouTube transcripts and summarize with local LLM",
    image: videoPlay,
    link: "https://github.com/framp/youtube-transcribe-summarize",
  },
  {
    name: "Frappe",
    type: "frame",
    description:
      "A library for defining UI components based on time and events",
    image: frappe,
    link: "http://framp.me/frappe"
  },
  {
    name: "Paillier in set ZKP",
    type: "frame",
    description:
      "Generates a Zero Knowledge Proof that an encrypted value is in a set of known values",
    image: lock,
    link: "https://github.com/framp/paillier-in-set-zkp"
  },
  {
    name: "Zero Knowledge Proofs in node.js",
    type: "shelf",
    description:
      "A presentation on Zero Knowledge Proofs with a focus on node.js",
    image: robotBookshelf,
    link: "https://framp.me/zero-knowledge-node/"
  },
  {
    name: "Sudoku",
    type: "frame",
    description: "A sudoku UI written in elm",
    image: sudoku,
    link: "http://framp.me/sudoku"
  },
  {
    name: "Storry",
    type: "frame",
    image: database,
    description:
      "A state management library, almost drop-in replacement for redux's boilerplate",
    link: "https://github.com/framp/storry"
  },
  {
    name: "Use your coworkers' brain",
    type: "shelf",
    description:
      "A presentation about leadership and pushing responsibility down",
    image: brainBookshelf,
    link: "https://framp.me/use-your-coworkers-brain/#/0?presenter&timer"
  },
  {
    name: "Joi Tester",
    type: "frame",
    description: "A tool to validate Joi schemas online written in vue.js",
    image: code,
    link: "http://framp.me/joi-tester"
  },
  {
    type: "gap"
  },
  {
    name: "Timetabling",
    type: "frame",
    description: "A genetic algorithm to solve one of the timetabling problem",
    image: calendar,
    link: "https://github.com/framp/timetabling-solver"
  },
  {
    name: "FP Workshop",
    type: "shelf",
    description: "A workshop about Functional Programming",
    image: fpBookshelf,
    link: "https://github.com/framp/fp-workshop"
  },
  {
    name: "Fontina",
    type: "frame",
    description: "An old module to generate @font-face ready fonts",
    image: fontina,
    link: "http://framp.me/fontina"
  },
  {
    name: "Profunctors",
    type: "shelf",
    description: "A presentation about profunctors",
    image: catBookshelf,
    link: "https://github.com/framp/profunctors"
  },
  {
    name: "Portfolio",
    type: "frame",
    description: "An old jQuery-based 3d book with flippable pages",
    image: book,
    link: "http://framp.me/portfolio"
  },
  {
    name: "Monads",
    type: "shelf",
    description: "A presentation about monads",
    image: monsterBookshelf,
    link: "https://github.com/framp/monads"
  },
  {
    name: "Say Something",
    type: "frame",
    description:
      "A serverless desktop-only tool to create and share powerful messages",
    image: bubble,
    link: "http://framp.me/say-something"
  }
];

const objects = {
  frame: artwork,
  shelf: image => image,
  gap: () => null
};

export default () => (
  <section class={style.projects}>
    <div class={style.wall}>
      <div class={style.container}>
        <h1>
          Projects<span class={style.mobileHidden}> &amp; Talks</span>
        </h1>
        <div class={style.artworks}>
          {projects.map(project => (
            <a href={project.link} target="_blank">
              {objects[project.type](project.image)}
              <h3>
                {project.name}
              </h3>
              <p class={project.type === 'gap' ? style.mobileHidden : ''}>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
      {gramophone}
      {sofa}
      {table}
      {lamp}
    </div>
    {Menu(["contact"], "projects")}
  </section>
);
