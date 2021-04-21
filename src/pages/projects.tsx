import Link from 'next/link';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import { useState } from 'react';


import { About } from '../components/About';
import { Layout } from '../components/Layout';
import { Projects } from '../components/Projects';

interface Props { }

const Index: NextPage<Props> = () => {
	const seo: NextSeoProps = { };

	const [ page, usePage ] = useState('projects');

	const setPage = (name) => {
		usePage(name);
	};

	return(
		<Layout seo={seo}>
			<div className='nav-container'>
				<Link href='/'>
					<a className='nav-title' onClick={ () => { setPage('about'); } }>
						About
					</a>
				</Link>
				<Link href='/projects'>
					<a className='nav-item' onClick={ () => { setPage('projects'); } }>
						Projects
					</a>
				</Link>
			</div>
			<div className='container' style={{ height: '50vh' }}>
				{
					(() => {
						if(page === 'about') {
							return (
								<About />
							);
						} else if (page === 'projects') {
							return (
								<Projects />
							);
						}
					})()
				}
			</div>
		</Layout>
	);
};

export default Index;