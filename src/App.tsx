import './index.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://x.com/GigaDood__',
    img: 'https://ext.same-assets.com/242481143/1632587626.png',
    alt: 'X',
  },
  {
    href: 'https://t.me/gigadood',
    img: 'https://ext.same-assets.com/242481143/1619047513.png',
    alt: 'Telegram',
  },
  {
    href: '#',
    img: 'https://i.imgur.com/srpFzHW.png',
    alt: 'Launching',
  },
  {
    href: 'https://soltrex.vercel.app/',
    img: 'https://i.imgur.com/o1fBtXZ.png',
    alt: 'Flappy Blimpy',
  },
];

const ROADMAP_PHASES = [
  {
    title: 'PHASE 1 – THE CREATION OF THE  BLIMPY EMPIRE ',
    list: [
      'Creation of the Blimpy community',
      'Creation of the concept',
      'Creation of the team',
      'Creation of the values',
      'Creation of the FOMO – Shh...'
    ],
    image: 'https://i.imgur.com/v8Wobml.png',
  },
  {
    title: 'PHASE 2 – FORGING THE EMPIRE',
    list: [
      'Development of the website',
      'Implementation of community tools',
      'Recruitment of KOLs',
      'Content creation',
      'Branding development',
    ],
    image: 'https://i.imgur.com/cO1q9f3.png',
  },
  {
    title: 'PHASE 3 – PREPARATION FOR LAUNCH',
    list: [
      'BlimpyChad marketing strategy',
      'Team preparation',
      'Giveaway organization',
      'Call for future blimpys',
      'Finalization',
    ],
    image: 'https://i.imgur.com/r3oJXgS.png',
  },
  {
    title: 'PHASE 4 – THE LAUNCH: THE BLIMPY TAKEOVER',
    list: [
      'Launch on Pump.fun',
      'FOMO activation',
      'Community pump',
      'Massive KOL influence',
      'Beginning of the Chad reign',
    ],
    image: 'https://i.imgur.com/Ayd2cdq.png',
  },
  {
    title: 'PHASE 5 – THE ERA OF BLIMPY',
    list: [
      'Hype maintenance',
      'New partnerships',
      'Expansion of BLIMPY',
      'Community events',
      'Complete domination of Solana',
    ],
    image: 'https://i.imgur.com/oNzceV1.png',
  },
];

const tokenomicsImages = [
  {
    src: 'https://i.imgur.com/1cMd3zi.png',
    alt: '0% Tax',
    caption: '0% tax',
  },
  {
    src: 'https://i.imgur.com/iLyAaD1.png',
    alt: '100% Burned',
    caption: '100% Liquidity Burned',
  },
  {
    src: 'https://i.imgur.com/i5SKdqQ.png',
    alt: 'Fair Launch',
    caption: 'fair launch on Pump.fun',
  },
  {
    src: 'https://i.imgur.com/5MgJ0V8.jpeg',
    alt: 'Team and Marketing',
    caption: '10% for Team and Marketing',
  },
];

const memeImages = [
  'https://i.imgur.com/Au342L0.png',
  'https://i.imgur.com/AWEYGJ3.png',
  'https://i.imgur.com/uBlx1Bi.png',
  'https://i.imgur.com/lOPIk0Z.png',
  'https://i.imgur.com/whzgUwd.png',
  'https://i.imgur.com/tV1C0Mi.png',
  'https://i.imgur.com/w2zY5bx.png',
  'https://i.imgur.com/yZBJ1Sa.png',
  'https://i.imgur.com/8f0LXyQ.png',
  'https://i.imgur.com/9qgshNh.png',
  'https://i.imgur.com/tSAQFNg.png',
  'https://i.imgur.com/HjJWqqs.png',
];

function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="about-section" 
      style={{display:'flex', alignItems:'center', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', position: 'relative', overflow:'hidden'}}
    >
      <motion.img 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="https://i.imgur.com/7BLgaTM.png" 
        alt="About Illustration" 
        style={{width: 370, maxWidth: '45vw', margin: '2vw', borderRadius: 34}} 
      />
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{width: 460, maxWidth: '90vw', marginLeft: 'auto', marginRight: '4vw', padding: 20, background: 'rgba(0,0,0,0.6)', borderRadius: 15, textAlign:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.3)'}}
      >
        <div style={{fontFamily:'Rubik Bubbles,cursive', fontSize:30, color:'#ffcc00', textShadow: '2px 2px 0 #ff4400', letterSpacing:'1px', marginBottom:10}}>Who's BLIMPY?</div>
        <div style={{fontFamily:'Rubik Bubbles,cursive', fontSize:22, color:'#fff', textShadow: '1px 1px 0 #ff4400', letterSpacing:'0.5px', marginBottom:10}}>
          It is said that deep in the abyss of the market, where paper hands weep and devs vanish, a legendary being was born. An alpha? No. A chad? Not powerful enough. He is THE BLIMPY.
        </div>
        <div style={{fontFamily:'Rubik Bubbles,cursive', fontSize:22, color:'#fff', textShadow: '1px 1px 0 #ff4400', letterSpacing:'0.5px', marginBottom:10}}>
          His DNA is forged in eternal liquidity, his mindset tougher than the diamond hands of a 2017 holder, and he knows only one mission: print, dominate, and strike fear into weak hands. His rise is inevitable.
        </div>
        <div style={{fontFamily:'Rubik Bubbles,cursive', fontSize:22, color:'#fff', textShadow: '1px 1px 0 #ff4400', letterSpacing:'0.5px', marginBottom:15}}>
          Join the legend. Become a BLIMPY. Together, we're going to WRECK EVERYTHING!
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://t.me/gigadood" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{display:'inline-block', background:'#203e91', color:'#fff', padding:'12px 30px', borderRadius:'100px', fontWeight:900, fontSize:'1.1rem', textTransform:'uppercase', fontFamily:'Rubik Bubbles,cursive', letterSpacing: 1, boxShadow: '0 4px 8px rgba(0,0,0,0.3)', transition: 'transform 0.3s, background 0.3s'}}
        >
          Join BLIMPY
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

function RoadmapSection() {
  const [phase, setPhase] = useState(0);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="roadmap-section" 
      style={{width:'100%', background: 'linear-gradient(135deg, #1e3a8a 0%, #db342e 100%)', minHeight: 390, position:'relative'}}
    >
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', maxWidth:1200, margin:'0 auto', gap: '4vw'}}>
        <motion.img 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={ROADMAP_PHASES[phase].image} 
          alt="Roadmap Visual" 
          style={{width:308, maxWidth:'38vw', borderRadius:30, margin:'20px 0'}} 
        />
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{background:'rgba(0,0,0,0.6)', borderRadius:14, padding:20, minWidth:240, minHeight:190, margin:'20px 0', flex:'1'}}
        >
          <div style={{fontFamily:'Rubik Bubbles',fontSize:20,color:'#ffcc00',marginBottom:10,letterSpacing:1,textShadow:'1px 1px #ff4400'}}>{ROADMAP_PHASES[phase].title}</div>
          <ul style={{textAlign:'left',fontFamily:'Rubik Bubbles',fontSize:16,color:'#fff',lineHeight:1.4,textShadow:'1px 1px #ff4400',paddingLeft:18}}>
            {ROADMAP_PHASES[phase].list.map((item,i)=>(
              <motion.li 
                key={i} 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{marginBottom:2}}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <div style={{display:'flex',alignItems:'center',gap:18,marginTop:18}}>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="nav-arrow custom-cursor" 
              onClick={()=>setPhase(p=>Math.max(0,p-1))} 
              style={{
                fontSize:28,
                padding:'2px 8px',
                borderRadius:8,
                border:'none',
                background:'#ffe43d',
                color:'#e27109',
                visibility:phase===0?'hidden':'visible',
                boxShadow:'0 2px 6px #2224'
              }}
            >&larr;</motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="nav-arrow custom-cursor" 
              onClick={()=>setPhase(p=>Math.min(ROADMAP_PHASES.length-1,p+1))} 
              style={{
                fontSize:28,
                padding:'2px 8px',
                borderRadius:8,
                border:'none',
                background:'#ffe43d',
                color:'#e27109',
                visibility:phase===ROADMAP_PHASES.length-1?'hidden':'visible',
                boxShadow:'0 2px 6px #2224'
              }}
            >&rarr;</motion.button>
            <div className="phase-indicator" style={{display:'flex',alignItems:'center',gap:8}}>
              {ROADMAP_PHASES.map((_,idx)=>(
                <motion.span 
                  key={idx} 
                  whileHover={{ scale: 1.2 }}
                  onClick={()=>setPhase(idx)} 
                  style={{width:12,height:12,borderRadius:'50%',background:idx===phase?'#ffcc00':'#ddd',boxShadow:'0 1px 4px #2222',border:idx===phase?'2px solid #ff4400':'none',display:'inline-block'}}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TokenomicsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="tokenomic2-section" 
      style={{background:'linear-gradient(135deg, #f3f4f6 0%, #93c5fd 100%)',padding:'50px 0',width:'100%'}}
    >
      <div className="tokenomic2-images" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',maxWidth:1200,margin:'0 auto',gap:16}}>
        {tokenomicsImages.map((img, idx) => (
          <motion.div 
            key={img.src} 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            style={{width:'45%',minWidth:220,maxWidth:420,margin:'10px',textAlign:'center'}}
          >
            <img src={img.src} alt={img.alt} style={{width:'100%',maxWidth:540,borderRadius:18,background:'#fff5',padding:6,boxSizing:'border-box'}} />
            <div style={{fontFamily:'Rubik Bubbles',fontSize:20,marginTop:6,color:'#fff',background:'#2c2c2caa',borderRadius:7,display:'inline-block',padding:'2px 14px'}}>{img.caption}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function MemeSection() {
  const [active, setActive] = useState<number|null>(null);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="meme-section" 
      style={{width:'100%',padding:'36px 0',background: 'linear-gradient(135deg, #1e3a8a 30%, #60a5fa 100%)'}}
    >
      <div className="meme-gallery" style={{display:'flex',flexWrap:'wrap',gap:18,maxWidth:1100,margin:'0 auto',justifyContent:'center'}}>
        {memeImages.map((src,idx)=>(
          <motion.div 
            key={idx} 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="meme-item" 
            onClick={()=>setActive(idx)} 
            style={{cursor:'pointer',borderRadius:16,overflow:'hidden',boxShadow:'0 1px 8px 2px #1113'}}
          >
            <img src={src} alt="BLIMPY Meme" style={{width:170,height:120,objectFit:'cover',display:'block'}} />
          </motion.div>
        ))}
      </div>
      {active!==null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="meme-lightbox" 
          style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.7)',zIndex:99,display:'flex',alignItems:'center',justifyContent:'center'}} 
          onClick={()=>setActive(null)}
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="meme-lightbox-content" 
            style={{position:'relative',background:'#fff',padding:6,borderRadius:12}}
          >
            <span className="meme-lightbox-close" onClick={()=>setActive(null)} style={{position:'absolute',top:2,right:16,fontSize:30,color:'#333',cursor:'pointer',zIndex:2}}>&times;</span>
            <img src={memeImages[active]} alt="BLIMPY Meme" style={{maxWidth:'80vw',maxHeight:'74vh',borderRadius:9,display:'block'}} />
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

function ScrollingBanner() {
  return (
    <div className="scrolling-banner">
      <div className="scrolling-text">
        $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY $BLIMPY
      </div>
    </div>
  );
}

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{background:'linear-gradient(135deg, #1e3a8a 0%, #db342e 50%, #60a5fa 100%)', padding:'16px 0 6px 0', color:'#fff', width:'100%'}}
    >
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:1100,margin:'0 auto'}}>
        <img src="https://i.imgur.com/7BLgaTM.png" alt="Gigadood Footer Logo" style={{height:40,marginLeft:8}} />
        <div style={{display:'flex',alignItems:'center',gap:18}}>
          {socialLinks.map((link, idx) => (
            <motion.a 
              key={link.alt+idx} 
              whileHover={{ scale: 1.2 }}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={link.img} alt={link.alt} style={{width:22,height:22}} />
            </motion.a>
          ))}
        </div>
        <span style={{fontFamily:'Rubik Bubbles',fontSize:16,opacity:0.86,marginRight:8}}>© 2025 BLIMPY</span>
      </div>
    </motion.footer>
  );
}

function App() {
  return (
    <div>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section" 
        style={{ position: 'relative', textAlign: 'center', minHeight: 600, background: 'linear-gradient(135deg, #1e3a8a 0%, #db342e 50%, #60a5fa 100%)' }}
      >
        <div className="sunburst" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 0, background: 'none' }} />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="title" 
          style={{ marginTop: 32, zIndex: 2, position: 'relative' }}
        >
          <img src="https://i.imgur.com/7BLgaTM.png" alt="DOOD Title" style={{ width: 270, height: 'auto' }} />
        </motion.div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="logo-container" 
          style={{ margin: '26px 0 18px 0', zIndex: 2, position: 'relative' }}
        >
          <img src="https://i.imgur.com/0hUbkK2.png" alt="DOOD Logo" style={{ width: 250, height: 170, borderRadius: '50%' }} />
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="social-icons" 
          style={{ display: 'flex', justifyContent: 'center', gap: 36, marginTop: 6, zIndex: 3, position: 'relative' }}
        >
          {socialLinks.map((link, idx) => (
            <motion.a 
              key={link.alt+idx} 
              whileHover={{ scale: 1.2 }}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={link.img} alt={link.alt} style={{ width: 40, height: 40 }} />
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      <ScrollingBanner />
      <AboutSection />
      <ScrollingBanner />
      <RoadmapSection />
      <ScrollingBanner />
      <TokenomicsSection />
      <ScrollingBanner />
      <MemeSection />
      <ScrollingBanner />
      <Footer />
    </div>
  );
}

export default App;
