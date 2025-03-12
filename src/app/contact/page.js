"use client";
import { useState } from 'react';
import Pageheader from '@/components/Pageheader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    project: 'Luso-Delights'
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hook.eu2.make.com/7080o47qcp7m8563om6zsnx1mbyx70tr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitError(false);
        setFormData({ name: '', email: '', subject: '', message: '', project: 'Luso-Delights' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(true);
      setSubmitSuccess(false);
      setTimeout(() => setSubmitError(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <Pageheader 
            header={'contact us'}
            description={'Get in touch with us for any inquiries or feedback.'}
            img={"url('images/banners/legal.jpg')"} 
            padding={28}
        />
      <div className="max-w-4xl my-8 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary">Address</h3>
                    <div className="text-base 2xl:text-lg">
                        <p>10 Market Street</p>
                        <p>Great Yarmouth, Norfolk</p>
                        <p>NR30 1NB, United Kingdom</p>
                    </div>
              </div>
              <div>
                <h3 className="font-medium text-primary">Phone</h3>
                <p className="text-base 2xl:text-lg">01493 237410</p>
              </div>
              <div>
                <h3 className="font-medium text-primary">Email</h3>
                <p className="text-base 2xl:text-lg">info@sabordelights.com</p>
              </div>
              <div>
                <h3 className="font-medium text-primary">Hours</h3>
                <p className="text-base 2xl:text-lg">
                  Monday - Friday: 11:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 12:00 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Send us a Message</h2>
            {submitSuccess && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                Sorry, there was an error sending your message. Please try again later.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md px-2 border-2 py-1 border-neutral shadow-sm focus:border-accent focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 px-2 py-1 border-neutral shadow-sm focus:border-accent focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md px-2 border-2 py-1 border-neutral shadow-sm focus:border-accent focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-2 px-2 py-1 border-neutral shadow-sm focus:border-accent focus:ring-accent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
