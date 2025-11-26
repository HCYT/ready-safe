import React, { useState, useEffect } from 'react';
import { Check, Square } from 'lucide-react';

interface ChecklistItemProps {
    label: string;
    description?: string;
    id: string; // Unique ID for persistence
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ label, description, id }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(`checklist-${id}`);
        if (saved) {
            setIsChecked(JSON.parse(saved));
        }
    }, [id]);

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
