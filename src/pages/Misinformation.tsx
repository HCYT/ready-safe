import React from 'react';
import { manualData } from '../data/manualContent';
import { EyeOff, AlertTriangle } from 'lucide-react';

const Misinformation: React.FC = () => {
    const data = manualData.find(d => d.id === 'misinformation');

    if (!data || !data.content) return null;

    return (
        <div className="container section animate-fade-in">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="page-header">
                    <div className="hero-icon" style={{ color: 'var(--c-warning)', backgroundColor: '#fffbeb' }}>
                        <EyeOff size={48} />
                    </div>
                    <h1 className="page-title">{data.title}</h1>
                    <p style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--c-text-primary)' }}>{data.content.intro}</p>
                    <p className="page-desc">{data.description}</p>
                </div>

                <div className="content-block" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.05 }}>
                        <AlertTriangle size={256} />
                    </div>

                    <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {data.content.subsections.map((sub, index) => (
                            <div key={index}>
                                <h2 className="block-title">{sub.title}</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.8, color: 'var(--c-text-secondary)' }}>
                                    {sub.content?.split('\n').map((line, i) => {
                                        // 跳過空行
                                        if (!line.trim()) return null;
                                        
                                        // 處理 ### 標題
                                        if (line.startsWith('### ')) {
                                            return (
                                                <h3 key={i} style={{ fontSize: '1rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--c-text-primary)' }}>
                                                    {line.replace('### ', '')}
                                                </h3>
                                            );
                                        }
                                        
                                        // 處理列表項目
                                        if (line.startsWith('- ')) {
                                            const parts = line.substring(2).split('**');
                                            return (
                                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                                    <div style={{ marginTop: '0.5rem', width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--c-warning)', flexShrink: 0 }} />
                                                    <div>
                                                        {parts.map((part, idx) =>
                                                            idx % 2 === 1 ? <span key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)', backgroundColor: '#fffbeb', padding: '0 0.25rem', borderRadius: '0.25rem' }}>{part}</span> : part
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        }
                                        
                                        // 處理編號項目
                                        if (/^\d+\.\s/.test(line)) {
                                            const parts = line.split('**');
                                            return (
                                                <div key={i} style={{ marginBottom: '0.5rem' }}>
                                                    {parts.map((part, idx) =>
                                                        idx % 2 === 1 ? <span key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)', backgroundColor: '#fffbeb', padding: '0 0.25rem', borderRadius: '0.25rem' }}>{part}</span> : part
                                                    )}
                                                </div>
                                            );
                                        }
                                        
                                        // 處理粗體段落
                                        const parts = line.split('**');
                                        return (
                                            <p key={i} style={{ marginBottom: '0.5rem' }}>
                                                {parts.map((part, idx) =>
                                                    idx % 2 === 1 ? <span key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)', backgroundColor: '#fffbeb', padding: '0 0.25rem', borderRadius: '0.25rem' }}>{part}</span> : part
                                                )}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--c-bg)', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
                    <p style={{ color: 'var(--c-text-secondary)', marginBottom: '1rem' }}>查證管道</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://www.ey.gov.tw/Page/5519E969E8931E4E" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ backgroundColor: 'white' }}>
                            行政院即時新聞澄清專區
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Misinformation;
