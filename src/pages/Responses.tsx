import React from 'react';
import { manualData } from '../data/manualContent';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';
import { pageSEO } from '../config/seo';

// I'll handle simple markdown manually in the component or just render text with newlines.
// Actually, I'll just use a helper to render the content since I have simple markdown like **bold** and lists.
// Or I can install react-markdown. It's better.
// Let's try to do a simple parser for now to avoid extra deps if possible, or just install it.
// I'll install react-markdown later if needed, but for now I'll just use a simple split and render.

const SimpleMarkdown: React.FC<{ content: string }> = ({ content }) => {
    if (!content) return null;

    // Helper to render text with bold syntax (**text**)
    const renderTextWithBold = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} style={{ fontWeight: 700, color: 'var(--c-text-primary)' }}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    // Split by newlines
    const lines = content.split('\n');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {lines.map((line, i) => {
                const trimmedLine = line.trim();

                if (trimmedLine.startsWith('#### ')) {
                    return <h4 key={i} style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.75rem', marginBottom: '0.25rem', color: 'var(--c-text-primary)' }}>{trimmedLine.replace('#### ', '')}</h4>;
                }

                if (trimmedLine.startsWith('### ')) {
                    return <h3 key={i} style={{ fontSize: '1.125rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--c-text-primary)' }}>{trimmedLine.replace('### ', '')}</h3>;
                }

                // Handle indented bullets or normal bullets
                const bulletMatch = line.match(/^(\s*)-\s+(.*)/);
                if (bulletMatch) {
                    const [, indent, text] = bulletMatch;
                    const indentLevel = indent.length / 2; // Assuming 2 spaces per indent
                    return (
                        <div key={i} style={{
                            marginLeft: `${1 + indentLevel}rem`,
                            display: 'flex',
                            gap: '0.5rem',
                            color: 'var(--c-text-secondary)'
                        }}>
                            <span style={{ minWidth: '0.5rem' }}>•</span>
                            <span>{renderTextWithBold(text)}</span>
                        </div>
                    );
                }

                // Handle numbered lists
                const numberMatch = line.match(/^(\d+)\.\s+(.*)/);
                if (numberMatch) {
                    const [, number, text] = numberMatch;
                    return (
                        <div key={i} style={{ marginLeft: '1rem', marginBottom: '0.5rem', display: 'flex', gap: '0.25rem', color: 'var(--c-text-secondary)' }}>
                            <span style={{ fontWeight: 700, minWidth: '1.5rem', color: 'var(--c-text-primary)' }}>{number}.</span>
                            <span>{renderTextWithBold(text)}</span>
                        </div>
                    );
                }

                if (!trimmedLine) return null;

                return <p key={i} style={{ color: 'var(--c-text-secondary)' }}>{renderTextWithBold(line)}</p>;
            })}
        </div>
    );
};

const Responses: React.FC = () => {
    const data = manualData.find(d => d.id === 'responses');
    const seo = pageSEO.responses;

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
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.description}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {data.content.subsections.map((sub, index) => (
                        <Accordion key={index} title={sub.title} defaultOpen={index === 0}>
                            <SimpleMarkdown content={sub.content || ''} />
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Responses;
