'use client'; 

import React, { useEffect } from 'react';
import styles from '../styles/About.module.css'; 

const AboutSection = () => {

    useEffect(() => {
        const textElement = document.getElementById("typewriter-text") as HTMLElement;
        const text: string = "Hello"; // Yazılacak metin
        let index: number = 0;
        let deleteIndex: number = text.length;
        let typing: boolean = true;

        // Yazma fonksiyonu
        const typeWriter = () => {
            if (typing && index < text.length) {
                textElement.innerHTML += text.charAt(index); // Her harfi ekle
                index++;
            } else if (!typing && deleteIndex >= 0) {
                textElement.innerHTML = text.substring(0, deleteIndex); // Harfleri sil
                deleteIndex--;
            }

            // Eğer yazma tamamlandıysa, silme işlemi başlasın
            if (index === text.length && typing) {
                typing = false; // Yazma bitince silme işlemine geç
            } else if (deleteIndex === 0 && !typing) {
                typing = true; // Silme tamamlanınca yazmaya başla
                index = 0; // Yazma işlemine başlamak için index'i sıfırla
                deleteIndex = text.length; // Silme işlemi için tekrar metnin uzunluğuna döndür
            }
        };

        // Typewriter fonksiyonunu belirli aralıklarla çalıştır
        const interval = setInterval(typeWriter, 150); // 150ms aralıkla çalışır

        // Sonrasında interval'i temizlemek için
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles['paragraf']}>
            <div className={styles['text-container']}>
                <div className="Typewriter" data-testid="typewriter-wrapper">
                    <span className="Typewriter__wrapper" id="typewriter-text"> </span>
                    <span className="Typewriter__cursor" id="cursor">|</span>
                </div>
            </div>
            <div >
                <img src="../media/ppp.jpg" alt="Profile Image" className={styles['profile-image']} />
            </div>
        </div>

    );


};

export default AboutSection;
