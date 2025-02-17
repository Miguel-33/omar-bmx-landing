'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <motion.section id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Omar De Jesus</h1>
        <p>BMX Racer</p>
        <p>Passionate | Determined | Always Improving</p>
        <button onClick={() => window.location.href = 'https://www.instagram.com/omar.dejesus33'}>Follow me on Instagram</button>
      </motion.section>
      <motion.section id="bio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>About Omar</h2>
        <p>Omar De Jesus is a dedicated BMX racer with a passion for the sport. He's been racing at events like the UCI BMX Worlds and Music City Nationals, where he earned a 2nd place finish at Derby City BMX. Currently focused on recovery and training, Omar is always pushing to improve.</p>
      </motion.section>
      <motion.section id="achievements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Achievements</h2>
        <ul>
          <li>2nd Place | Derby City BMX</li>
          <li>1st Moto - Music City Nationals</li>
          <li>Competed at UCI BMX Worlds</li>
        </ul>
      </motion.section>
      <motion.section id="events" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event 1 - Date</li>
          <li>Event 2 - Date</li>
        </ul>
      </motion.section>
      <motion.section id="sponsors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Omar's Sponsors</h2>
        <div>
          <img src="#" alt="" />
          <img src="#" alt="" />
        </div>
      </motion.section>
      <motion.section id="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Shots of Omar</h2>
        <div>
          <Image
           src="/images/ODJBMX1.jpg" alt=""
           width={600}
           height={300} 
          />
          <Image
            src="/images/ODJBMX2.jpg" alt=""
            width={600}
            height={300}
          />
          <Image
            src="/images/ODJBMX3.jpg" alt=""
            width={600}
            height={300}
          />
          <Image
            src="/images/ODJBMX4.jpg" alt=""
            width={600}
            height={300}
          />
          <Image
            src="/images/ODJBMX5.jpg" alt=""
            width={600}
            height={300}
          />
          <Image
            src="/images/ODJBMX6.jpg" alt=""
            width={600}
            height={300}
          />
        </div>
      </motion.section>
      <motion.section id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Get in Touch</h2>
        <p>Follow Omar on social media:</p>
        <a href="https://www.instagram.com/omar.dejesus33">Instagram</a>
        <a href="https://twitter.com/omardejesus">Twitter</a>
      </motion.section>
    </div>
  )
}