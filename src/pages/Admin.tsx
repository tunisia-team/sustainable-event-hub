import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Admin = () => {
  const { t } = useLanguage();
  const [content, setContent] = useState({
    title: t('event.title'),
    subtitle: t('event.subtitle'),
    date: t('event.date'),
    location: t('event.location'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the content to your backend
    console.log('Saving content:', content);
  };

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input
              value={content.title}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Subtitle</label>
            <Input
              value={content.subtitle}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <Input
              value={content.date}
              onChange={(e) => setContent({ ...content, date: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <Input
              value={content.location}
              onChange={(e) => setContent({ ...content, location: e.target.value })}
            />
          </div>
          
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;