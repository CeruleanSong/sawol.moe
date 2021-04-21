import NHead from 'next/head';
import { NextPage } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';

interface Props {
	seo?: NextSeoProps;
}

export const Head: NextPage<Props> = (props: Props) => {
	const seo = {
		/** default configuration */
		/** overwrite default configuration */
		...props.seo
	};
	return(
		<NHead>
			<link rel="stylesheet" href="https://unpkg.com/stagcss"/>
			<link rel="stylesheet" href="https://unpkg.com/stagcss/dist/stag-ext.min.css"/>
			<NextSeo
				title={seo.title}
				description={seo.description}
				openGraph={seo.openGraph}
				twitter={seo.twitter} >
			</NextSeo>
		</NHead>
	);
};