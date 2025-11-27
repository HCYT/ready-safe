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
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {sub.content?.split('\n').map((line, i) => {
                                    // 跳過空行
                                    if (!line.trim()) return null;
                                    
                                    // 處理 ### 標題
                                    if (line.startsWith('### ')) {
                                        return (
                                            <h3 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.25rem', color: 'var(--c-text-primary)' }}>
                                                {line.replace('### ', '')}
                                            </h3>
                                        );
                                    }
                                    
                                    // 處理 #### 標題
                                    if (line.startsWith('#### ')) {
                                        return (
                                            <h4 key={i} style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.75rem', marginBottom: '0.25rem', color: 'var(--c-text-primary)' }}>
                                                {line.replace('#### ', '')}
                                            </h4>
                                        );
                                    }
                                    
                                    // 處理列表項目
                                    if (line.startsWith('- ')) {
                                        const parts = line.substring(2).split('**');
                                        return (
                                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginLeft: '0.5rem' }}>
                                                <div style={{ marginTop: '0.5rem', width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--c-danger)', flexShrink: 0 }} />
                                                <div style={{ color: 'var(--c-text-secondary)' }}>
                                                    {parts.map((part, idx) =>
                                                        idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }
                                    
                                    // 處理編號項目
                                    if (line.match(/^\d+\. /)) {
                                        const parts = line.split('**');
                                        return (
                                            <div key={i} style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
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
                                    
                                    // 處理警告文字
                                    if (line.startsWith('⚠️')) {
                                        return (
                                            <div key={i} style={{ marginTop: '0.5rem', padding: '0.75rem 1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', color: '#92400e' }}>
                                                {line}
                                            </div>
                                        );
                                    }
                                    
                                    // 一般段落
                                    const parts = line.split('**');
                                    return (
                                        <p key={i} style={{ color: 'var(--c-text-secondary)' }}>
                                            {parts.map((part, idx) =>
                                                idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                                            )}
                                        </p>
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

export default CasualtyCare;
