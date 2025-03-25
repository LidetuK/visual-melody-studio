
export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; href: string; }[];
}

export const servicesItems = [
  { title: 'Film Production', href: '/services/film-production' },
  { title: 'Music Production', href: '/services/music-production' },
  { title: 'Post-Production', href: '/services/post-production' },
  { title: 'Animation', href: '/services/animation' },
];

export const workItems = [
  { title: 'Films', href: '/work/films' },
  { title: 'Music Videos', href: '/work/music-videos' },
  { title: 'Commercials', href: '/work/commercials' },
  { title: 'Animation Projects', href: '/work/animation' },
];

export const aboutItems = [
  { title: 'Our Story', href: '/about/our-story' },
  { title: 'Team', href: '/about/team' },
  { title: 'Mission & Values', href: '/about/mission' },
  { title: 'Careers', href: '/about/careers' },
];

export const coursesItems = [
  { title: 'Film Production Courses', href: '/courses#film-production' },
  { title: 'Music Production Courses', href: '/courses#music-production' },
  { title: 'Post-Production Courses', href: '/courses#post-production' },
  { title: 'Animation Courses', href: '/courses#animation' },
];

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services', 
    hasDropdown: true,
    dropdownItems: servicesItems
  },
  { 
    label: 'Work', 
    href: '/work', 
    hasDropdown: true,
    dropdownItems: workItems
  },
  { 
    label: 'Courses', 
    href: '/courses', 
    hasDropdown: true,
    dropdownItems: coursesItems
  },
  { 
    label: 'About', 
    href: '/about', 
    hasDropdown: true,
    dropdownItems: aboutItems
  },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];
