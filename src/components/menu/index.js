import { h, Component } from "preact";
import style from "./style";

const pages = {
  contact: ["/", "Framp"],
  bio: ["/bio", "bio"],
  projects: ["/projects", "Projects"]
};

export default (entries, active) => (
  <div class={`${style.menu} ${style[active]}`}>
    {entries.map(entry => (
      <a class={style[entry]} href={pages[entry][0]}>
        {pages[entry][1]}
      </a>
    ))}
  </div>
);
