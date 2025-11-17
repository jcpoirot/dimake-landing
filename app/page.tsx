import Image from "next/image";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Dimake',
    description: 'CTO, CIO, CPO as a service - Transformation digitale',
    url: 'https://dimake.io',
    logo: 'https://dimake.io/images/logo.png',
    image: 'https://dimake.io/images/logo.png',
    email: 'contact@dimake.io',
    areaServed: {
      '@type': 'Country',
      name: 'France'
    },
    serviceType: ['Digital Transformation', 'CTO as a service', 'CIO as a service', 'CPO as a service'],
    slogan: 'Technologie × Client × Culture',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <main className="flex flex-col items-center text-center max-w-3xl space-y-12">
        {/* Logo */}
        <div className="animate-in fade-in duration-700">
          <Image
            src="/images/logo.png"
            alt="logo dimake.io"
            width={200}
            height={100}
            priority
            className="w-auto h-auto"
          />
        </div>

        {/* Main value proposition */}
        <div className="space-y-8 animate-in fade-in duration-700 delay-150">
          <h1 className="text-2xl md:text-3xl font-light tracking-wide text-black">
            CTO <span className="text-gray-400">•</span> CIO <span className="text-gray-400">•</span> CPO <span className="text-gray-400 font-light">as a service</span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-700">
            <span className="font-medium">Technologie</span>
            <span className="text-gray-300">×</span>
            <span className="font-medium">Client</span>
            <span className="text-gray-300">×</span>
            <span className="font-medium">Culture</span>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-base md:text-lg text-gray-600 font-light">
              De la stratégie au lancement produit
            </p>
            <p className="text-sm md:text-base text-gray-500 font-light">
              Startups • Scale-ups • Grands groupes
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="pt-4 animate-in fade-in duration-700 delay-300">
          <a
            href="mailto:contact@dimake.io"
            className="text-lg font-normal text-black hover:text-gray-500 transition-all duration-300 border-b border-transparent hover:border-gray-300 pb-0.5"
          >
            contact@dimake.io
          </a>
        </div>
      </main>
    </div>
    </>
  );
}
