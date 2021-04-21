import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';

import { About } from '../components/About';
import { Layout } from '../components/Layout';

interface Props { }

const Index: NextPage<Props> = () => {
	const seo: NextSeoProps = { };

	return(
		<Layout seo={seo}>
			<div className='container'>
				<About />
			</div>
		</Layout>
	);
};

export default Index;