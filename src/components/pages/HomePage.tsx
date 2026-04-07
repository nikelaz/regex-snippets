import SidebarApp from '../SidebarApp';
import HomeContent from '../../app/(sidebar-layout)/HomeContent';

const HomePage = () => (
  <SidebarApp currentPath="/">
    <HomeContent />
  </SidebarApp>
);

export default HomePage;
