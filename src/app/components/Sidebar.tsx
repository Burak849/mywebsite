import React, { useState, useEffect, useCallback, useMemo } from 'react';

import {
    FaHome,
    FaInfoCircle,
    FaLaptopCode,
    FaBook,
    FaProjectDiagram,
    FaAngleRight,
    FaEnvelope,
} from "react-icons/fa";
import styled from 'styled-components';

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const Sidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
    

    const navItems: NavItem[] = useMemo(() => [
        { id: "home", label: "Home", icon: <FaHome /> },
        { id: "about", label: "About", icon: <FaInfoCircle /> },
        { id: "education", label: "Education", icon: <FaBook /> },
        { id: "skills", label: "Skills", icon: <FaLaptopCode /> },
        { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
        { id: "contact", label: "Contacts", icon: <FaEnvelope /> },
    ], []);  

    const resetHideTimeout = useCallback(() => {
        if (hideTimeout) clearTimeout(hideTimeout);
        setHideTimeout(setTimeout(() => setIsVisible(false), 5000));
    }, [hideTimeout]);

    const handleScroll = useCallback(() => {
        setIsVisible(true);
        resetHideTimeout();
        const sections = document.querySelectorAll<HTMLElement>("section");
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach((section) => {
            const offsetTop = section.offsetTop;
            const offsetBottom = offsetTop + section.offsetHeight;
            if (scrollPos >= offsetTop - 50 && scrollPos < offsetBottom - 50) {
                const sectionId = section.getAttribute("id") || "";
                const sectionLabel = navItems.find(
                    (item) => item.id === sectionId
                )?.label;

                setActiveSection(sectionId);

                if (sectionLabel) {
                    document.title = "Burak Kurtulush | " + sectionLabel;
                }
            }
        });
    }, [resetHideTimeout, navItems]); 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (hideTimeout) clearTimeout(hideTimeout);
            
        };
    }, [hideTimeout, handleScroll]);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        resetHideTimeout();
    };

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
        resetHideTimeout();
    };

    return (
        <StyledWrapper>
            <div className={`sidebar ${isVisible ? "" : "collapsed"}`} style={{ fill: 'white' }}>
                <div className="toggle-button" onClick={toggleSidebar}>
                    {isVisible ? " " : <FaAngleRight />}
                </div>
                {isVisible && (
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                                <a href={`#${item.id}`} onClick={() => handleClick(item.id)}>
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </StyledWrapper>
    );
};

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
        @media (max-width:1025px){
        .sidebar{
        width:3rem;
        }
        .sidebar li a {
        font-size:1.5em;
        }

        }



`;

export default Sidebar;
