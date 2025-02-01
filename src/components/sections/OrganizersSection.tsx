import { useLanguage } from "@/contexts/LanguageContext";

export const OrganizersSection = () => {
  const { t } = useLanguage();
  const organizerLogos = [
    {
      src: "/lovable-uploads/71c0b9d8-230c-460c-9560-ecc0952c48b6.png",
      alt: "AFN Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/1110df7d-8ae0-4ec0-862b-aa6f36c9a2bd.png",
      alt: "ISCAE Logo",
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