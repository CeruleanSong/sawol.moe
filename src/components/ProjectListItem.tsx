import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import style from './ProjectListItem.module.scss';

interface Props {
	icon?: string;
	title: string;
	website?: string;
	repo: string;
	desc: string;
	tags: string[];
}

export const ProjectListItem: NextPage<Props> = (props: Props) => {
	return(
		<div>
			<div className='direction-horizontal flex'>
				{
					props.icon ?
						<div className={style.iconContainer}>
							<img src={props.icon} className={style.icon}></img>
						</div> :
						null
				}
				<div>
					<div>
						<strong>{props.title}</strong>
					</div>
					<Link href={props.repo}>
						<a className={style.icon}>
							<FiGithub />
							Github
						</a>
					</Link>
					{
						props.website ?
							<Link href={props.website}>
								<a className={style.icon}>
									<FiExternalLink />
									Website
								</a>
							</Link> :
							null
					}
					<div>
						{props.desc}
					</div>
					{
						props.tags.map((value, index) => {
							return (
								<span key={index} className='badge badge-blue'>{value}</span>
							);
						})
					}
				</div>
			</div>
		</div>
	);
};