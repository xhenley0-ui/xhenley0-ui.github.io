import { site } from '@/content/site';
import { T } from './language';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-upper">
        <div>
          <p className="eyebrow">
            <T en="LET’S CONNECT" zh="保持联系" />
          </p>
          <a className="contact-title" href={`mailto:${site.email}`}>
            <T en="Make something resonate." zh="让音乐，产生共鸣。" />{' '}
            <span>↗</span>
          </a>
        </div>
        <a className="email-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
      <div className="footer-lower">
        <p>© {new Date().getFullYear()} Yuheng Zhu</p>
        <div className="social-links">
          <a href={site.social.youtube} target="_blank" rel="noreferrer">
            YouTube ↗
          </a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
          <a href={site.social.facebook} target="_blank" rel="noreferrer">
            Facebook ↗
          </a>
        </div>
        <a href="#main">
          <T en="Back to top ↑" zh="回到顶部 ↑" />
        </a>
      </div>
    </footer>
  );
}
