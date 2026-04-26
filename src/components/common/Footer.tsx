import Link from 'next/link';
import { siteConfig } from '@/config/site';
import OrbyzaLogo from './OrbyzaLogo';

const Footer = () => {
    const footerLinks = {
        capabilities: [
            { label: 'SEO Services', href: '/services/seo' },
            { label: 'SEM / Google Ads', href: '/services/sem' },
            { label: 'Social Media', href: '/services/social-media' },
            { label: 'Web Design', href: '/services/web-design' },
            { label: 'Content Marketing', href: '/services/content-marketing' }
        ],
        global: [
            { label: 'Delhi Division', href: '/delhi' },
            { label: 'Bangalore Hub', href: '/bangalore' },
            { label: 'USA Operations', href: '/usa' },
            { label: 'Canada Hub', href: '/canada' },
            { label: 'Europe Sector', href: '/europe' }
        ],
        structure: [
            { label: 'Orbyza Academy', href: '/courses' },
            { label: 'Success Proof', href: '/testimonials' },
            { label: 'Investment Tiers', href: '/pricing' },
            { label: 'FAQ Database', href: '/faq' },
            { label: 'Contact HQ', href: '/contact' }
        ],
        intelligence: [
            { label: 'Privacy Protocol', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' }
        ]
    };

    return (
        <footer className="bg-brand-secondary border-t border-brand-primary/10 py-24">
            <div className="container-max">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 mb-16">
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center">
                            <OrbyzaLogo height={52} />
                        </Link>
                        <p className="text-brand-text text-sm leading-relaxed max-w-sm">
                            {siteConfig.description} Strategic execution for Jaipur, Rajasthan and global markets.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-6">Capabilities</h4>
                        <ul className="space-y-3 text-sm text-brand-text">
                            {footerLinks.capabilities.map((s) => (
                                <li key={s.label}>
                                    <Link href={s.href} className="hover:text-brand-primary transition-colors">{s.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-6">Global</h4>
                        <ul className="space-y-3 text-sm text-brand-text">
                            {footerLinks.global.map((s) => (
                                <li key={s.label}>
                                    <Link href={s.href} className="hover:text-brand-primary transition-colors">{s.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-6">Structure</h4>
                        <ul className="space-y-3 text-sm text-brand-text">
                            {footerLinks.structure.map((c) => (
                                <li key={c.label}>
                                    <Link href={c.href} className="hover:text-brand-primary transition-colors">{c.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-brand-text">
                            {footerLinks.intelligence.map((s) => (
                                <li key={s.label}>
                                    <Link href={s.href} className="hover:text-brand-primary transition-colors">{s.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text/50 font-medium">
                    <div>
                        &copy; {new Date().getFullYear()} ORBYZA. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex gap-8 items-center">
                        <Link href={siteConfig.social.freelancer} target="_blank" className="hover:opacity-80 transition-opacity">
                           <span className="text-brand-primary font-black uppercase tracking-widest border border-brand-primary/30 px-3 py-1 bg-brand-primary/5">Elite Freelancer</span>
                        </Link>
                        <span>ISO 9001 CERTIFIED</span>
                        <span>GOOGLE PARTNER</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
