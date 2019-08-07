import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";
import { mail, github, linkedin, phone } from "../../components/social";

class PreloadedAvatar extends Component {
  componentDidMount() {
    const img = new Image();
    img.src =
      "http://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=280";
    img.onload = () => {
      this.setState({ loaded: true });
    };
  }
  render() {
    return (
      <div class={`${style.avatar} ${this.state.loaded ? style.loaded : ""}`} />
    );
  }
}

export default () => (
  <section class={style.contact}>
    <div class={style.container}>
      <PreloadedAvatar />
      <h1 class={style.title}>FRAMP</h1>
      <h2 class={style.subtitle}>
        <span class={`${style.location} ${style.invisible}`}>LONDON</span>{" "}
        Federico Rampazzo <span class={style.location}>LONDON</span>
      </h2>
      <div class={style.social}>
        <a href="mailto:hi@framp.me?Subject=Hi+Framp">{mail}</a>
        <a href="https://github.com/framp">{github}</a>
        <a href="https://uk.linkedin.com/in/framp">{linkedin}</a>
        <a href="tel:+447821814477">{phone}</a>
      </div>
    </div>
    {Menu(["blog", "experience", "projects"], "contact")}
  </section>
);
