import React from 'react';
import { manualData } from '../data/manualContent';
import SEO from '../components/SEO';
import { pageSEO } from '../config/seo';
import { Users } from 'lucide-react';

const Contributions: React.FC = () => {
    const data = manualData.find(d => d.id === 'contributions');
    const seo = pageSEO.contributions;

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
                    <div className="hero-icon" style={{ color: 'var(--c-success)', backgroundColor: '#f0fdf4' }}>
                        <Users size={48} />
                    </div>
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.description}</p>
                </div>

                {data.content.intro && (
                    <p style={{ textAlign: 'center', fontSize: '1.125rem', color: 'var(--c-text-secondary)', marginBottom: '2rem' }}>
                        {data.content.intro}
                    </p>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {data.content.subsections.map((sub, index) => (
                        <div key={index} className="content-block">
                            <h2 className="block-title">{sub.title}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {sub.content?.split('\n').map((line, i) => {
                                    // 跳過空行
                                    if (!line.trim()) return null;
                                    
                                    // 處理 ### 標題
                                    if (line.startsWith('### ')) {
                                        return (
                                            <h3 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--c-text-primary)' }}>
                                                {line.replace('### ', '')}
                                            </h3>
                                        );
                                    }
                                    
                                    // 處理 📌 連結行
                                    if (line.startsWith('📌 ')) {
                                        const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
                                        if (linkMatch) {
                                            return (
                                                <a
                                                    key={i}
                                                    href={linkMatch[2]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary"
                                                    style={{ alignSelf: 'flex-start', marginTop: '0.5rem', marginBottom: '0.5rem' }}
                                                >
                                                    {linkMatch[1]}
                                                </a>
                                            );
                                        }
                                    }
                                    
                                    // 處理列表項目（含連結）
                                    if (line.startsWith('- ')) {
                                        const content = line.substring(2);
                                        const linkMatch = content.match(/^(.*)?\[([^\]]+)\]\(([^)]+)\)(.*)$/);
                                        
                                        if (linkMatch) {
                                            return (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                                    <span>{linkMatch[1]}</span>
                                                    <a
                                                        href={linkMatch[3]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: 'var(--c-primary)', fontWeight: 600 }}
                                                    >
                                                        {linkMatch[2]}
                                                    </a>
                                                    <span>{linkMatch[4]}</span>
                                                </div>
                                            );
                                        }
                                        
                                        const parts = content.split('**');
                                        return (
                                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                                <div style={{ marginTop: '0.375rem', width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--c-success)', flexShrink: 0 }} />
                                                <div style={{ color: 'var(--c-text-secondary)' }}>
                                                    {parts.map((part, idx) =>
                                                        idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }
                                    
                                    // 處理粗體文字段落
                                    const parts = line.split('**');
                                    return (
                                        <p key={i} style={{ color: 'var(--c-text-secondary)', marginBottom: '0.5rem' }}>
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

export default Contributions;
