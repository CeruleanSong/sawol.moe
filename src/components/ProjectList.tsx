import { NextPage } from 'next';
import React from 'react';

import style from './ProjectList.module.scss';
import { ProjectListItem } from './ProjectListItem';

interface Project {
	icon?: string;
	title: string;
	website?: string;
	repo: string;
	desc: string;
	tags: string[];
};

interface Props {
	title: string;
	projects: Project[];
}

export const ProjectList: NextPage<Props> = (props) => {
	return(
		<section>
			<h1>
				{props.title}
			</h1>
			<div className={style.itemList}>
				{
					props.projects.map((value, index) => {
						return (
							<ProjectListItem key={index}
								icon={value.icon} 
								title={value.title} 
								website={value.website} 
								repo={value.repo} 
								desc={value.desc} 
								tags={value.tags} />
						);
					})
				}
			</div>
		</section>
	);
};