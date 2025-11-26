import React from 'react';
import { manualData } from '../data/manualContent';
import { Users } from 'lucide-react';

const Contributions: React.FC = () => {
    const data = manualData.find(d => d.id === 'contributions');

    if (!data || !data.content) return null;

    return (
        <div className="container section animate-fade-in">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="page-header">
                    <div className="hero-icon" style={{ color: 'var(--c-success)', backgroundColor: '#f0fdf4' }}>
                        <Users size={48} />
                    </div>
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.description}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {data.content.subsections.map((sub, index) => (
                        <div key={index} className="content-block">
                            <h2 className="block-title">{sub.title}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {sub.content?.split('\n').map((line, i) => {
                                    const parts = line.split('**');
                                    return (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                            <div style={{ marginTop: '0.375rem', width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--c-success)', flexShrink: 0 }} />
                                            <div style={{ color: 'var(--c-text-secondary)' }}>
                                                {parts.map((part, idx) =>
                                                    idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contributions;
