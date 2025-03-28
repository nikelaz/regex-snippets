'use client';

import headerStyles from './header.module.css';
import tocStyles from './toc.module.css';
import { AppShell, Burger, Group, Autocomplete, Text, Anchor, Container, Flex, TableOfContents } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import Logo from '../(components)/logo';
import Link from 'next/link';
import Nav from '../(components)/nav/nav';

const Home = ({children}: any) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group className={headerStyles.header}>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Anchor component={Link} underline="never" href="/">
              <Group justify="center" visibleFrom="xs">
                <Logo />
                <Text inline={true} size="lg" fw={600} color="gray.9">RegEx Snippets</Text>
              </Group>
            </Anchor>
          </Group>
          <Group>
            <Autocomplete
              placeholder="Search"
              leftSection={<IconSearch size={16} stroke={1.5} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Nav />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container py="xl">
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;

