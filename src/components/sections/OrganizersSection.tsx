import { useLanguage } from "@/contexts/LanguageContext";

export const OrganizersSection = () => {
  const organizerLogos = [
    {
      src: "/lovable-uploads/6f010426-1498-4ad8-a001-ff047f276a33.png",
      alt: "FSEGSFAX Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/f9b7225e-455a-4646-af2a-e5dc7209d25e.png",
      alt: "AFN Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/b8316ab8-e4cd-49ea-a9ef-44daaf67288e.png",
      alt: "University of Sfax Logo",
      width: 150
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Organizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {organizerLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-auto w-full max-w-[150px] object-contain"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">
            With the participation of the{" "}
            <a 
              href="https://publika.skema.edu/fr/extra/observatoire-internationale-de-la-finance-durable/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              International Observatory of Sustainable Finance
            </a>
            {" "}of SKEMA Business School
          </p>
        </div>
      </div>
    </section>
  );
};