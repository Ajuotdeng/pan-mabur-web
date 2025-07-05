import React from 'react';
import Section from './Section';
import dukImage from '../assets/cattle.jpg';
import maburImage from '../assets/family2.jpg';

const About = () => (
  <div className="max-w-4xl px-4 py-8 mx-auto">
    <Section title="Pan Mabur Origin">
      <div className="bg-[#fef6e4] min-h-screen px-4 py-10">
        <h2 className="mb-8 text-3xl font-bold leading-relaxed text-center text-blue-800 md:text-4xl font-inter">
          Pan Mabur: A Legacy of Kinship
        </h2>
        <img
          src={maburImage}
          alt="Pan Mabur family"
          className="w-full max-w-4xl mx-auto shadow-lg rounded-xl"
        />
        <p className="mt-6">
          The Pan Mabur community traces its origins to the expansive plains of Duk County in Jonglei State, South Sudan. Historically part of the larger Jieng (Dinka) ethnic group, the Pan Mabur Ajuot people were traditionally semi-nomadic pastoralists, deeply rooted in cattle keeping and communal life. Oral history tells of their migration across the Nile valleys in search of greener pastures, a journey shaped by resilience, survival, and unity.
          Settling in areas like Padiet and Mareng, the Pan Mabur established strongholds based on kinship and social cooperation. The name "Pan Mabur" literally translates to “House of Mabur,” symbolizing a united lineage tied by blood and tradition. It is said that Mabur, the ancestral patriarch, was a man of strength, wisdom, and visionary leadership—traits that continue to define the community's identity.
        </p>
      </div>
    </Section>

    <Section title="Cultural Practices & Norms">
      <p>
        We uphold the rich cultural norms of the Jieng, centered around cattle keeping, mutual respect, trust, and dignity. Among the most celebrated elements of our tradition is the Dinka dance, especially as performed in Duk, Jonglei State. This dance is more than movement—it is a cultural heartbeat.
      </p>
      <p>
        The Dinka dance is slow, deliberate, and rhythmic, often featuring a unique up-and-down motion from the knees, creating a wave-like flow through the body. One of the most iconic aspects is the hand gesture that mimics the <i><strong>horns of a bull</strong></i>—a powerful symbol of our connection to cattle, which are central to our identity and status. Dancers move with grace and pride, their bodies speaking a language older than memory, often synchronized with the deep beating of traditional drums.
      </p>
      <img
        src={dukImage}
        alt="cattle"
        className="w-full max-w-4xl mx-auto shadow-lg rounded-xl"
      />
    </Section>

    <Section title="Identity and Cattle Reverence">
      <p>
        The <strong>Dinka people of Duk (Hol), Pan Mabur</strong> in Jonglei State, South Sudan, hold a deep-rooted pride in their ancestral heritage—one that is beautifully woven into their everyday lives and customs. Central to this identity is the cultural reverence for <strong>cattle</strong>, which are not only a symbol of wealth and status, but also a sacred link to identity, poetry, and pride. It is no surprise that many children are named after <strong>cattle colors and patterns</strong>—names like <i>Ayen</i>, <i>Malual</i>, and others carry with them stories, beauty, and lineage.
      </p>
      <p>
        Cattle are more than livestock—they are inspiration. The <strong>songs of our people are rich with praise for cattle</strong>, often sung with rhythm and emotion that celebrate their strength, elegance, and connection to the ancestors. Whether in times of joy, courtship, or reflection, these songs create a bridge between the generations.
      </p>
    </Section>

    <Section title="Traditional Dinka Family Life">
      <p>
        The traditional Dinka home reflects values of <strong>unity, harmony, and personal dignity</strong>. In a typical family setting, <strong>girls stay close to their mothers</strong> until they are mature and ready to manage their own space—learning skills, traditions, and womanhood. <strong>Boys are also given their own space</strong>, fostering respect, responsibility, and the strong sense of privacy that is a hallmark of Dinka upbringing.
      </p>
    </Section>
  </div>
);

export default About;