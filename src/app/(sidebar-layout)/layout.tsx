'use client';

import headerStyles from './header.module.css';
import { AppShell, Burger, Group, Autocomplete, Text, Anchor, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import Logo from '../(components)/logo';
import Link from 'next/link';
import Nav from '../(components)/nav/nav';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';
import { searchData } from './searchData';
import { CodeHighlightAdapterProvider, createHighlightJsAdapter } from '@mantine/code-highlight';
import hljs from 'highlight.js/lib/core';
import jsLang from 'highlight.js/lib/languages/javascript';
import pyLang from 'highlight.js/lib/languages/python';
import rsLang from 'highlight.js/lib/languages/rust';
import goLang from 'highlight.js/lib/languages/go';
import swiftLang from 'highlight.js/lib/languages/swift';
import csLang from 'highlight.js/lib/languages/csharp';
import javaLang from 'highlight.js/lib/languages/java';
import phpLang from 'highlight.js/lib/languages/php';
import txtLang from 'highlight.js/lib/languages/plaintext';
import './highlight-theme.css';

// Register syntax highlighting languages
hljs.registerLanguage('plaintext', txtLang);
hljs.registerLanguage('javascript', jsLang);
hljs.registerLanguage('python', pyLang);
hljs.registerLanguage('go', goLang);
hljs.registerLanguage('rust', rsLang);
hljs.registerLanguage('swift', swiftLang);
hljs.registerLanguage('csharp', csLang);
hljs.registerLanguage('java', javaLang);
hljs.registerLanguage('php', phpLang);

const highlightJsAdapter = createHighlightJsAdapter(hljs);

const Home = ({children}: any) => {
  const [opened, { toggle }] = useDisclosure();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => new Fuse(searchData, {
    keys: ['label', 'keywords'],
    threshold: 0.4, // 0 = exact match, 1 = match anything
    includeScore: true,
    minMatchCharLength: 2,
  }), []);

  // Get search results
  const searchResults = useMemo(() => {
    if (!searchValue.trim()) {
      return searchData.map(item => item.label);
    }
    const results = fuse.search(searchValue);
    return results.map(result => result.item.label);
  }, [searchValue, fuse]);

  // Handle selection
  const handleSearchSelect = (value: string) => {
    const item = searchData.find(item => item.label === value);
    if (item) {
      router.push(item.link);
      setSearchValue('');
    }
  };

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
                <Text inline={true} size="lg" fw={600} color="var(--color-primary-text)">RegEx Snippets</Text>
              </Group>
            </Anchor>
          </Group>
          <Group>
            <Autocomplete
              placeholder="Search"
              leftSection={<IconSearch size={16} stroke={1.5} />}
              data={searchResults}
              value={searchValue}
              onChange={setSearchValue}
              onOptionSubmit={handleSearchSelect}
              limit={10}
            />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Nav toggleMobileNav={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container py="xl">
          <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
            {children}
          </CodeHighlightAdapterProvider>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;

