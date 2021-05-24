import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import style from './About.module.scss';

interface Props {
}

export const About: NextPage<Props> = () => {
	return(
		<>
			<section>
				<Link href='/'>
					<h1>Elias Mawa</h1>
				</Link>
				<section>
					<Link href='https://github.com/ottxrgxist'>
						<a className={style.icon}>
							<FiGithub />
						Github
						</a>
					</Link>
					<Link href='https://www.linkedin.com/in/emawa/'>
						<a className={style.icon}>
							<FiLinkedin />
						LinkedIn
						</a>
					</Link>
					<Link href='mailto:elias@emawa.io'>
						<a className={style.icon}>
							<FiMail />
						elias@emawa.io
						</a>
					</Link>
				</section>
				<section>
					<p>
					Hello I am Elias Mawa, a developer from Edmonton, Alberta.
					</p>
					<p>
					I have experience building web and mobile applications. I also have experince building backends and RESFUL API's.
					</p>
					<p>
					Other than programming I also have many other hobbies that I love. These include rugby 🏉 (repping flyhalfs and wingers), Jogging 👟, Painting 🎨 and Crochet 🧶.
					</p>
				</section>
			</section>
			<section>
				<span className='badge badge-green'>JavaScript/TypeScript</span>
				<span className='badge badge-green'>C/C++</span>
				<span className='badge badge-green'>Ruby</span>
				<span className='badge badge-green'>Dart</span>
				<span className='badge badge-green'>Go</span>
				<span className='badge badge-blue'>ReactJS</span>
				<span className='badge badge-blue'>React Native</span>
				<span className='badge badge-blue'>NEXT.js</span>
				<span className='badge badge-blue'>OpenGL</span>
				<span className='badge badge-blue'>Flutter</span>
				<span className='badge'>MySQL</span>
				<span className='badge'>REST</span>
				<span className='badge'>Linux</span>
				<span className='badge'>Shell Scripting</span>
				<span className='badge'>Google Cloud Platform</span>
			</section>
		</>
	);
};