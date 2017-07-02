import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default (active) =>
		<div class={style.menu}>
			<a class={`${style.contact} ${active === 'contact' ? style.active : ''}`} href="/">Contact</a> 
			<a class={`${style.experience} ${active === 'experience' ? style.active : ''}`} href="/experience">Experience</a> 
			<a class={`${style.blog} ${active === 'blog' ? style.active : ''}`} href="/blog">Blog</a> 
			<a class={`${style.projects} ${active === 'projects' ? style.active : ''}`} href="/projects">projects</a> 
		</div>