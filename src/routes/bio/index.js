import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";

export default () => (
  <section class={style.bio}>
    <svg class={style.grass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax slice">
      <path d="M0,45 Q120,35 240,42 T480,45 T720,38 T960,43 T1200,40 T1440,45 L1440,120 L0,120 Z" fill="#16a085"/>
      <path d="M0,58 Q100,50 200,56 T400,60 T600,54 T800,58 T1000,55 T1200,58 T1440,60 L1440,120 L0,120 Z" fill="#2ecc71" opacity="0.8"/>
      <path d="M0,72 Q80,66 160,71 T320,75 T480,70 T640,74 T800,72 T960,75 T1120,72 T1280,74 T1440,75 L1440,120 L0,120 Z" fill="#16a085" opacity="0.6"/>
    </svg>
    <div class={style.container}>
      <h1>Bio</h1>

      <p>
        In 2005 I became self-aware and started hacking. I learned C++ and AutoIt to write desktop applications; I then moved to the web with PHP and JS. I started a few communities around security and programming and started experimenting with advertising revenue and selling software.
      </p>

      <p>In 2007 I decided to leave hacking behind and focus entirely on &nbsp; <a href="https://www.freelancer.com/u/framp" target="_blank">freelancing</a>. Eventually I was able to grow a pool of repeated customers and stop competing with developers from LCOL countries. Through countless iterations, the prototype of an API creation framework was born - which would then turn into &nbsp; <a href="https://apiplant.com" target="_blank">APIPlant</a>.</p>

      <p>
        While freelancing, I jumped on the node.js bandwagon and I started building products, until &nbsp; <a href="https://freedsound.com/" target="_blank">one</a> became successful enough to pay all my expenses. In 2013, I decided to pursue bigger goals: I co-founded &nbsp; <a href="https://zensuite.framp.me/" target="_blank">a startup</a> and moved to London to recruit a team.
      </p>

      <p>
        In 2015, many lessons later, we ran out of money. I got disillusioned with the startup world and started offering my services to the world once more. I then ventured in the corporate and startup world, putting some notches on my career.
        I started playing around with Machine Learning and exploring a new promising language, Rust.
      </p>

      <p>
        After adding a few more products under the &nbsp; <a href="https://apiplant.com" target="_blank">APIPlant</a> umbrella, in 2021 I decided I had enough of the rainy weather and high taxes - and moved to Paphos, Cyprus.
      </p>

      <p>
        I didn't spend all my time at beach: I helped organize the &nbsp; <a href="https://cdc.cy/" target="_blank">Cyprus Developers Community</a> and started a &nbsp; <a href="https://cyprusrust.org" target="_blank">Rust User Group</a>.
        With the boom of AI, I started working entirely on Generative AI projects, splitting my time between building chat assistants with RAG and generating video and audio.
      </p>

      <p>
        Will this newfound experience turn into a new product? To be continued...
      </p>
    </div>
    {Menu(["contact"], "bio")}
  </section>
);
