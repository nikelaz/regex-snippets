import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '../styles/highlight-theme.css';

import headerStyles from './header.module.css';
import {
  AppShell,
  Burger,
  Group,
  Autocomplete,
  Text,
  Anchor,
  Container,
  MantineProvider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import Logo from '../app/(components)/logo';
import Nav from './Nav';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { searchData } from '../app/(sidebar-layout)/searchData';
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
import type { ReactNode } from 'react';

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

interface SidebarAppProps {
  children: ReactNode;
  currentPath: string;
}

const SidebarApp = ({ children, currentPath }: SidebarAppProps) => {
  const [opened, { toggle }] = useDisclosure();
  const [searchValue, setSearchValue] = useState('');

  const fuse = useMemo(() => new Fuse(searchData, {
    keys: ['label', 'keywords'],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  }), []);

  const searchResults = useMemo(() => {
    if (!searchValue.trim()) {
      return searchData.map(item => item.label);
    }
    return fuse.search(searchValue).map(result => result.item.label);
  }, [searchValue, fuse]);

  const handleSearchSelect = (value: string) => {
    const item = searchData.find(item => item.label === value);
    if (item) {
      window.location.href = item.link;
      setSearchValue('');
    }
  };

  return (
    <MantineProvider defaultColorScheme="auto">
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
              <Anchor underline="never" href="/">
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
          <Nav currentPath={currentPath} toggleMobileNav={toggle} />
        </AppShell.Navbar>

        <AppShell.Main>
          <Container py="xl">
            <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
              {children}
            </CodeHighlightAdapterProvider>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};

export default SidebarApp;
