import React from 'react';
import Section from './Section';
import dukImage from '../assets/cattle.jpg'; 
const About = () => (
  <div className="max-w-4xl px-4 py-8 mx-auto">
    <Section title="Cultural Practices & Norms">
      We uphold the rich cultural norms of the Jieng, centered around cattle keeping, mutual respect, trust, and hygiene. Among the most celebrated elements of our tradition is the Dinka dance, especially as performed in Duk, Jonglei State. This dance is more than movement—it is a cultural heartbeat.

The Dinka dance is slow, deliberate, and rhythmic, often featuring a unique up-and-down motion from the knees, creating a wave-like flow through the body. One of the most iconic aspects is the hand gesture that mimics the <i><strong>horns of a bull</strong></i>—a powerful symbol of our connection to cattle, which are central to our identity and status. Dancers move with grace and pride, their bodies speaking a language older than memory, often synchronized with the deep beating of traditional drums.

<img
              src={dukImage}
              alt="cattle"
              className="w-full max-w-4xl mx-auto shadow-lg rounded-xl"
            />
            </Section>
    <Section title="Identity and Cattle Reverence">
    
The <strong>Dinka people of Duk (Hol), Pan Mabur</strong> in Jonglei State, South Sudan, hold a deep-rooted pride in their ancestral heritage—one that is beautifully woven into their everyday lives and customs. Central to this identity is the cultural reverence for <strong>cattle</strong>, which are not only a symbol of wealth and status, but also a sacred link to identity, poetry, and pride. It is no surprise that many children are named after <strong>cattle colors and patterns</strong>—names like <i>Ayen</i>, <i>Malual</i>, and others carry with them stories, beauty, and lineage.

Cattle are more than livestock—they are inspiration. The <strong>songs of our people are rich with praise for cattle</strong>, often sung with rhythm and emotion that celebrate their strength, elegance, and connection to the ancestors. Whether in times of joy, courtship, or reflection, these songs create a bridge between the generations.

    </Section>
    <Section title="Traditional Dinka Family Life">
      
The traditional Dinka home reflects values of <strong>unity, harmony, and personal dignity</strong>. In a typical family setting, <strong>girls stay close to their mothers</strong> until they are mature and ready to manage their own space—learning skills, traditions, and womanhood. <strong>Boys are also given their own space</strong>, fostering respect, responsibility, and the strong sense of privacy that is a hallmark of Dinka upbringing.

 
            </Section>
</div>
);

export default About;
