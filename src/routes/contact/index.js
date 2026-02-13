import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";
import { mail, github, linkedin, phone, x } from "../../components/social";

class PreloadedAvatar extends Component {
  state = {
    currentVideo: "/assets/videos/idle.mp4",
    isIdle: true
  };

  msgOrder = [3, 2, 1, 4];
  msgIndex = 0;

  handleGenAI = () => {
    const msgNumber = this.msgOrder[this.msgIndex % 4];
    this.msgIndex++;
    this.setState({
      currentVideo: `/assets/videos/msg${msgNumber}.mp4`,
      isIdle: false
    });
  };

  onVideoEnded = () => {
    if (!this.state.isIdle) {
      this.setState({
        currentVideo: "/assets/videos/idle.mp4",
        isIdle: true
      });
    }
  };

  handleIdleClick = () => {
    if (this.state.isIdle) {
      this.msgIndex++;
    }
  };

  render() {
    const { currentVideo, isIdle } = this.state;
    return (
      <div class={style.avatarWrapper}>
        <video
          key={currentVideo}
          class={`${style.avatar} ${style.loaded}`}
          autoplay
          loop={isIdle}
          muted={isIdle}
          playsinline
          onEnded={this.onVideoEnded}
          onClick={this.handleIdleClick}
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
        {isIdle && (
          <button
            class={style.genaiButton}
            onClick={this.handleGenAI}
          >
            GenAI
          </button>
        )}
      </div>
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
      <a href="https://apiplant.com" target="_blank" rel="noopener noreferrer" class={style.ctaButton}>
        Hire me on APIPlant.com
      </a>
    </div>
    {Menu(["projects", "bio"], "contact")}
  </section>
);
