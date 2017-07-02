import { h, Component } from 'preact';
import style from './style';
import Menu from '../../components/menu'
import { mail, github, linkedin, twitter, whatsapp } from '../../components/social'

export default () =>
	<section class={style.experience}>
		<div class={style.container}>
			<h1 class={style.title}>FRAMP</h1>
			<div class={style.social}>
				<a href="mailto:hi@framp.me?Subject=Hi+Framp">{mail}</a>
				<a href="https://github.com/framp">{github}</a>
				<a href="https://uk.linkedin.com/in/framp">{linkedin}</a>
				<a href="https://twitter.com/framp">{twitter}</a>
				<a href="https://api.whatsapp.com/send?phone=447821814477">{whatsapp}</a>
			</div>
		</div>
		{Menu('experience')}
	</section>