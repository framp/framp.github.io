import { h, Component } from 'preact';
import style from './style';
import Menu from '../../components/menu'

const github = <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
<rect fill="#111" height="512" rx="15%" width="512"/>
<path d="m119 255c17 30 49 48 102 53-8 6-17 17-18 30-10 6-29 8-44 3-21-7-29-48-61-42-7 1-6 6 0 10 10 6 21 16 26 30 12 31 37 39 77 33v45c0 14-20 18-20 25 0 3 7 3 12 3 10 0 32-9 32-23 0-12 0-52 1-59 0-15 8-20 8-20s1 82-2 92c-4 13-10 11-10 17 0 9 26 2 35-17 7-15 4-95 3-94h7s0 37 1 53c0 17-1 39 9 50 7 7 29 19 29 8 0-6-12-12-12-29v-79c10 0 8 26 8 26l1 48s-2 18 19 25c8 3 24 3 25-1s-20-11-20-25v-49c0-36-5-49-22-60 53-5 86-18 102-53 10-20 12-44 12-62 0-50-24-67-29-76 7-38-1-55-5-60-14-5-48 12-66 24-30-9-94-8-118 2-44-31-67-26-67-26s-15 27-4 66c-15 18-25 31-26 65 0 27 3 44 15 67z" fill="#fff"/>
</svg>

const linkedin = <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff">
<rect width="512" height="512" rx="15%" fill="#111"/>
<circle cx="104" cy="104" r="48"/>
<path d="m237 178v259m-133-259v259" stroke="#fff" stroke-width="86"/>
<path d="m279 293c0-26 18-53 48-53 31 0 43 24 43 59v138h86v-148c0-80-42-116-99-116-45 0-67 25-78 42"/>
</svg>

const mail = <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#111">
<rect width="512" height="512" rx="15%"/>
<rect x="56" y="111" width="400" height="290" rx="44" fill="#fff"/>
<path d="m89 148h334v216h-334"/>
<path d="m437 158-157 136c-16 14-32 14-48 0l-157-136m349 206-105-105m-231 105 107-107" fill="none" stroke="#fff" stroke-width="24"/>
</svg>

const twitter = <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
<rect fill="#111" height="512" rx="15%" width="512"/>
<path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" fill="#fff"/>
</svg>

const whatsapp = <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
<rect fill="#111" height="512" rx="15%" width="512"/>
<path d="m456 251a196 196 0 0 1 -291 170l-109 35 35-105a196 196 0 0 1 168-295c109 0 197 87 197 195zm-196-164c-91 0-165 74-165 164 0 36 11 69 31 96l-21 61 64-20a165 165 0 0 0 256-137c0-90-74-164-165-164zm99 209c-1-2-5-3-9-6l-33-15c-5-2-8-3-11 2l-15 19c-3 3-6 3-11 1s-20-8-39-24c-14-12-24-28-26-33-3-5-1-7 2-10l7-8 5-8c1-3 1-6-1-8l-14-36c-4-9-8-8-11-8h-9c-4 0-9 1-13 6-5 5-17 16-17 40 0 23 17 46 19 49 3 3 34 53 83 72s49 13 57 12c9-1 29-11 33-23 4-11 4-20 3-22z" fill="#fff" fill-rule="evenodd"/>
</svg>

export default () =>
	<section class={style.homepage}>
		<div class={style.container}>
			<h1 class={style.title}>FRAMP</h1>
			<h2 class={style.subtitle}><span class={`${style.location} ${style.invisible}`}>LONDON</span> Federico Rampazzo <span class={style.location}>LONDON</span></h2>
			<div>
				<a href="mailto:hi@framp.me?Subject=Hi+Framp">{mail}</a>
				<a href="https://github.com/framp">{github}</a>
				<a href="https://uk.linkedin.com/in/framp">{linkedin}</a>
				<a href="https://twitter.com/framp">{twitter}</a>
				<a href="https://api.whatsapp.com/send?phone=447821814477">{whatsapp}</a>
			</div>
		</div>
		{Menu()}
	</section>