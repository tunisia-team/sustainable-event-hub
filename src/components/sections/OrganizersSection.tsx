import { useLanguage } from "@/contexts/LanguageContext";

export const OrganizersSection = () => {
  const { t } = useLanguage();
  const organizerLogos = [
    {
      src: "/lovable-uploads/55d7b386-c0a5-4d8d-9244-35f3e4a515d8.png",
      alt: "AFN Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/6f010426-1498-4ad8-a001-ff047f276a33.png",
      alt: "Epitome Advisory Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/4b903c46-9279-4388-8f39-f25d0f581a6e.png",
      alt: "ASFO Logo",
      width: 150
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('organizers.title')}</h2>
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
            {t('organizers.participation')}
          </p>
        </div>
      </div>
    </section>
  );
};