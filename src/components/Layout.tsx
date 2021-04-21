import Link from 'next/link';
import { NextSeoProps } from 'next-seo/lib/types';
import React from 'react';

import { Head } from './Head';

interface Props { 
	seo?: NextSeoProps;
	children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = (props: Props) => {
	return(
		<div className='size-full center' style={{ marginTop: '25vh' }}>
			{/* <div className='nav-container'>
				<Link href='/'>
					<a className='nav-title'>
						Home
					</a>
				</Link>
				<Link href='/projects'>
					<a className='nav-item'>
						Projects
					</a>
				</Link>
			</div> */}
			<Head seo={props.seo} />
			{props.children}
		</div>
	);
};