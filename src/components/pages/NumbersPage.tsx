import SidebarApp from '../SidebarApp';
import NumbersContent from '../../app/(sidebar-layout)/numbers/Content';

const NumbersPage = () => (
  <SidebarApp currentPath="/numbers">
    <NumbersContent />
  </SidebarApp>
);

export default NumbersPage;
