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
} from "../../components/pictures";

const projects = [
  {
    name: "Frappe",
    description: "A library for defining UI components based on time and events",
    image: frappe,
    link: "http://framp.me/frappe"
  },
  {
    name: "Paillier in set ZKP",
    description:
      "Generates a Zero Knowledge Proof that an encrypted value is in a set of known values",
    image: lock,
    link: "https://github.com/framp/paillier-in-set-zkp"
  },
  {
    name: "Sudoku",
    description: "A sudoku UI written in elm",
    image: sudoku,
    link: "http://framp.me/sudoku"
  },
  {
    name: "Storry",
    image: database,
    description:
      "A state management library, almost drop-in replacement for redux's boilerplate",
    link: "https://github.com/framp/storry"
  },
  {
    name: "Joi Tester",
    description: "A tool to validate Joi schemas online written in vue.js",
    image: code,
    link: "http://framp.me/joi-tester"
  },
  {
    name: "Timetabling",
    description: "A genetic algorithm to solve one of the timetabling problem",
    image: calendar,
    link: "https://github.com/framp/timetabling-solver"
  },
  {
    name: "Fontina",
    description: "An old module to generate @font-face ready fonts",
    image: fontina,
    link: "http://framp.me/fontina"
  },
  {
    name: "Portfolio",
    description: "An old jQuery-based 3d book with flippable pages",
    image: book,
    link: "http://framp.me/portfolio"
  },
  {
    name: "Say Something",
    description:
      "A serverless desktop-only tool to create and share powerful messages",
    image: bubble,
    link: "http://framp.me/say-something"
  }
];

export default () => (
  <section class={style.projects}>
    <div class={style.wall}>
      <div class={style.container}>
        <div class={style.artworks}>
          {projects.map(project => (
            <a href={project.link} target="_blank">
              {artwork(project.image)}
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
