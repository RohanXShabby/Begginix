import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
    noIndex?: boolean;
}

export const SEO = ({
    title = 'Beginnix - Creative Digital Agency | Brand, Design & Development',
    description = 'Beginnix is a leading creative digital agency specializing in brand design, UI/UX, digital marketing, motion graphics, and web development solutions. Transform your brand with our innovative designs.',
    keywords = 'creative agency, digital agency, brand design, ui ux design, digital marketing, motion graphics, animation studio, branding agency, web development company, seo optimization, content creation, social media marketing',
    image = 'https://beginnix.in/beginnix-card.jpg',
    url = 'https://beginnix.in',
    type = 'website',
    author = 'Beginnix Studio',
    publishedTime,
    modifiedTime,
    section,
    tags = ['digital agency', 'brand design', 'web development', 'ui ux design'],
    noIndex = false,
}: SEOProps) => {
    const fullImageUrl = image.startsWith('http') ? image : `https://beginnix.in${image}`;
    const fullUrl = url.startsWith('http') ? url : `https://beginnix.in${url}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            {/* Robots */}
            <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
            <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content="Beginnix" />
            <meta property="og:locale" content="en_US" />

            {/* Article specific meta tags */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {section && <meta property="article:section" content={section} />}
            {tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:creator" content="@beginnix" />
            <meta name="twitter:site" content="@beginnix" />

            {/* Additional SEO Meta Tags */}
            <meta name="language" content="en" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Alternate languages if needed */}
            <link rel="alternate" hrefLang="en" href={fullUrl} />
            <link rel="alternate" hrefLang="x-default" href={fullUrl} />
        </Helmet>
    );
};