import './Sidebar.css';
import { profileLinks } from '../data/links'

function Sidebar() {
  const sidebarLinks = profileLinks.filter((link) => link.placements.includes('sidebar'))

  return (
    <div className='sidebar'>
      {sidebarLinks.map((link) => (
        <a key={link.id} href={link.href} aria-label={link.label}>
          <img src={link.icon} alt={link.alt} />
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
