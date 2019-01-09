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
  monsterBookshelf
} from "../../components/pictures";

const projects = [
  {
    name: "Frappe",
    type: "code",
    description:
      "A library for defining UI components based on time and events",
    image: frappe,
    link: "http://framp.me/frappe"
  },
  {
    name: "Paillier in set ZKP",
    type: "code",
    description:
      "Generates a Zero Knowledge Proof that an encrypted value is in a set of known values",
    image: lock,
    link: "https://github.com/framp/paillier-in-set-zkp"
  },
  {
    name: "Zero Knowledge Proofs in node.js",
    type: "presentation",
    description:
      "A presentation on Zero Knowledge Proofs with a focus on node.js",
    image: robotBookshelf,
    link: "https://framp.me/zero-knowledge-node/"
  },
  {
    name: "Sudoku",
    type: "code",
    description: "A sudoku UI written in elm",
    image: sudoku,
    link: "http://framp.me/sudoku"
  },
  {
    name: "Storry",
    type: "code",
    image: database,
    description:
      "A state management library, almost drop-in replacement for redux's boilerplate",
    link: "https://github.com/framp/storry"
  },
  {
    name: "Use your coworkers' brain",
    type: "presentation",
    description:
      "A presentation about leadership and pushing responsibility down",
    image: brainBookshelf,
    link: "https://framp.me/use-your-coworkers-brain/#/0?presenter&timer"
  },
  {
    name: "Joi Tester",
    type: "code",
    description: "A tool to validate Joi schemas online written in vue.js",
    image: code,
    link: "http://framp.me/joi-tester"
  },
  {
    name: "Timetabling",
    type: "code",
    description: "A genetic algorithm to solve one of the timetabling problem",
    image: calendar,
    link: "https://github.com/framp/timetabling-solver"
  },
  {
    name: "FP Workshop",
    type: "presentation",
    description: "A workshop about Functional Programming",
    image: fpBookshelf,
    link: "https://github.com/framp/fp-workshop"
  },
  {
    name: "Fontina",
    type: "code",
    description: "An old module to generate @font-face ready fonts",
    image: fontina,
    link: "http://framp.me/fontina"
  },
  {
    name: "Profunctors",
    type: "presentation",
    description: "A presentation about profunctors",
    image: catBookshelf,
    link: "https://github.com/framp/profunctors"
  },
  {
    name: "Portfolio",
    type: "code",
    description: "An old jQuery-based 3d book with flippable pages",
    image: book,
    link: "http://framp.me/portfolio"
  },
  {
    name: "Monads",
    type: "presentation",
    description: "A presentation about monads",
    image: monsterBookshelf,
    link: "https://github.com/framp/monads"
  },
  {
    name: "Say Something",
    type: "code",
    description:
      "A serverless desktop-only tool to create and share powerful messages",
    image: bubble,
    link: "http://framp.me/say-something"
  }
];

const objects = {
  code: artwork,
  presentation: image => image
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
              <h3>{project.name}</h3>
              <p>{project.description}</p>
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
