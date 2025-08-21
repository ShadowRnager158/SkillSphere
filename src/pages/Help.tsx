import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, HelpCircle, MessageSquare, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Help() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <section className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers and get support when you need it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search for help articles..."
                className="pl-12 pr-4 py-4 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Contact Support</h2>
                  <p className="text-xl text-blue-100">
                    Our team is here to help you 24/7
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <MessageSquare className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-blue-200 text-sm mb-4">Get instant help</p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Start Chat
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-blue-200 text-sm mb-4">We'll respond within 24 hours</p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Send Email
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-blue-200 text-sm mb-4">Call for urgent issues</p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
