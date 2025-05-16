import { Github, Linkedin, Mail,X } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { memo } from 'react';

// Define the type for a single contact
interface Contact {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  link: string;
  username: string;
  color: string;
}

interface ContactItemProps {
  contact: Contact;
}

const contacts: Contact[] = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/ABhavikj123',
    username: 'Bhavik Joshi',
    color: 'from-gray-500 to-gray-700'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bhavik-joshi-0b0636261',
    username: 'Bhavik Joshi',
    color: 'from-blue-500 to-blue-700'
  },
  {
    icon: X,
    label: 'X',
    link: 'https://x.com/BhavikJoshi7738?t=LoLtZqEyG8UYbYKt2aaDYw&s=08',
    username: 'Bhavik Joshi',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Mail,
    label: 'Email',
    link: 'mailto:bhavikjoshi8989@gmail.com',
    username: 'Bhavik Joshi',
    color: 'from-red-500 to-red-700'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const ContactItem: React.FC<ContactItemProps> = memo(({ contact }) => (
  <motion.a
    href={contact.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group-hover:shadow-lg"
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    aria-label={`Contact via ${contact.label}`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
    />
    <div className="relative p-4 sm:p-6 flex items-start gap-4">
      <div className="p-3 rounded-full bg-white/10">
        <contact.icon className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {contact.label}
        </h3>
        <p className="text-gray-400 text-sm">{contact.username}</p>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        aria-hidden="true"
      />
    </div>
  </motion.a>
));

export const Contact: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {contacts.map(contact => (
        <ContactItem key={contact.label} contact={contact} />
      ))}
    </motion.div>
  );
};
