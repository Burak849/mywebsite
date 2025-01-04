import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import {
    FaHome,
    FaInfoCircle,
    FaLaptopCode,
    FaBook,
    FaProjectDiagram,
    FaAngleRight,
    FaEnvelope,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import styled from 'styled-components';

interface NavItem {
    id: string;
    label: string;
    icon: JSX.Element;
}

const Sidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
    const [atEnd, setAtEnd] = useState<boolean>(false);
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(true);
            resetHideTimeout();
            const sections = document.querySelectorAll<HTMLElement>("section");
            const scrollPos =
                window.pageYOffset || document.documentElement.scrollTop;

            sections.forEach((section, i) => {
                const offsetTop = section.offsetTop;
                const offsetBottom = offsetTop + section.offsetHeight;

                if (scrollPos >= offsetTop - 50 && scrollPos < offsetBottom - 50) {
                    const sectionId = section.getAttribute("id") || "";
                    const sectionLabel = navItems.find(
                        (item) => item.id === sectionId
                    )?.label;

                    setActiveSection(sectionId);

                    if (debounceTimeout) clearTimeout(debounceTimeout);
                    setDebounceTimeout(
                        setTimeout(() => {
                            document.title = "Burak Kurtulush | " + sectionLabel;
                            window.history.pushState(null, "", `#${sectionId}`);
                        }, 500)
                    );

                    if (i === sections.length - 1) setAtEnd(true);
                    else setAtEnd(false);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (hideTimeout) clearTimeout(hideTimeout);
            if (debounceTimeout) clearTimeout(debounceTimeout);
        };
    }, [hideTimeout, debounceTimeout]);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        resetHideTimeout();
    };

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
        resetHideTimeout();
    };

    const resetHideTimeout = () => {
        if (hideTimeout) clearTimeout(hideTimeout);
        setHideTimeout(setTimeout(() => setIsVisible(false), 5000));
    };

    const navItems: NavItem[] = [
        { id: "home", label: "Home", icon: <FaHome /> },
        { id: "about", label: "About", icon: <FaInfoCircle /> },
        { id: "education", label: "Education", icon: <FaBook /> },
        { id: "skills", label: "Skills", icon: <FaLaptopCode /> },
        { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
        { id: "contact", label: "Contacts", icon: <FaEnvelope /> },
    ];

    const handleNextSection = () => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
        const currentIndex = sections.findIndex(
            (section) => section.getAttribute("id") === activeSection
        );

        if (currentIndex >= 0 && currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            nextSection.scrollIntoView({ behavior: "smooth" });
        } else if (atEnd) {
            handleClick("home");
        }
    };

    return (
        <>
            <StyledWrapper>
                <div className={`sidebar ${isVisible ? "" : "collapsed"}`} style={{ fill: 'white' }}>
                    <div className="toggle-button" style={{ fill: 'white' }} onClick={toggleSidebar}>
                        {isVisible ? " " : <FaAngleRight />}
                    </div>
                    {isVisible && (
                        <ul>
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={activeSection === item.id ? "active" : ""}
                                >
                                    <a href={`#${item.id}`} onClick={() => handleClick(item.id)}>
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </StyledWrapper>
        </>
    );

}
const StyledWrapper = styled.div`
.sidebar {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 5rem;
    border-radius: 0 50px 50px 0;
    padding: 10px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    background:#041423;
    transition: width 0.3s ease;
}

    .sidebar.collapsed {
        width: 2rem;
    }

    .sidebar .toggle-button {
        cursor: pointer;
        font-size: 2em;
        svg

{
    fill: white;
}

}

.sidebar ul {
    display: flex;
    gap: 1rem;
    flex-direction:column;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    margin: 15px 0;
    opacity: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
    svg
{
    fill: white;
}

}

.sidebar li.active {
    transform: scale(1.5);
    opacity: 1;
}

.sidebar li a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2em;
}

    .sidebar li a .label {
        display: none;
        font-size: 0.8em;
        margin-top: 5px;
    }

.sidebar li.active a .label {
    display: block;
}

.sidebar li:hover {
    opacity: 1;
}

.sidebar li:not(.active) {
    transform: scale(0.8);
    opacity: 1;
    height:2em;
    width:2rem;
}

@media screen and (max-width: 768px) {
    .sidebar {
        width: 30px;
    }

        .sidebar.collapsed {
            width: 10px;
        }

        .sidebar li a {
            font-size: 1.2em;
        }

        .sidebar li.active a .label {
            display: none;
        }
}



`;

export default Sidebar;
