import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    id: 'location',
    icon: MapPin,
    text: 'Manipal University Jaipur, Rajasthan, India',
    action: null,
  },
  {
    id: 'email',
    icon: Mail,
    text: 'vikramsingh9475889367@gmail.com',
    action: () => window.open('mailto:vikramsingh9475889367@gmail.com'),
  },
  {
    id: 'phone',
    icon: Phone,
    text: '+91 8791629670',
    action: () => window.open('tel:+918791629670'),
  },
  {
    id: 'resume',
    icon: Download,
    text: 'Download My Resume',
    action: () => window.open('https://drive.google.com/file/d/1vMwNYCsdydb3pbS1Vvqzc3MMun1PnN9B/view?usp=sharing', '_blank'),
    highlight: true,
  },
];

const socials = [
  { icon: Linkedin, url: 'https://www.linkedin.com/in/vikram-singh-gangwar', label: 'LinkedIn', color: '#0ea5e9' },
  { icon: Instagram, url: 'https://www.instagram.com/vikramsingh.gangwar', label: 'Instagram', color: '#a855f7' },
  { icon: Github, url: 'https://github.com/vikram-codes-hub', label: 'GitHub', color: '#00d4ff' },
];

const Left = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col gap-8 w-full max-w-sm">

      {/* Contact info items */}
      <div className="flex flex-col gap-3">
        {contactItems.map((item, i) => {
          const Icon = item.icon;
          const isHovered = hovered === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={item.action || undefined}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group"
              style={{
                cursor: item.action ? 'pointer' : 'default',
                background: isHovered ? 'rgba(0,212,255,0.06)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${isHovered ? 'rgba(0,212,255,0.25)' : 'rgba(255,255,255,0.06)'}`,
                transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
              }}
            >
              {/* Icon box */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                style={{
                  background: isHovered ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isHovered ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: isHovered ? '0 0 12px rgba(0,212,255,0.2)' : 'none',
                }}
              >
                <Icon
                  size={16}
                  style={{ color: isHovered ? '#00d4ff' : 'rgba(255,255,255,0.45)', transition: 'color 0.3s' }}
                />
              </div>

              <p
                className="text-sm font-medium leading-snug transition-colors duration-300 break-all"
                style={{ color: isHovered ? '#fff' : 'rgba(255,255,255,0.6)' }}
              >
                {item.highlight ? (
                  <span style={{ color: isHovered ? '#00d4ff' : 'rgba(0,212,255,0.7)' }}>
                    {item.text}
                  </span>
                ) : item.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.2), transparent)' }} />

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-3"
      >
        {socials.map(({ icon: Icon, url, label, color }) => (
          <button
            key={label}
            onClick={() => window.open(url, '_blank')}
            title={label}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${color}18`;
              e.currentTarget.style.border = `1px solid ${color}50`;
              e.currentTarget.style.boxShadow = `0 0 14px ${color}30`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Icon size={17} style={{ color: 'rgba(255,255,255,0.5)' }} />
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default Left;