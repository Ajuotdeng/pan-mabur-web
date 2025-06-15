import React from 'react';
import Section from './Section';
import dukImage from '../assets/Padiet.jpg'; 

const Blogs = () => (
  <div className="max-w-4xl px-4 py-8 mx-auto">
    <Section title="Leadership">
      The <i>Pan Mabur Ajuot</i> have long been recognized as outspoken and natural leaders. From the cattle camps to the village of Padiet, leadership has run in the bloodline. Monykuer Mabur stood as a prominent community leader during his time as a <strong>president of Duk Padiet Court</strong>, a role later inherited by Par Monykuer Mabur, who rose to the position of <i>paramount chief</i>. He was succeeded by others such as Tiop Par Monykuer and Deng Mathiang Mabur, with the current title held by Deng Mabur Malual, serving as the paramount chief of Duk County in Jonglei State, South Sudan. Leadership has become not just a tradition but a lineage, now extending into the local government through roles such as chiefs, showing how deeply rooted governance is in the Pan Mabur heritage
    <img
              src={dukImage}
              alt="Duk Padiet"
              className="w-full max-w-4xl mx-auto shadow-lg rounded-xl"
            />
            </Section>
    <Section title="Family Achievements">
    Historically, the <strong>Pan Mabur</strong> were well-known for their wealth in cattle and their active engagement in farming livelihoods that placed them among the most prominent communities in the region. The turning point in our family came with <i><strong>Mathiang Malual</strong></i>, the first in our lineage to receive formal education. He opened the gates for future generations to witness the broader, more civilized world beyond our traditional ways. His legacy paved the way for the grandsons and granddaughters to embrace education. Today, nearly 90% of his descendants are literate, with most having attained at least a <i>Senior 4</i> certificate—an achievement we deeply honor.
      
    </Section>
  </div>
);

export default Blogs;
