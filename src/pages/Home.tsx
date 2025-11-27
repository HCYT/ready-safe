import React from 'react';
import { manualData } from '../data/manualContent';
import SectionCard from '../components/SectionCard';
import SEO from '../components/SEO';
import { pageSEO } from '../config/seo';
import { ShieldAlert } from 'lucide-react';

const Home: React.FC = () => {
    const seo = pageSEO.home;
    
    return (
        <div className="animate-fade-in">
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                path={seo.path}
            />
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-icon">
                        <ShieldAlert size={48} />
                    </div>
                    <h1 className="hero-title">
                        當危機來臨時
                        <span style={{ display: 'block', color: 'var(--c-primary)', marginTop: '0.5rem' }}>臺灣全民安全指引</span>
                    </h1>
                    <p className="hero-subtitle">
                        危機隨時可能發生，你準備好了嗎？<br />
                        只要逐步準備物資、學習自救知識，就能更有把握守護家人安全。
                    </p>
                    <div className="hero-actions">
                        <a href="#sections" className="btn btn-primary">
                            開始準備
                        </a>
                        <a
                            href="https://prepare.mnd.gov.tw/assets/pdf/manual.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            下載完整手冊 (PDF)
                        </a>
                    </div>
                </div>
            </section>

            {/* Sections Grid */}
            <section id="sections" className="section">
                <div className="container">
                    <h2 className="page-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        全民國防手冊重點
                    </h2>
                    <div className="grid">
                        {manualData.map((section) => (
                            <SectionCard
                                key={section.id}
                                title={section.title}
                                description={section.description}
                                iconName={section.icon}
                                path={section.path}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
