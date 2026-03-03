import React, { useRef, useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const inputBase = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
};

const inputFocused = {
  background: 'rgba(0,212,255,0.05)',
  border: '1px solid rgba(0,212,255,0.4)',
  boxShadow: '0 0 0 3px rgba(0,212,255,0.08)',
};

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-mono tracking-[0.15em] uppercase"
      style={{ color: 'rgba(255,255,255,0.4)' }}>
      {label}
    </label>
    {children}
  </div>
);

const Right = () => {
  const formRef = useRef();
  const [formData, setFormData]   = useState({ fullName: '', email: '', message: '' });
  const [focused, setFocused]     = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]     = useState(false);
  const [error, setError]         = useState(null);

  const handleChange = (field, val) => setFormData(p => ({ ...p, [field]: val }));

  const sendEmail = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await emailjs.sendForm('service_m5uqphp', 'template_ihobl3l', formRef.current, { publicKey: 'TP7OjGImQSnUpk7K7' });
      setSubmitting(false);
      setSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 8000);
    } catch {
      setSubmitting(false);
      setError('Failed to send. Please try again.');
    }
  };

  const getInputStyle = (field) => ({
    ...inputBase,
    ...(focused === field ? inputFocused : {}),
  });

  return (
    <div className="w-full max-w-sm">

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm leading-relaxed mb-7"
        style={{ color: 'rgba(255,255,255,0.45)' }}
      >
        Whether you're looking to build a new website, improve an existing one,
        or bring a fresh idea to life — I'm here to help.
      </motion.p>

      {/* Success */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="mb-5 p-3 rounded-xl flex items-center gap-2 text-sm font-mono"
          style={{
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.25)',
            color: '#22c55e',
          }}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Message sent! I'll get back to you soon.
        </motion.div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-5 p-3 rounded-xl text-sm font-mono"
          style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#ef4444' }}>
          {error}
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">

        <Field label="Full Name">
          <input
            type="text"
            name="fullName"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            onFocus={() => setFocused('fullName')}
            onBlur={() => setFocused(null)}
            disabled={submitting}
            required
            className="w-full rounded-xl px-4 py-3 text-sm placeholder:text-white/20"
            style={getInputStyle('fullName')}
          />
        </Field>

        <Field label="Email Address">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            disabled={submitting}
            required
            className="w-full rounded-xl px-4 py-3 text-sm placeholder:text-white/20"
            style={getInputStyle('email')}
          />
        </Field>

        <Field label="Your Message">
          <textarea
            name="message"
            placeholder="Share your thoughts..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            disabled={submitting}
            required
            rows={4}
            className="w-full rounded-xl px-4 py-3 text-sm placeholder:text-white/20 resize-none"
            style={getInputStyle('message')}
          />
        </Field>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="relative w-full py-3 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300"
          style={{
            background: submitting
              ? 'rgba(124,92,252,0.4)'
              : 'linear-gradient(135deg, #7c5cfc, #00a8cc)',
            boxShadow: submitting ? 'none' : '0 0 24px rgba(124,92,252,0.35)',
            cursor: submitting ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={(e) => {
            if (!submitting) e.currentTarget.style.boxShadow = '0 0 36px rgba(124,92,252,0.55)';
          }}
          onMouseLeave={(e) => {
            if (!submitting) e.currentTarget.style.boxShadow = '0 0 24px rgba(124,92,252,0.35)';
          }}
        >
          {submitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </div>
          ) : 'Send Message →'}

          {/* Shimmer */}
          {!submitting && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none" />
          )}
        </button>

      </form>
    </div>
  );
};

export default Right;