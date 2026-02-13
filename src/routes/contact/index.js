import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";
import { mail, github, linkedin, phone, x } from "../../components/social";

class PreloadedAvatar extends Component {
  state = {
    messageVideo: null,
    showMessage: false,
    messageLoaded: false
  };

  msgOrder = [3, 2, 1, 4];
  msgIndex = 0;

  handleGenAI = () => {
    const msgNumber = this.msgOrder[this.msgIndex % 4];
    this.msgIndex++;
    this.setState({
      messageVideo: `/assets/videos/msg${msgNumber}.mp4`,
      messageLoaded: false
    });
  };

  onMessageLoaded = () => {
    this.setState({ showMessage: true, messageLoaded: true });
  };

  onMessageEnded = () => {
    this.setState({
      showMessage: false,
      messageLoaded: false
    });
    // Keep messageVideo for a moment to fade out smoothly
    setTimeout(() => {
      this.setState({ messageVideo: null });
    }, 300);
  };

  handleIdleClick = () => {
    if (!this.state.showMessage) {
      this.msgIndex++;
    }
  };

  render() {
    const { messageVideo, showMessage, messageLoaded } = this.state;
    return (
      <div class={style.avatarWrapper}>
        <video
          class={`${style.avatar} ${style.loaded}`}
          autoplay
          loop
          muted
          playsinline
          onClick={this.handleIdleClick}
        >
          <source src="/assets/videos/idle.mp4" type="video/mp4" />
        </video>
        {messageVideo && (
          <video
            key={messageVideo}
            class={`${style.avatar} ${style.loaded} ${style.messageVideo}`}
            autoplay
            playsinline
            onEnded={this.onMessageEnded}
            onLoadedData={this.onMessageLoaded}
            style={{ 
              opacity: showMessage && messageLoaded ? 1 : 0,
              visibility: showMessage && messageLoaded ? 'visible' : 'hidden'
            }}
          >
            <source src={messageVideo} type="video/mp4" />
          </video>
        )}
        {!showMessage && (
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
