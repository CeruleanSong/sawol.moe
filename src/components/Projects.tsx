import { NextPage } from 'next';
import React from 'react';

import { ProjectList } from './ProjectList';


import projects from '../lib/projects.json'
import otherProjects from '../lib/other-projects.json'

interface Props { }

export const Projects: NextPage<Props> = () => {
	return(
		<section>
			<ProjectList title='Active Projects' projects={projects} />
			<ProjectList title='Other Projects' projects={otherProjects} />
		</section>
	);
};