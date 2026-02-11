import { h, Component } from "preact";
import style from "./style";
import Menu from "../../components/menu";

export default () => (
  <section class={style.bio}>
    <svg class={style.cloud1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120">
      <ellipse cx="50" cy="60" rx="35" ry="28" fill="#3b96d2"/>
      <ellipse cx="95" cy="55" rx="48" ry="36" fill="#3b96d2"/>
      <ellipse cx="145" cy="60" rx="60" ry="48" fill="#3b96d2"/>
      <ellipse cx="185" cy="62" rx="45" ry="35" fill="#3b96d2"/>
      <ellipse cx="235" cy="68" rx="30" ry="24" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 85">
      <ellipse cx="30" cy="48" rx="24" ry="18" fill="#3b96d2"/>
      <ellipse cx="60" cy="42" rx="38" ry="28" fill="#3b96d2"/>
      <ellipse cx="95" cy="42" rx="48" ry="38" fill="#3b96d2"/>
      <ellipse cx="130" cy="48" rx="22" ry="16" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud3} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 110">
      <ellipse cx="42" cy="62" rx="32" ry="25" fill="#3b96d2"/>
      <ellipse cx="85" cy="55" rx="52" ry="38" fill="#3b96d2"/>
      <ellipse cx="135" cy="55" rx="58" ry="44" fill="#3b96d2"/>
      <ellipse cx="180" cy="62" rx="30" ry="24" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud4} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 90">
      <ellipse cx="32" cy="50" rx="26" ry="20" fill="#3b96d2"/>
      <ellipse cx="65" cy="45" rx="38" ry="28" fill="#3b96d2"/>
      <ellipse cx="100" cy="45" rx="50" ry="40" fill="#3b96d2"/>
      <ellipse cx="135" cy="48" rx="28" ry="22" fill="#3b96d2"/>
      <ellipse cx="160" cy="52" rx="22" ry="18" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud5} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 115">
      <ellipse cx="45" cy="65" rx="35" ry="28" fill="#3b96d2"/>
      <ellipse cx="95" cy="58" rx="55" ry="42" fill="#3b96d2"/>
      <ellipse cx="150" cy="58" rx="62" ry="48" fill="#3b96d2"/>
      <ellipse cx="200" cy="65" rx="32" ry="26" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud6} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 75">
      <ellipse cx="26" cy="44" rx="20" ry="15" fill="#3b96d2"/>
      <ellipse cx="52" cy="40" rx="32" ry="24" fill="#3b96d2"/>
      <ellipse cx="82" cy="38" rx="42" ry="32" fill="#3b96d2"/>
      <ellipse cx="112" cy="44" rx="20" ry="15" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud7} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90">
      <ellipse cx="35" cy="50" rx="28" ry="22" fill="#3b96d2"/>
      <ellipse cx="70" cy="45" rx="42" ry="32" fill="#3b96d2"/>
      <ellipse cx="110" cy="46" rx="52" ry="40" fill="#3b96d2"/>
      <ellipse cx="150" cy="50" rx="32" ry="25" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud8} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 70">
      <ellipse cx="28" cy="38" rx="22" ry="16" fill="#3b96d2"/>
      <ellipse cx="58" cy="35" rx="35" ry="26" fill="#3b96d2"/>
      <ellipse cx="95" cy="36" rx="38" ry="30" fill="#3b96d2"/>
      <ellipse cx="130" cy="40" rx="24" ry="18" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud9} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 95">
      <ellipse cx="40" cy="55" rx="30" ry="24" fill="#3b96d2"/>
      <ellipse cx="78" cy="50" rx="45" ry="35" fill="#3b96d2"/>
      <ellipse cx="125" cy="50" rx="58" ry="44" fill="#3b96d2"/>
      <ellipse cx="170" cy="54" rx="35" ry="28" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 68">
      <ellipse cx="26" cy="38" rx="24" ry="18" fill="#3b96d2"/>
      <ellipse cx="55" cy="35" rx="32" ry="24" fill="#3b96d2"/>
      <ellipse cx="90" cy="34" rx="40" ry="30" fill="#3b96d2"/>
      <ellipse cx="125" cy="38" rx="26" ry="20" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud11} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 88">
      <ellipse cx="38" cy="50" rx="32" ry="25" fill="#3b96d2"/>
      <ellipse cx="75" cy="45" rx="48" ry="36" fill="#3b96d2"/>
      <ellipse cx="120" cy="46" rx="55" ry="42" fill="#3b96d2"/>
      <ellipse cx="165" cy="50" rx="30" ry="24" fill="#3b96d2"/>
    </svg>
    <svg class={style.cloud12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 75">
      <ellipse cx="30" cy="42" rx="26" ry="20" fill="#3b96d2"/>
      <ellipse cx="62" cy="38" rx="38" ry="28" fill="#3b96d2"/>
      <ellipse cx="100" cy="38" rx="45" ry="34" fill="#3b96d2"/>
      <ellipse cx="140" cy="42" rx="28" ry="22" fill="#3b96d2"/>
    </svg>
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
