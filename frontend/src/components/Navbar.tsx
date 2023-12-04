import { LINKS } from '@/constants/links';
import { Link } from 'react-router-dom';
import ModeToggle from './mode-toggle';

const Navbar = () => {
  return (
    <header className="flex flex-wrap items-center mx-auto p-5">
      <h1 className="text-xl font-medium tracking-wider">
        <Link to={'/'}>Resume Management</Link>
      </h1>
      <nav className="flex flex-wrap items-center justify-center mx-auto gap-10">
        {LINKS.map((link) => (
          <a key={link.label}>
            <Link to={link.href}>{link.label}</Link>
          </a>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
};

export default Navbar;
