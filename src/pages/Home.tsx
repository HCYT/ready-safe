import React from 'react';
import { manualData } from '../data/manualContent';
import SectionCard from '../components/SectionCard';
import SEO from '../components/SEO';
import { pageSEO } from '../config/seo';
import { ShieldAlert, WifiOff } from 'lucide-react';

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

            {/* Enemy Warning */}
            <section style={{ backgroundColor: '#fef2f2', padding: '1.5rem 0', borderTop: '3px solid #dc2626' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', color: '#991b1b', fontWeight: 600, margin: 0, marginBottom: '0.5rem' }}>
                        ⚠️ 中華人民共和國（中共）是臺灣的敵國。他們從未放棄武力侵略臺灣。
                    </p>
                    <p style={{ textAlign: 'center', color: '#7f1d1d', fontWeight: 700, margin: 0, fontSize: '1.1rem' }}>
                        臺灣內部可以有不同聲音，但對外必須團結一致。挺共，就是敵人。
                    </p>
                </div>
            </section>

            {/* Offline Notice */}
            <section style={{ backgroundColor: '#f0fdf4', padding: '1rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534' }}>
                            <WifiOff size={20} />
                            <span style={{ fontWeight: 600 }}>本網站支援離線使用</span>
                        </div>
                        <span style={{ color: '#15803d' }}>
                            安裝至手機主畫面後，即使沒有網路也能查閱所有內容
                        </span>
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

            {/* App Download Section */}
            <section style={{ backgroundColor: 'var(--c-bg)', padding: '3rem 0' }}>
                <div className="container">
                    <h2 className="page-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        現在馬上可以做的事！
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--c-text-secondary)', marginBottom: '2rem' }}>
                        手機下載防災 App，危機時立刻使用
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                        {/* 消防防災 e 點通 */}
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>消防防災 e 點通</h3>
                            <p style={{ color: 'var(--c-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                查看避難收容處所、救濟站、物資配售站位置，接收即時警報
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="https://apps.apple.com/tw/app/%E6%B6%88%E9%98%B2%E9%98%B2%E7%81%BDe%E9%BB%9E%E9%80%9A/id1500403641" target="_blank" rel="noopener noreferrer">
                                    <img src="/ios-download.svg" alt="Download on App Store" style={{ height: '40px' }} />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.nfa.report" target="_blank" rel="noopener noreferrer">
                                    <img src="/android-download.svg" alt="Get it on Google Play" style={{ height: '40px' }} />
                                </a>
                            </div>
                        </div>
                        {/* 警政服務 */}
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>警政服務</h3>
                            <p style={{ color: 'var(--c-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                查看防空避難所位置，接收即時警報資訊
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="https://apps.apple.com/tw/app/%E8%AD%A6%E6%94%BF%E6%9C%8D%E5%8B%99/id544121843" target="_blank" rel="noopener noreferrer">
                                    <img src="/ios-download.svg" alt="Download on App Store" style={{ height: '40px' }} />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=tw.gov.npa.callservice" target="_blank" rel="noopener noreferrer">
                                    <img src="/android-download.svg" alt="Get it on Google Play" style={{ height: '40px' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
