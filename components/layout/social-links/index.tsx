import { ImLinkedin2 } from 'react-icons/im';
import styles from './social-links.module.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiBehance, SiDevdotto } from 'react-icons/si';
import Link from 'next/link';
import { ReactNode } from 'react';

type SocialLink = {
  name: 'linkedin' | 'github' | 'behance' | 'devto';
  url: string;
  label: string;
  Icon: ReactNode;
}

export function SocialLinks() {
  const social_medias: SocialLink[] = [
    {
      name: 'linkedin',
      label: 'string',
      url: 'https://www.linkedin.com/in/psrodrigomoreira/',
      Icon: <ImLinkedin2 size={20} />
    }, {
      name: 'github',
      label: 'GitHub',
      url: 'https://github.com/rodrigsmor',
      Icon: <AiOutlineGithub size={20} />
    }, {
      name: 'behance',
      label: 'Behance',
      url: 'https://www.behance.net/rodrigsmor',
      Icon: <SiBehance size={20} />
    }, {
      name: 'devto',
      label: 'DevTo',
      url: 'http://dev.to/psrodrigs',
      Icon: <SiDevdotto size={20} />
    },
  ];

  return (
    <nav
      className={styles.socialLinksContainer}
      aria-label="Professional and Social Profile Links"
    >
      <ul className="social-list">
        {
          social_medias.map(({ Icon, url, label, name }) => (
            <li key={name}>
              <Link href={url} aria-label={label}>
                {Icon}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}