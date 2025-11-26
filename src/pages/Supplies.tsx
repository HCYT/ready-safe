import React, { useState } from 'react';
import { manualData } from '../data/manualContent';
import Checklist from '../components/Checklist';
import { Backpack, Home as HomeIcon } from 'lucide-react';

const Supplies: React.FC = () => {
    const data = manualData.find(d => d.id === 'supplies');
    const [activeTab, setActiveTab] = useState<'household' | 'personal'>('household');

    if (!data || !data.content) return null;

    const householdData = data.content.subsections[0];
    const personalData = data.content.subsections[1];

    return (
        <div className="container section animate-fade-in">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="page-header">
                    <h1 className="page-title">{data.title}</h1>
                    <p className="page-desc">{data.content.intro}</p>
                </div>

                {/* Tabs */}
                <div className="tabs">
                    <button
                        className={`tab-btn ${activeTab === 'household' ? 'active' : ''}`}
                        onClick={() => setActiveTab('household')}
                    >
                        <HomeIcon size={16} />
                        日常居家儲備
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
                        onClick={() => setActiveTab('personal')}
                    >
                        <Backpack size={16} />
                        緊急避難包
                    </button>
                </div>

                {/* Content */}
                <div className="content-block">
                    <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--c-border)' }}>
                        <h2 className="block-title" style={{ border: 'none', padding: 0, marginBottom: '0.5rem' }}>
                            {activeTab === 'household' ? householdData.title : personalData.title}
                        </h2>
                        <p style={{ color: 'var(--c-text-secondary)' }}>
                            {activeTab === 'household' ? householdData.content : personalData.content}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {(activeTab === 'household' ? householdData : personalData).subsections?.map((sub, index) => (
                            <Checklist
                                key={index}
                                title={sub.title}
                                items={sub.items || []}
                                category={activeTab}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supplies;
