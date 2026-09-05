/* oxlint-disable next/no-img-element -- Local SVG icons are part of the site design. */
import { site } from '@/content/site';
import { asset } from '@/lib/paths';
import { T } from './language';
import { Scene } from './scene';

export function Footer() {
  const socials = [
    { name: 'YouTube', href: site.social.youtube, icon: 'youtube' },
    { name: 'Instagram', href: site.social.instagram, icon: 'instagram' },
    { name: 'Facebook', href: site.social.facebook, icon: 'facebook' },
  ];

  return (
    <footer>
      <Scene image="/images/footer.jpg" className="site-footer" shade={0.5}>
        <div className="footer-top">
          <div>
            <p className="footer-name">{site.name}</p>
            <p>
              <T
                en="Composer · Arranger · Producer"
                zh="作曲 · 编曲 · 音乐制作"
              />
            </p>
            <a className="footer-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="socials">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={asset(`/images/${icon}.svg`)}
                  width={42}
                  height={42}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Scene>
    </footer>
  );
}
