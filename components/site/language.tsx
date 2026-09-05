'use client';
import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
export type Language = 'en' | 'zh';
const storageKey = 'yuheng-language';
let memoryLanguage: Language = 'en';
const listeners = new Set<() => void>();
function getLanguage(): Language {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === 'zh' ? 'zh' : saved === 'en' ? 'en' : memoryLanguage;
  } catch {
    return memoryLanguage;
  }
}
function notify() {
  listeners.forEach((listener) => listener());
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) listener();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}
function setLanguage(language: Language) {
  memoryLanguage = language;
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    /* Switching remains usable without storage. */
  }
  notify();
}
const LanguageContext = createContext({
  language: 'en' as Language,
  setLanguage,
});
export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getLanguage,
    () => 'en' as Language,
  );
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
export function T({ en, zh }: { en: ReactNode; zh: ReactNode }) {
  return <>{useLanguage().language === 'zh' ? zh : en}</>;
}
export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="language-switch" aria-label="Language / 语言">
      <button
        lang="en"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        lang="zh-CN"
        onClick={() => setLanguage('zh')}
        aria-pressed={language === 'zh'}
      >
        中文
      </button>
    </div>
  );
}
