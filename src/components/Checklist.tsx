import React, { useState } from 'react';
import { Check, Square } from 'lucide-react';

interface ChecklistItemProps {
    label: string;
    description?: string;
    id: string; // Unique ID for persistence
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ label, description, id }) => {
    // 使用 lazy initialization 從 localStorage 讀取初始值
    const [isChecked, setIsChecked] = useState(() => {
        const saved = localStorage.getItem(`checklist-${id}`);
        return saved ? JSON.parse(saved) : false;
    });

    const toggleCheck = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        localStorage.setItem(`checklist-${id}`, JSON.stringify(newState));
    };

    return (
        <div
            className={`checklist-item ${isChecked ? 'checked' : ''}`}
            onClick={toggleCheck}
        >
            <div className="checkbox">
                {isChecked ? <Check size={20} /> : <Square size={20} />}
            </div>
            <div>
                <div className="item-label">
                    {label}
                </div>
                {description && (
                    <div className="item-desc">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

interface ChecklistProps {
    title: string;
    items: { label: string; description?: string }[];
    category: string;
}

const Checklist: React.FC<ChecklistProps> = ({ title, items, category }) => {
    return (
        <div className="checklist-group">
            <h4 className="checklist-title">
                {title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {items.map((item, index) => (
                    <ChecklistItem
                        key={index}
                        label={item.label}
                        description={item.description}
                        id={`${category}-${title}-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Checklist;
