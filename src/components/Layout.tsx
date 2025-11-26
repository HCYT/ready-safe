import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Layout: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navItems = [
        { path: '/', label: '首頁' },
        { path: '/supplies', label: '物資準備' },
        { path: '/responses', label: '災害應對' },
        { path: '/casualty-care', label: '傷患處理' },
        { path: '/misinformation', label: '假資訊防範' },
        { path: '/mental', label: '心理準備' },
        { path: '/contributions', label: '貢獻一份力' },
    ];

    return (
        <div className="layout">
            <header className="navbar">
                <div className="container navbar-inner">
                    <Link to="/" className="nav-brand" onClick={closeMenu}>
                        <ShieldCheck size={32} />
                        <span>臺灣全民安全指引</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="nav-links">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="nav-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`mobile-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <p style={{ marginBottom: '1rem' }}>
                        資料來源：<a href="https://prepare.mnd.gov.tw" target="_blank" rel="noopener noreferrer">全民國防手冊</a>
                    </p>
                    <p className="text-sm">
                        本網站為整理與推廣用途，詳細資訊請以國防部官方發布為準。
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
