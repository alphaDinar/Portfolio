
import styles from './skillBox.module.css'
import Image from 'next/image';
import nextLogo from '../../../../public/logos/next.png';
import reactLogo from '../../../../public/logos/react.png';
import flutterLogo from '../../../../public/logos/flutter.png';
import flowLogo from '../../../../public/logos/flow.png';
import fireLogo from '../../../../public/logos/firebase.png';
import djangoLogo from '../../../../public/logos/django.png';

const SkillBox = () => {
  const skillList = [
    { tag: 'Next JS', img: nextLogo },
    { tag: 'React JS', img: reactLogo },
    { tag: 'Flutter', img: flutterLogo },
    { tag: 'Flutter Flow', img: flowLogo },
    { tag: 'Firebase', img: fireLogo },
    { tag: 'Django', img: djangoLogo }
  ]

  return (
    <section className={styles.skillBox} id='box'>
      <div>
        {Array(4).fill('a').map((counter, ci) => (
          <article key={ci}>
            {skillList.map((el, i) => (
              <p key={i}>
                <Image alt='' width={50} height={50} src={el.img} key={i} />
                <small>{el.tag}</small>
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillBox;