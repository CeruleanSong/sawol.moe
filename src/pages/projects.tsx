import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';

import { Layout } from '../components/Layout';
import { Projects } from '../components/Projects';

interface Props { }

const Index: NextPage<Props> = () => {
	const seo: NextSeoProps = { };

	return(
		<Layout seo={seo}>
			<div className='container'>
				<Projects />
			</div>
		</Layout>
	);
};

export default Index;