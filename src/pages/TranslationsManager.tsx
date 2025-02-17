
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2Icon } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

// Define the supported languages type from the database schema
type SupportedLanguage = Database["public"]["Enums"]["supported_language"];

export const TranslationsManager = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const downloadCurrentTranslations = async () => {
    setIsDownloading(true);
    try {
      // Fetch all English translations
      const { data: translations, error } = await supabase
        .from('translations')
        .select('section_type, section_id, content_key, content_value')
        .eq('language', 'en');

      if (error) throw error;

      // Convert to CSV format
      const csvHeader = 'section_type,section_id,content_key,en,es,ar,he\n';
      const csvData = translations.map(t => 
        `${t.section_type},${t.section_id || ''},${t.content_key},${t.content_value},,,`
      ).join('\n');

      const csvContent = csvHeader + csvData;
      
      // Create and download file
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `translations_template_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: "Translation template downloaded successfully",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "Failed to download translations template",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const text = await file.text();
      const rows = text.split('\n');
      const headers = rows[0].split(',');
      
      // Skip header row and process each data row
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        if (row.length < headers.length) continue;

        const section_type = row[0];
        const section_id = row[1] || null;
        const content_key = row[2];
        
        // Process each language column (en, es, ar, he)
        const languageColumns: SupportedLanguage[] = ['en', 'es', 'ar', 'he'];
        for (let langIndex = 0; langIndex < languageColumns.length; langIndex++) {
          const content_value = row[langIndex + 3]?.trim();
          if (!content_value) continue;

          const { error } = await supabase.rpc('upsert_translation', {
            _language: languageColumns[langIndex],
            _section_type: section_type,
            _section_id: section_id,
            _content_key: content_key,
            _content_value: content_value
          });

          if (error) {
            console.error(`Error uploading translation for ${languageColumns[langIndex]}:`, error);
            throw error;
          }
        }
      }

      toast({
        title: "Success",
        description: "Translations uploaded successfully",
      });
      
      // Clear the input
      event.target.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: "Failed to process translations file",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Translations Manager</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Download Template</h2>
          <p className="text-muted-foreground mb-4">
            Download the current English translations as a CSV template. 
            You can then add translations for other languages in the empty columns.
          </p>
          <Button 
            onClick={downloadCurrentTranslations} 
            disabled={isDownloading}
          >
            {isDownloading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
            Download CSV Template
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Upload Translations</h2>
          <p className="text-muted-foreground mb-4">
            Upload your completed CSV file with translations. 
            Make sure to keep the same format as the template.
          </p>
          <Input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="mb-4"
          />
          {isUploading && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Uploading translations...
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default TranslationsManager;
