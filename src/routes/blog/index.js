import { h, Component } from 'preact';
import style from './style';
import Menu from '../../components/menu'

export default () =>
	<section class={style.blog}>
		
		{Menu('blog')}
	</section>