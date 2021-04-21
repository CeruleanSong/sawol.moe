import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import style from './Projects.module.scss';

interface Props { }

export const Projects: NextPage<Props> = () => {
	return(
		<>
			<section>
				<h1>
					Active Projects
				</h1>
				<div className={style.itemList}>
					<div>
						<div className='direction-horizontal flex'>
							<div className='direction-vertical flex'>
								<img src='/icons/stag.png' className={style.icon}></img>
							</div>
							<div>
								<div>
									<strong>stag</strong>
								</div>
								<Link href='https://github.com/songmawa/stag'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<Link href='https://stagcss.dev/'>
									<a className={style.icon}>
										<FiExternalLink />
										Website
									</a>
								</Link>
								<div>
									Modern and minimalist CSS framework and React component library.
								</div>
								<span className='badge badge-blue'>SASS</span>
								<span className='badge badge-blue'>SCSS</span>
								<span className='badge badge-blue'>TypeScript</span>
								<span className='badge badge-blue'>ReactJS</span>
							</div>
						</div>
					</div>

					<div>
						<div className='direction-horizontal flex'>
							<div className='direction-vertical flex'>
								<img src='/icons/iizume.png' className={style.icon}></img>
							</div>
							<div>
								<div>
									<strong>iizume (mobile application)</strong>
								</div>
								<Link href='https://github.com/songmawa/iizu.me-app'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<Link href='https://iizu.me/'>
									<a className={style.icon}>
										<FiExternalLink />
										Website
									</a>
								</Link>
								<div>
									A mobile application for browsing and reading manga. 
								</div>
								<span className='badge badge-blue'>TypeScript</span>
								<span className='badge badge-blue'>React Native</span>
							</div>
						</div>
					</div>
					
					<div>
						<div className='direction-horizontal flex'>
							<div className='direction-vertical flex'>
								<img src='/icons/iizume.png' className={style.icon}></img>
							</div>
							<div>
								<div>
									<strong>iizume (api)</strong>
								</div>
								<Link href='https://github.com/songmawa/iizu.me'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<Link href='https://iizu.me/'>
									<a className={style.icon}>
										<FiExternalLink />
										Website
									</a>
								</Link>
								<div>
									Free and open source API for browsing and downloading manga. 
								</div>
								<span className='badge badge-blue'>TypeScript</span>
								<span className='badge badge-blue'>ReactJS (NEXT.JS)</span>
							</div>
						</div>
					</div>
					
					<div>
						<div className='direction-horizontal flex'>
							<div className='direction-vertical flex'>
								<img src='/icons/pandome.png' className={style.icon}></img>
							</div>
							<div>
								<div>
									<strong>pndome</strong>
								</div>
								<Link href='https://github.com/songmawa/pndo.me-web'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<Link href='https://pndo.me/'>
									<a className={style.icon}>
										<FiExternalLink />
										Website
									</a>
								</Link>
								<div>
									Clean, simple and private file hosting service (successor to gobox). 
								</div>
								<span className='badge badge-blue'>TypeScript</span>
								<span className='badge badge-blue'>React Native</span>
							</div>
						</div>
					</div>
					
					<h1>
						Other Projects
					</h1>

					<div>
						<div className='direction-horizontal flex'>
							<div className='direction-vertical flex'>
								<img src='/icons/gobox.png' className={style.icon}></img>
							</div>
							<div>
								<div>
									<strong>gobox</strong>
								</div>
								<Link href='https://github.com/songmawa/gobox-server-go'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<Link href='https://gobox.dev/'>
									<a className={style.icon}>
										<FiExternalLink />
										Website
									</a>
								</Link>
								<div>
									Quick file upload and sharing service. 
								</div>
								<span className='badge badge-blue'>Golang</span>
								<span className='badge badge-blue'>JavaScript</span>
							</div>
						</div>
					</div>
					
					<div>
						<div className='direction-horizontal flex'>
							<div className='direction-vertical flex'>
								<img src='/icons/kurisu.png' className={style.icon}></img>
							</div>
							<div>
								<div>
									<strong>gobox</strong>
								</div>
								<Link href='https://github.com/Tromodolo/Kurisu'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<div>
									General purpose discord chatbot.
								</div>
								<span className='badge badge-blue'>Golang</span>
								<span className='badge badge-blue'>JavaScript</span>
							</div>
						</div>
					</div>
					
					<div>
						<div className='direction-horizontal flex'>
							<div>
								<div>
									<strong>sorbet</strong>
								</div>
								<Link href='https://github.com/songmawa/sorbet'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<div>
									Very mini game engine with a physics engine & and entity component system.
								</div>
								<span className='badge badge-blue'>C</span>
								<span className='badge badge-blue'>OpenGL</span>
								<span className='badge badge-blue'>OpenAL</span>
								<span className='badge badge-blue'>OpenCL</span>
							</div>
						</div>
					</div>
					
					<div>
						<div className='direction-horizontal flex'>
							<div>
								<div>
									<strong>paint32</strong>
								</div>
								<Link href='https://github.com/songmawa/paint32'>
									<a className={style.icon}>
										<FiGithub />
										Github
									</a>
								</Link>
								<div>
									Simple paint appication with pen and bucket tool. Used to demonstrate floodfill algorithm (Algorithm analysis class)
								</div>
								<span className='badge badge-blue'>C++</span>
								<span className='badge badge-blue'>OpenGL</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};