import React from 'react';
import { manualData } from '../data/manualContent';
import SEO from '../components/SEO';
import { pageSEO } from '../config/seo';
import { HeartPulse } from 'lucide-react';

const CasualtyCare: React.FC = () => {
    const data = manualData.find(d => d.id === 'casualty-care');
    const seo = pageSEO.casualtyCare;

    if (!data || !data.content) return null;

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
                    <div className="hero-icon" style={{ color: 'var(--c-danger)', backgroundColor: '#fef2f2' }}>
                        <HeartPulse size={48} />
                    </div>
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.description}</p>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {data.content.subsections.map((sub, index) => (
                        <div key={index} className="content-block">
                            <h2 className="block-title">
                                {sub.title}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {sub.content?.split('\n').map((line, i) => {
                                    if (line.match(/^\d+\. /)) {
                                        const parts = line.split('**');
                                        return (
                                            <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                                <div style={{ flexShrink: 0, width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#fef2f2', color: 'var(--c-danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                                    {line.match(/^\d+/)?.[0]}
                                                </div>
                                                <div style={{ paddingTop: '0.25rem' }}>
                                                    {parts.map((part, idx) =>
                                                        idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, display: 'block', marginBottom: '0.25rem', color: 'var(--c-text-primary)' }}>{part}</strong> : <span key={idx} style={{ color: 'var(--c-text-secondary)' }}>{part.replace(/^\d+\. /, '')}</span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }
                                    return <p key={i} style={{ color: 'var(--c-text-secondary)', paddingLeft: '3rem' }}>{line}</p>;
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CasualtyCare;
