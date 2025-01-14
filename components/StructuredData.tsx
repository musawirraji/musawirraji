import Script from 'next/script';

export default function StructuredData() {
  return (
    <Script id='structured-data' type='application/ld+json'>
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Musawir Raji",
          "url": "https://www.abdulmusawirdev.com/",
          "sameAs": [
            "https://www.linkedin.com/in/musawir-raji-94b08311b/",
            "https://www.upwork.com/freelancers/~01b4bcaf279408483b?mp_source=share",
            "https://x.com/AbdulMusawir_"
          ],
          "jobTitle": "Webflow & Next.js Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "description": "Experienced Webflow & Next.js Developer specializing in creating responsive, performant websites and web applications."
        }
      `}
    </Script>
  );
}
