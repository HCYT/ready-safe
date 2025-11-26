import React from 'react';
import { manualData } from '../data/manualContent';
import { Brain } from 'lucide-react';

const MentalPreparedness: React.FC = () => {
    const data = manualData.find(d => d.id === 'mental');

    if (!data || !data.content) return null;

    return (
        <div className="container section animate-fade-in">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="page-header">
                    <div className="hero-icon" style={{ color: '#9333ea', backgroundColor: '#f3e8ff' }}>
                        <Brain size={48} />
                    </div>
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.description}</p>
                </div>

                <div className="grid">
                    {data.content.subsections.map((sub, index) => (
                        <div key={index} className="card">
                            <h2 className="card-title" style={{ paddingBottom: '0.5rem', borderBottom: '1px solid var(--c-border)' }}>
                                {sub.title}
                            </h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                                {sub.content?.split('\n').map((line, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--c-text-secondary)' }}>
                                        <span style={{ marginTop: '0.5rem', width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: '#c084fc', flexShrink: 0 }} />
                                        <span>{line.replace('- ', '')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MentalPreparedness;
