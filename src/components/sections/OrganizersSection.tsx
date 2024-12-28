import { useLanguage } from "@/contexts/LanguageContext";

export const OrganizersSection = () => {
  const organizerLogos = [
    {
      src: "/lovable-uploads/2a05f648-4993-4f8f-a5ec-84743d4b8b1c.png",
      alt: "FSEGSFAX Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/2a05f648-4993-4f8f-a5ec-84743d4b8b1c.png",
      alt: "AFN Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/2a05f648-4993-4f8f-a5ec-84743d4b8b1c.png",
      alt: "University of Sfax Logo",
      width: 150
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
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