import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";
import { mail, github, linkedin, phone, x } from "../../components/social";

class PreloadedAvatar extends Component {
  componentDidMount() {
    const img = new Image();
    img.src =
      "https://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=280";
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
        Federico Rampazzo <span class={style.location}><span class={style.striked}>LONDON</span><br />PAPHOS</span>
      </h2>
      <div class={style.social}>
        <a href="mailto:hi@framp.me?Subject=Hi+Framp" target="_blank">{mail}</a>
        <a href="https://github.com/framp" target="_blank">{github}</a>
        <a href="https://linkedin.com/in/framp" target="_blank">{linkedin}</a>
        <a href="https://x.com/air_framp_one" target="_blank">{x}</a>
        <a href="tel:+35794041560" target="_blank">{phone}</a>
      </div>
    </div>
    {Menu(["projects", "bio"], "contact")}
  </section>
);
