import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a software engineer and cyber security expert with a passion for learning and building new things across different fields. I am an idealist and creative person who loves to bring ideas to life using technologies. I am also a computer science graduate student at the Federal University of Technology, Akure.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
    

  </Section>
);

export default Hero;