import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image';
import face from '../../public/omar.png';
import SkillBox from './components/skillBox/skillBox';
import { MdArrowForward, MdOutlineSelfImprovement } from 'react-icons/md';

const Home = () => {
  const rgv_demo = 'https://res.cloudinary.com/dvnemzw0z/video/upload/v1711616793/projects/rgv_cut_lsq30w.mp4';
  const maqete_demo = 'https://res.cloudinary.com/dvnemzw0z/video/upload/v1711616807/projects/maqete_cut_guoohy.mp4';
  const yota_demo = 'https://res.cloudinary.com/dvnemzw0z/video/upload/v1711617619/projects/yotabyt_cut_pnao1c.mp4';

  return (
    <main>
      <section className={styles.topNav} id='box'>
        <MdOutlineSelfImprovement style={{ fontSize: '2rem' }} />

        <nav>
          {/* <Link href={''}>Projects</Link>
          <Link href={''}>About</Link> */}
          <Link href={'tel:+233558420368'} style={{ color: 'black' }} >Contact</Link>
        </nav>
      </section>


      <section className={styles.headBox}>
        <section className={styles.imgBoxHolder}>
          <Image alt='' src={face} fill className='cover' />
          <legend></legend>
        </section>

        <article className={styles.nameBox}>
          <strong>Emmanuel Yankson</strong>
          <span>Developer / Graphic Designer</span>
        </article>
      </section>

      <SkillBox />

      <section className={styles.webBox} id='box'>
        <h3><sub></sub>Web Projects <sub></sub></h3>
        <section className={styles.projects}>
          <Link href={'https://www.royalgolfviews.com/'} target='_blank'>
            <video src={rgv_demo} muted autoPlay loop />
            <p><span>Royal Golf Views</span><MdArrowForward /></p>
          </Link>
          <Link href={'https://www.maqete.com/'} target='_blank'>
            <video src={maqete_demo} muted autoPlay loop />
            <p><span>Maqete</span><MdArrowForward /></p>
          </Link>
          <Link href={'https://www.yotabyt.com/'} target='_blank'>
            <video src={yota_demo} muted autoPlay loop />
            <p><span>Yotabyt</span><MdArrowForward /></p>
          </Link>
        </section>
      </section>

      <section className={styles.aboutBox} id='box'>
        <article className={styles.left}>
          <span className='big'>7</span>
          <small>Years of Experience</small>
        </article>
        <article className={styles.right}>
          <strong><sub></sub> About Me <sub></sub></strong>
          <span>
            With 5+ years in web and mobile app development, alongside graphic design prowess, I bring a wealth of experience to every project.
            Armed with a Bachelor's in Computer Science from KNUST, Ghana, I blend theory with hands-on skills to deliver cutting-edge solutions.
            From sleek websites to dynamic apps, I exceed industry standards, crafting intuitive experiences that resonate. Let's collaborate and elevate your digital presence together!
          </span>
          <Link href={'tel:+233558420368'} className='caps'>Contact</Link>
        </article>
      </section>


      <section className={styles.mobileBox} id='box'>
        <h3><sub></sub>Mobile Projects <sub></sub></h3>
        <section className={styles.projects}>
          <Link href={'https://drive.google.com/drive/folders/1nYj-K_HyKOtXfUVCa9AC5XpKExXxNgal?usp=drive_link'} target='_blank'>
            <strong>Super Mc Food Ordering App</strong>

            <article>
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711621543/projects/splash_ql88kp.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711623369/projects/opener_gzwqkg.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711623365/projects/register_tzuxhk.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711621542/projects/home_ibicgv.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711622033/projects/branchMenu_oobsfq.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711621543/projects/viewFood_jghidl.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711621542/projects/checkout_qb4jkm.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711623368/projects/profile_kepn7p.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711621542/projects/viewOrder_y6lasm.jpg" alt="" />
            </article>
          </Link>
          <Link href={'https://drive.google.com/drive/folders/1nYj-K_HyKOtXfUVCa9AC5XpKExXxNgal?usp=drive_link'} target='_blank'>
            <strong>Super Dispatch App</strong>

            <article>
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711623673/projects/rider_splash_ishfmi.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711623365/projects/register_tzuxhk.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711623678/projects/trips_glusxb.jpg" alt="" />
              <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711623682/projects/trip_gps_h3mwhv.jpg" alt="" />
            </article>
          </Link>
        </section>
      </section>



      <section className={styles.graphicBox} id='box'>
        <h3><sub></sub>Graphic Works <sub></sub></h3>
        <section className={styles.samples}>
          <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711624216/projects/easter_promo_ad_ozfkta.jpg" alt="" />
          <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711624273/projects/landscapeB_torre0.jpg" alt="" />
          <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711624434/projects/maq_comingSoon_jg5uma.jpg" alt="" />
          <img src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1711624524/projects/AirPods_flyer_zrbexm.jpg" alt="" />
        </section>
      </section>




    </main>
  );
}

export default Home;