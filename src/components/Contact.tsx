"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setErrorMessage('Email service is not properly configured. Please contact directly via email.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      reset();
      setStep(1);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setErrorMessage(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const conversationStarters = [
    {
      emoji: "💼",
      title: "Project Collaboration",
      questions: [
        "What inspired your project idea?",
        "What's your timeline?",
        "What's your target audience?"
      ]
    },
    {
      emoji: "💡",
      title: "Technical Consultation",
      questions: [
        "What challenges are you facing?",
        "What technologies interest you?",
        "What's your current stack?"
      ]
    },
    {
      emoji: "🤝",
      title: "Partnership Opportunities",
      questions: [
        "What's your vision?",
        "How can we create value together?",
        "What's your ideal timeline?"
      ]
    },
    {
      emoji: "🎯",
      title: "Quick Question",
      questions: [
        "Technical question?",
        "Looking for advice?",
        "Need a second opinion?"
      ]
    }
  ];

  const workingHours = [
    { day: "Monday - Thursday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Friday", hours: "9:00 AM - 4:00 PM EST" },
    { day: "Weekend", hours: "By appointment" }
  ];

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "contact@almamun.com",
      link: "mailto:contact@almamun.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+1 (234) 567-8901",
      link: "tel:+12345678901"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "New York, NY",
      link: "https://maps.google.com/?q=New+York,+NY"
    }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Hackintosh Setup",
    "Custom Windows Image",
    "Other"
  ];

  // Add availability and current project info
  const availability = {
    status: "Available",  // or "Busy", "Limited Availability"
    nextAvailable: "Immediately",  // or specific date
    timezone: "EST (UTC-5)",
  };

  const currentProject = {
    name: "E-commerce Platform",
    client: "Tech Solutions Inc.",
    type: "Web Development",
    completion: "80%",
  };

  return (
    <section className="relative min-h-screen py-20">
      {/* Organic Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                I believe great projects start with good conversations. Choose how you'd like to begin:
              </p>
            </motion.div>

            {/* Working Hours Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {workingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-background/40 backdrop-blur-sm border border-primary/10"
                >
                  <p className="text-sm">
                    <span className="font-medium text-primary">{schedule.day}</span>
                    <span className="mx-2">•</span>
                    <span className="text-foreground/70">{schedule.hours}</span>
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {conversationStarters.map((starter, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setFormData({ subject: starter.title });
                      handleStepChange(2);
                    }}
                    className="group p-6 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-4xl mb-4 block">{starter.emoji}</span>
                    <h3 className="text-xl font-semibold mb-4 gradient-text">{starter.title}</h3>
                    <ul className="space-y-2">
                      {starter.questions.map((question, qIndex) => (
                        <li key={qIndex} className="text-sm text-foreground/70 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary/50" />
                          {question}
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto"
              >
                <div className="p-8 rounded-2xl bg-background/40 backdrop-blur-xl border border-primary/10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-semibold gradient-text">
                      {formData.subject}
                    </h3>
                    <button
                      onClick={() => handleStepChange(1)}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      ← Change Topic
                    </button>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            {...register('name', { required: true })}
                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                              errors.name ? 'border-red-500' : 'border-primary/20'
                            } focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-foreground/40`}
                            disabled={isSubmitting}
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{t('contact.required')}</p>
                          )}
                        </div>

                        <div>
                          <input
                            type="email"
                            placeholder="Your Email"
                            {...register('email', {
                              required: true,
                              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                              errors.email ? 'border-red-500' : 'border-primary/20'
                            } focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-foreground/40`}
                            disabled={isSubmitting}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.email.type === 'required'
                                ? t('contact.required')
                                : t('contact.invalidEmail')}
                            </p>
                          )}
                        </div>
                      </div>

                      <input
                        type="hidden"
                        {...register('subject')}
                        value={formData.subject}
                      />

                      <div>
                        <textarea
                          placeholder="Tell me about your ideas..."
                          rows={6}
                          {...register('message', { required: true })}
                          className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                            errors.message ? 'border-red-500' : 'border-primary/20'
                          } focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-foreground/40`}
                          disabled={isSubmitting}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{t('contact.required')}</p>
                        )}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-4 text-white font-medium transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Start the Conversation'
                      )}
                    </motion.button>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500"
                      >
                        <p className="text-center font-medium">
                          {t('contact.success')}
                        </p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500"
                      >
                        <p className="text-center font-medium">
                          {errorMessage || t('contact.error')}
                        </p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact; 