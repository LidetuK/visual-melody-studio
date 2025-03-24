
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface SocialMediaIconsProps {
  className?: string;
  iconSize?: number;
  color?: string;
  hoverColor?: string;
}

export const SocialMediaIcons = ({
  className = '',
  iconSize = 20,
  color = 'text-gray-400',
  hoverColor = 'hover:text-elfign-gold'
}: SocialMediaIconsProps) => {
  const socialLinks = [
    { name: 'Youtube', icon: Youtube, url: 'https://youtube.com' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'X (Twitter)', icon: FaXTwitter, url: 'https://x.com' },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`transition-colors ${color} ${hoverColor}`}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
      <a
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className={`transition-colors ${color} ${hoverColor}`}
      >
        <FaTelegram size={iconSize} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
