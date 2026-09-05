import type { Metadata } from 'next';
import { T } from '@/components/site/language';
import { Scene } from '@/components/site/scene';

export const metadata: Metadata = {
  title: 'Performance',
  description: 'Live performance videos by Yuheng Zhu.',
};

export default function PerformancePage() {
  return (
    <Scene
      image="/images/stars.jpg"
      className="performance-empty"
      shade={0.5}
      position="50% 22%"
    >
      <div>
        <p className="eyebrow">
          <T en="PERFORMANCE" zh="演出" />
        </p>
        <h1>
          <T en="Performance" zh="演出" />
        </h1>
      </div>
    </Scene>
  );
}
