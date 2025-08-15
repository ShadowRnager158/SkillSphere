import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Mail, 
  ArrowRight
} from 'lucide-react';

export default function Press() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Media resources, press releases, and company information for journalists and media professionals.
          </p>
        </div>
        
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Press Kit Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're preparing comprehensive press materials including company facts, logos, and media contacts.
            </p>
            // ... existing code ...
          <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3"
            onClick={() => {
              try {
                const blob = new Blob([`SkillSphere Press Kit\nGenerated: ${new Date().toISOString()}`], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'press-kit.pdf';
                a.click();
                URL.revokeObjectURL(url);
              } catch {
                window.print();
              }
            }}
          >
            Download Press Kit
          </Button>
          // ... existing code ...
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
