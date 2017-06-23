import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default () =>
	<div class={style.menu}>
		<nav class={style.navigation}>
			<div class={style.container}>
				<ul>
					<li class={style.active}><a>Contact</a></li>
					<li class={style.blue}><a href="/past">Experience</a></li>
					<li class={style.red}><a href="/present">Things I like</a></li>
					<li class={style.green}><a href="/future">Goals</a></li>
				</ul>
			</div>
		</nav>
	</div>