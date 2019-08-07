import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";

export default () => (
  <section class={style.experience}>
    <div class={style.container}>
      <h2>
        work in progress <i>noun</i>
      </h2>
      <p>
        <i>noun</i>: work in progress;
      </p>
      <p>
        <i>plural noun</i>: works in progress
      </p>
      <ul>
        <li>
          an unfinished project that is still being added to or developed.
          <quote>"the book itself is still a work in progress"</quote>
        </li>
        <li>
          (in accounting) the total value of the materials and labour for
          unfinished projects.
          <quote>
            "the board had estimated the value of its work in progress as
            £6,145"
          </quote>
        </li>
      </ul>
    </div>
    {Menu(["contact"], "experience")}
  </section>
);
