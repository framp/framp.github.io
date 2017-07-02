import { h, Component } from 'preact';
import style from './style';
import Menu from '../../components/menu'
import { lamp, sofa, table, gramophone, artwork } from '../../components/furniture'

export default () =>
	<section class={style.projects}>
		<div class={style.artworks}>
			{artwork}
  	</div>
		<div class={style.ground}>
			{gramophone}
			{sofa}
			{table}
			{lamp}
		</div>
  	<div class={style.floor} />
		{Menu('projects')}
	</section>