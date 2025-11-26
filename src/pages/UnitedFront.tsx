import React from 'react';
import { manualData } from '../data/manualContent';
import { Shield, AlertTriangle } from 'lucide-react';

const UnitedFront: React.FC = () => {
    const data = manualData.find(d => d.id === 'united-front');

    if (!data || !data.content) return null;

    const renderContent = (content: string) => {
        const lines = content.split('\n');
        return lines.map((line, i) => {
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
                        <div style={{ marginTop: '0.375rem', width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#dc2626', flexShrink: 0 }} />
                        <div style={{ color: 'var(--c-text-secondary)' }}>
                            {parts.map((part, idx) =>
                                idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                            )}
                        </div>
                    </div>
                );
            }

            // 處理粗體段落
            const parts = line.split('**');
            return (
                <p key={i} style={{ color: 'var(--c-text-secondary)', marginBottom: '0.5rem' }}>
                    {parts.map((part, idx) =>
                        idx % 2 === 1 ? <strong key={idx} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part}</strong> : part
                    )}
                </p>
            );
        });
    };

    return (
        <div className="container section animate-fade-in">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="page-header">
                    <div className="hero-icon" style={{ color: '#dc2626', backgroundColor: '#fef2f2' }}>
                        <Shield size={48} />
                    </div>
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.description}</p>
                </div>

                {data.content.intro && (
                    <div className="alert-box" style={{ marginBottom: '1.5rem', backgroundColor: '#fef2f2', borderColor: '#dc2626' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <AlertTriangle size={24} style={{ color: '#dc2626', flexShrink: 0, marginTop: '0.125rem' }} />
                            <p style={{ color: '#991b1b', fontWeight: 500 }}>{data.content.intro}</p>
                        </div>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {data.content.subsections.map((sub, index) => (
                        <div key={index} className="content-block" style={{ 
                            borderLeft: index === data.content!.subsections.length - 1 ? '4px solid #dc2626' : undefined,
                            backgroundColor: index === data.content!.subsections.length - 1 ? '#fef2f2' : undefined
                        }}>
                            <h2 className="block-title">{sub.title}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {sub.content && renderContent(sub.content)}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#1e3a5f', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
                    <p style={{ color: 'white', fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                        自由民主並非偶然
                    </p>
                    <p style={{ color: '#94a3b8' }}>
                        而是無數臺灣人犧牲、爭取而得。我們不會向侵略低頭。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnitedFront;
