import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title = 'Beginnix - Creative Digital Agency | Brand, Design & Development',
    description = 'Beginnix is a leading creative digital agency specializing in brand design, UI/UX, digital marketing, motion graphics, and web development solutions. Transform your brand with our innovative designs.',
    keywords = 'creative agency, digital agency, brand design, ui ux design, digital marketing, motion graphics, animation studio, branding agency, web development company',
    image = '/opengraph-image.png',
    url = 'https://beginnix.in',
}: SEOProps) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Language and Region */}
            <meta property="og:locale" content="en_US" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};