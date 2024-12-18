import React from 'react';
import styles from '../styles/Experience.module.css';
import { relative } from 'path';

const ExperienceSection = () => {
    return (

        <div style={{ height: '90vh', width:'auto' }}>
            <h1 style={{ position: 'relative', textAlign: 'center', fontSize: '5vh', display: 'flex', justifyContent: 'center', color: 'white' }}>About me</h1>
        <div className={styles['spesifik']}>


                <img src="../media/about-bg.gif" alt="About BG" className={styles['gif']} />
                <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2vh' }} >
                    Lorem ipsum dolor sit amet. Sit provident nemo qui dicta assumenda est optio ipsa et rerum repudiandae ab asperiores repudiandae. Id fuga aliquid in ipsam eveniet et exercitationem perferendis est saepe dolorem ab laudantium sint et minus dolor. Et sunt saepe qui consectetur sint ut cupiditate dolorem. Hic repellendus neque ut sint libero ut explicabo nihil eos consequatur nesciunt.

                    Eos incidunt natus et corporis atque qui dolore sint ex velit illo aut delectus iure et galisum impedit. Est dolores mollitia est voluptatem perferendis ad nemo libero qui possimus omnis? Et voluptatem aspernatur et dignissimos maxime sed dolores recusandae et voluptates nisi At quidem galisum? Est eius labore At voluptatum aliquid est quia quia At ducimus deleniti.

                    Aut aliquid ipsa aut porro doloremque et delectus debitis et repellendus dolore ut animi facere in aperiam quis est aliquid sequi. Est laboriosam rerum eum dolores consequatur qui fugiat tenetur. Quo molestiae perspiciatis et nobis repellat sed sapiente recusandae et quis galisum est debitis delectus non dignissimos sapiente in quos quisquam. Sed odit ullam aut omnis possimus sed quia quisquam id reprehenderit quasi eos reprehenderit magni qui optio deleniti ex nulla quaerat?

                </p>

            
        </div>
        </div>

        
    );
};

export default ExperienceSection;
