import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';

interface FormState {
  name: string;
  email: string;
  isSubmitting: boolean;
  success: boolean;
  error: string;
}

const NewsletterForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    isSubmitting: false,
    success: false,
    error: '',
  });

  const { name, email, isSubmitting, success, error } = formState;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, isSubmitting: true, error: '', success: false });

    try {
      await axios.post('http://localhost:3000/api/subscribe', { name, email });
      setFormState({
        name: '',
        email: '',
        isSubmitting: false,
        success: true,
        error: '',
      });
    } catch (err) {
      setFormState({
        ...formState,
        isSubmitting: false,
        error: 'Failed to subscribe. Please try again.',
        success: false,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Skillspher AI Newsletter</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {success && <p className="text-green-600 mt-2">Thank you for subscribing!</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default NewsletterForm;