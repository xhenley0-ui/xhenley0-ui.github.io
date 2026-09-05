import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for is unavailable.</p>
      <Link className="pill" href="/portfolio">
        View Portfolio
      </Link>
    </section>
  );
}
