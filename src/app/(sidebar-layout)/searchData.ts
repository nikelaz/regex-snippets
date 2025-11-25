export interface SearchItem {
  link: string;
  label: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  { 
    link: '/', 
    label: 'Overview',
    keywords: ['overview', 'home', 'introduction', 'welcome', 'regex', 'snippets']
  },
  { 
    link: '/email', 
    label: 'Email',
    keywords: ['email', 'e-mail', 'mail', 'address', 'validation', '@', 'rfc5322']
  },
  { 
    link: '/phone', 
    label: 'Phone',
    keywords: ['phone', 'telephone', 'number', 'mobile', 'cell', 'contact']
  },
  { 
    link: '/date', 
    label: 'Date',
    keywords: ['date', 'day', 'month', 'year', 'calendar', 'time']
  },
  { 
    link: '/time', 
    label: 'Time',
    keywords: ['time', 'hour', 'minute', 'second', 'clock', 'am', 'pm']
  },
  { 
    link: '/alphanumeric', 
    label: 'Alphanumeric',
    keywords: ['alphanumeric', 'letters', 'numbers', 'characters', 'text']
  },
  { 
    link: '/text-length', 
    label: 'Text Length',
    keywords: ['text', 'length', 'characters', 'limit', 'min', 'max', 'count']
  },
  { 
    link: '/number-of-lines', 
    label: 'Number of Lines',
    keywords: ['lines', 'rows', 'count', 'text', 'multiline']
  },
  { 
    link: '/affirmation', 
    label: 'Affirmation',
    keywords: ['affirmation', 'yes', 'no', 'true', 'false', 'boolean', 'confirmation']
  },
  { 
    link: '/social-security-number', 
    label: 'Social Security',
    keywords: ['social', 'security', 'number', 'ssn', 'identification', 'id']
  },
  { 
    link: '/isbn', 
    label: 'ISBN',
    keywords: ['isbn', 'book', 'number', 'international', 'standard']
  },
  { 
    link: '/zip-code', 
    label: 'ZIP Code',
    keywords: ['zip', 'code', 'postal', 'address', 'location']
  },
  { 
    link: '/credit-debit-card-number', 
    label: 'Credit/Debit Card',
    keywords: ['credit', 'debit', 'card', 'number', 'payment', 'visa', 'mastercard', 'amex']
  },
  { 
    link: '/numbers', 
    label: 'Numbers',
    keywords: ['numbers', 'numeric', 'digits', 'integer', 'decimal', 'float']
  },
  { 
    link: '/domain', 
    label: 'Domain',
    keywords: ['domain', 'website', 'url', 'web', 'site', 'address']
  },
  { 
    link: '/url-and-path', 
    label: 'URL & Path',
    keywords: ['url', 'path', 'link', 'web', 'address', 'http', 'https']
  },
  { 
    link: '/ip-address', 
    label: 'IP Address',
    keywords: ['ip', 'address', 'network', 'ipv4', 'ipv6', 'internet']
  },
  { 
    link: '/unix-path', 
    label: 'Unix Path',
    keywords: ['unix', 'path', 'file', 'directory', 'linux', 'mac', 'filesystem']
  },
  { 
    link: '/windows-path', 
    label: 'Windows Path',
    keywords: ['windows', 'path', 'file', 'directory', 'drive', 'filesystem']
  },
];
