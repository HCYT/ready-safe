import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SectionCardProps {
    title: string;
    description: string;
    iconName: string;
    path: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, iconName, path }) => {
    // Dynamically get icon component
    const Icon = (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.HelpCircle;

    return (
        <Link to={path} className="card">
            <div className="card-header">
                <div className="card-icon">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <p className="card-desc">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SectionCard;
