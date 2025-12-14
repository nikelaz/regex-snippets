'use client';

import { useState } from 'react';
import {
  IconHome,
  IconMail,
  IconPhone,
  IconCalendarWeek,
  IconClock,
  IconSortAZ,
  IconRuler2,
  IconAlignLeft,
  IconCheck,
  IconId,
  IconBook,
  IconMapPin,
  IconCreditCard,
  IconNumber123,
  IconLink,
  IconRouter,
  IconWorldWww,
  IconBrandWindows,
  IconFile,
} from '@tabler/icons-react';
import { Code, Group, Text, Anchor } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav.module.css';

const main = [
  { link: '/', label: 'Overview', icon: IconHome },
];

const templates = [
  { link: '/email', label: 'Email', icon: IconMail },
  { link: '/phone', label: 'Phone', icon: IconPhone },
  { link: '/date', label: 'Date', icon: IconCalendarWeek },
  { link: '/time', label: 'Time', icon: IconClock }, 
  { link: '/alphanumeric', label: 'Alphanumeric', icon: IconSortAZ },
  { link: '/text-length', label: 'Text Length', icon: IconRuler2 },
  { link: '/number-of-lines', label: 'Number of Lines', icon: IconAlignLeft },
  { link: '/affirmation', label: 'Affirmation', icon: IconCheck },
  { link: '/social-security-number', label: 'Social Security', icon: IconId },
  { link: '/isbn', label: 'ISBN', icon: IconBook },
  { link: '/zip-code', label: 'ZIP Code', icon: IconMapPin },
  { link: '/credit-debit-card-number', label: 'Credit/Debit Card', icon: IconCreditCard },
  { link: '/numbers', label: 'Numbers', icon: IconNumber123 },
  { link: '/domain', label: 'Domain', icon: IconWorldWww },
  { link: '/url-and-path', label: 'URL & Path', icon: IconLink },
  { link: '/ip-address', label: 'IP Address', icon: IconRouter },
  { link: '/unix-path', label: 'Unix Path', icon: IconFile },
  { link: '/windows-path', label: 'Windows Path', icon: IconBrandWindows },
];

type NavProps = Readonly<{
  toggleMobileNav: () => void;
}>;

const Nav = (props: NavProps) => {
  const [active, setActive] = useState('Billing');
  const path = usePathname();

  const getLinks = (data: any) => data.map((item: any) => (
    <Anchor
      component={Link}
      className={classes.link}
      data-active={path === item.link || undefined}
      underline="never"
      href={item.link}
      key={item.link}
      onClick={props.toggleMobileNav}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Anchor>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {getLinks(main)}
        <Text tt="uppercase" size="sm" color="var(--color-primary-text)" fw={600} px="sm" mt="md" mb="sm">Validation Templates</Text>
        {getLinks(templates)}
      </div>
    </nav>
  );
};

export default Nav;

