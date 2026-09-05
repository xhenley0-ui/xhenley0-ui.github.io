import Link from '@/components/site/link';
import { T } from '@/components/site/language';
export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>
        <T en="This page could not be found." zh="未找到该页面。" />
      </p>
      <Link className="text-link" href="/">
        <T en="Back to home" zh="返回首页" /> ↗
      </Link>
    </section>
  );
}
