export const biographyZh = [
  'Yuheng Zhu 是作曲者、编曲者与音乐制作人，目前就读于伯克利音乐学院当代音乐写作与制作专业（Contemporary Writing & Production）。',
  '他的创作植根于亚洲视角，并受到全球音乐文化的影响，涵盖管弦乐、爵士融合、前卫摇滚、世界音乐与金属。通过现场演出与录音室制作，他探索声音、色彩、情感与结构不可分割的音乐空间。',
  '受到神秘主义、碎片化梦境与内在意识状态的启发，他将作曲视为构建感知空间的过程，以和声、音色与情感结构塑造听觉体验。',
  '近期项目包括概念专辑《碎梦》（Dreams in Fragments），以及 Berklee Presents、Singers Showcase、American Songbook 和 CWP 音乐会等大型制作。',
];
export const homeBioZh = [
  '就读于伯克利音乐学院的作曲者、编曲者与音乐制作人。',
  '创作根植于亚洲视角，也受到全球音乐文化影响，从古典到金属，穿行于不同的声音世界。',
  '以声音与色彩的融合为引导，并受到神秘主义启发，将音乐作为对感知、结构与不可见世界的探索。',
];
export interface ProjectTranslation {
  title: string;
  subtitle?: string;
  summary?: string;
  paragraphs: string[];
  credits: string[];
  category: string;
}
export const projectTranslations: Record<string, ProjectTranslation> = {
  'dreams-in-fragments': {
    title: '碎梦 · Dreams in Fragments',
    subtitle: '概念专辑 · 2026',
    summary:
      '一张跨越曲风的概念专辑，以前卫摇滚、爵士融合、电子音乐与电影感声音设计，探索感知、记忆与情感的碎片。',
    category: '原创专辑',
    paragraphs: [
      '《碎梦》是一段穿越意识、幻象与救赎的音乐旅程。',
      '专辑由九首作品组成，象征循环、完成与宇宙秩序，展开一条非线性的心灵时间线：从冥想出发，穿行沙漠与霓虹梦境，坠入风暴和内心冲突，最终在寂静中重生。',
      '在梦境与现实之间，声音化作破碎的光，映照内心的裂隙。',
      '当最后一首《Breaking All the Illusions》响起，梦境消融于光芒，碎片的世界完成一个循环。如同数字“九”，它抵达圆满的终点，同时也预示着新的开始。',
    ],
    credits: [
      '作曲、制作与编曲：Yuheng Zhu。',
      '于伯克利音乐学院学习期间录制与完成。',
    ],
  },
  'pink-celebration': {
    title: 'What About Us — 致敬 P!NK',
    category: '编曲 · 现场制作',
    paragraphs: [
      'What About Us — A P!NK Celebration 是伯克利 Great American Songbook 系列中的大型现场制作，在伯克利表演中心呈现。',
      '演出汇集来自三十多个国家的一百余位学生表演者与创作者，以当代编曲、现场表演、舞蹈与多媒体制作致敬 P!NK 跨越曲风的艺术表达。',
      '音乐会围绕韧性、脆弱与自我表达展开，将流行、摇滚、灵魂乐与戏剧叙事融入充满能量的协作演出。',
    ],
    credits: ['担任：编曲 · 指挥'],
  },
  'the-songs-of-coldplay': {
    title: 'A Sky Full of Stars — Coldplay 作品音乐会',
    category: '编曲 · 现场制作',
    paragraphs: [
      'A Sky Full of Stars — The Songs of Coldplay 是伯克利 Singers Showcase 系列中的大型现场制作，在伯克利表演中心呈现。',
      '演出汇集来自三十多个国家的一百余位表演者与创作者，以大型乐团编曲、沉浸式视觉、舞蹈和多媒体叙事重新诠释 Coldplay 的音乐。',
      '受到 Coldplay 现场演出的情感张力与电影感氛围启发，音乐会将声音、色彩、动作与光线融为多感官体验。',
    ],
    credits: ['担任：编曲 · 指挥'],
  },
};
export const trackTitlesZh: Record<string, string> = {
  Meditation: '冥想',
  'White Silence': '白色寂静',
  'Desert Monument Valley': '沙漠纪念碑谷',
  'Neon City': '霓虹之城',
  'Silence or Scream': '沉默或呐喊',
  'Tornado’s Mystery': '龙卷风之谜',
  'Traveller’s Self-Reflection': '旅人的自省',
  'Dialogue: Outside the World': '对话：世界之外',
  'Breaking All the Illusions': '打破一切幻象',
};
