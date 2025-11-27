import React from 'react';
import { manualData } from '../data/manualContent';
import SEO from '../components/SEO';
import { pageSEO } from '../config/seo';
import { Phone, ExternalLink, PhoneCall } from 'lucide-react';

const EmergencyContacts: React.FC = () => {
    const data = manualData.find(d => d.id === 'emergency-contacts');
    const seo = pageSEO.emergencyContacts;

    if (!data || !data.content) return null;

    const renderContent = (content: string) => {
        const lines = content.split('\n');
        return lines.map((line, i) => {
            // Handle headers
            if (line.startsWith('### ')) {
                return <h3 key={i} style={{ fontSize: '1rem', fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--c-text-primary)' }}>{line.replace('### ', '')}</h3>;
            }
            // Handle list items with links [url] **text**
            if (line.startsWith('- [')) {
                const linkMatch = line.match(/^- \[([^\]]+)\] \*\*([^*]+)\*\*(.*)$/);
                if (linkMatch) {
                    const [, url, title, desc] = linkMatch;
                    const isTel = url.startsWith('tel:');
                    return (
                        <a
                            key={i}
                            href={url}
                            target={isTel ? undefined : '_blank'}
                            rel={isTel ? undefined : 'noopener noreferrer'}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.5rem',
                                padding: '0.75rem 1rem',
                                backgroundColor: isTel ? '#eff6ff' : '#f8fafc',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                border: isTel ? '1px solid #3b82f6' : '1px solid #e2e8f0',
                                transition: 'all 0.2s'
                            }}
                        >
                            {isTel ? (
                                <PhoneCall size={20} style={{ color: '#3b82f6', flexShrink: 0 }} />
                            ) : (
                                <ExternalLink size={16} style={{ color: '#64748b', flexShrink: 0 }} />
                            )}
                            <div style={{ flex: 1 }}>
                                <span style={{ fontWeight: 700, color: isTel ? '#1e40af' : 'var(--c-text-primary)' }}>{title}</span>
                                {desc && <span style={{ color: 'var(--c-text-secondary)' }}>{desc}</span>}
                            </div>
                        </a>
                    );
                }
            }
            // Handle list items with markdown links (e.g., - 🍎 [text](url))
            if (line.startsWith('- ')) {
                const content = line.substring(2);
                const linkMatch = content.match(/^(.*)?\[([^\]]+)\]\(([^)]+)\)(.*)$/);
                
                if (linkMatch) {
                    const [, prefix, linkText, url, suffix] = linkMatch;
                    return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span>{prefix}</span>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--c-primary)', fontWeight: 600, textDecoration: 'none' }}
                            >
                                {linkText}
                            </a>
                            <span style={{ color: 'var(--c-text-secondary)' }}>{suffix}</span>
                        </div>
                    );
                }
                
                const parts = content.split('**');
                return (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <div style={{ marginTop: '0.375rem', width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--c-primary)', flexShrink: 0 }} />
                        <div style={{ color: 'var(--c-text-secondary)' }}>
                            {parts.map((part, idx) =>
                                idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                            )}
                        </div>
                    </div>
                );
            }
            // Handle numbered items
            if (/^\d+\.\s/.test(line)) {
                const parts = line.split('**');
                return (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <div style={{ color: 'var(--c-text-secondary)' }}>
                            {parts.map((part, idx) =>
                                idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                            )}
                        </div>
                    </div>
                );
            }
            // Handle indented items
            if (line.startsWith('   - ')) {
                return (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.25rem', marginLeft: '1.5rem' }}>
                        <div style={{ marginTop: '0.375rem', width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--c-text-muted)', flexShrink: 0 }} />
                        <div style={{ color: 'var(--c-text-secondary)', fontSize: '0.9rem' }}>{line.substring(5)}</div>
                    </div>
                );
            }
            // Regular text
            if (line.trim()) {
                return <p key={i} style={{ color: 'var(--c-text-secondary)', marginBottom: '0.5rem' }}>{line}</p>;
            }
            return null;
        });
    };

    return (
        <div className="container section animate-fade-in">
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                path={seo.path}
            />
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="page-header">
                    <div className="hero-icon" style={{ color: 'var(--c-primary)', backgroundColor: '#eff6ff' }}>
                        <Phone size={48} />
                    </div>
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.description}</p>
                </div>

                {data.content.intro && (
                    <div className="alert-box" style={{ marginBottom: '1.5rem', backgroundColor: '#fef3c7', borderColor: '#f59e0b' }}>
                        <p style={{ color: '#92400e', fontWeight: 500 }}>{data.content.intro}</p>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {data.content.subsections.map((sub, index) => (
                        <div key={index} className="content-block">
                            <h2 className="block-title">{sub.title}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {sub.content && renderContent(sub.content)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmergencyContacts;
