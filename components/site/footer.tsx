/* oxlint-disable next/no-img-element -- Local images are resized and compressed ahead of deployment; no runtime image service is required. */
import { site } from '@/content/site';
import { Scene } from './scene';
export function Footer() {
  return (
    <footer>
      <Scene image="/images/footer.jpg" className="site-footer" shade={0.5}>
        <div className="footer-top">
          <div>
            <p className="footer-name">{site.name}</p>
            <p>{site.roles}</p>
            <a className="footer-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="socials">
            {[
              { name: 'YouTube', href: site.social.youtube, icon: 'youtube' },
              {
                name: 'Instagram',
                href: site.social.instagram,
                icon: 'instagram',
              },
              {
                name: 'Facebook',
                href: site.social.facebook,
                icon: 'facebook',
              },
            ].map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/images/${icon}.svg`}
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
