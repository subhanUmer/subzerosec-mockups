// Single source of truth for shared navigation, services and footer content.

export const SERVICES = [
  { key: 'vapt',           href: 'service-vapt.html',                    icon: 'vapt',            title: 'Penetration Testing (VAPT)', blurb: 'Identify exploitable vulnerabilities before attackers do.' },
  { key: 'red-teaming',    href: 'service-red-teaming.html',             icon: 'red-team',        title: 'Red Teaming',                blurb: 'Simulate real adversaries to test resilience.' },
  { key: 'threat-hunting', href: 'service-threat-hunting.html',          icon: 'threat-hunting',  title: 'Threat Hunting',             blurb: 'Proactively uncover hidden threats.' },
  { key: 'osint',          href: 'service-osint.html',                   icon: 'osint',           title: 'OSINT & Exposure',           blurb: 'Discover exposed assets and intelligence leaks.' },
  { key: 'attack-surface', href: 'service-attack-surface-analysis.html', icon: 'attack-surface',  title: 'Attack Surface Analysis',    blurb: 'Understand what attackers see.' },
] as const;

// Top-level nav (Services is the mega-menu trigger, rendered separately).
export const NAV = [
  { key: 'case-studies', href: 'case-studies.html', label: 'Case Studies' },
  { key: 'insights',     href: 'insights.html',     label: 'Insights' },
  { key: 'company',      href: 'company.html',      label: 'Company' },
  { key: 'trust',        href: 'trust.html',        label: 'Trust' },
] as const;

export const FOOTER_COLS = [
  { h: 'Services', links: [
    { href: 'service-vapt.html', t: 'Penetration Testing' },
    { href: 'service-red-teaming.html', t: 'Red Teaming' },
    { href: 'service-threat-hunting.html', t: 'Threat Hunting' },
    { href: 'service-osint.html', t: 'OSINT' },
    { href: 'service-attack-surface-analysis.html', t: 'Attack-Surface Analysis' },
  ]},
  { h: 'Company', links: [
    { href: 'company.html', t: 'About' },
    { href: 'team.html', t: 'Team' },
    { href: 'careers.html', t: 'Careers' },
    { href: 'case-studies.html', t: 'Case Studies' },
  ]},
  { h: 'Resources', links: [
    { href: 'insights.html', t: 'Insights' },
    { href: 'trust.html', t: 'Trust & Compliance' },
    { href: 'contact.html', t: 'Contact' },
    { href: 'contact.html#book', t: 'Book Assessment' },
  ]},
  { h: 'Legal', links: [
    { href: 'privacy.html', t: 'Privacy Policy' },
    { href: 'terms.html', t: 'Terms of Service' },
    { href: 'cookies.html', t: 'Cookie Policy' },
  ]},
] as const;

export const SOCIAL = [
  { href: 'https://www.linkedin.com/company/subzerosec', label: 'LinkedIn' },
  { href: 'https://x.com/subzerosec', label: 'X' },
  { href: 'https://github.com/subzerosec', label: 'GitHub' },
] as const;
