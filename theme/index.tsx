import { useLang, usePageData } from 'rspress/runtime';
import Theme from 'rspress/theme';
import Announcement from './components/announcement';

const ANNOUNCEMENT_URL= "/contribute";

const Layout = () => {
    const { page } = usePageData();
    const lang = useLang();
    return (
      <Theme.Layout
        beforeNav={
          <Announcement
            href={ANNOUNCEMENT_URL}
            message={
              lang === 'en'
                ? 'The Book of Makepad is under construction and contributions are welcome!'
                : 'Makepad之书 正在加紧施工中，欢迎大家参与贡献！🦀️'
            }
            localStorageKey="makepad-book-announcement-closed"
            display={page.pageType === 'home'}
          />
        }
      />
    )
};

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
