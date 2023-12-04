import { LINKS } from '@/constants/links';
import { Link } from 'react-router-dom';
import ModeToggle from './mode-toggle';

const Navbar = () => {
  return (
    <header className="container flex flex-wrap items-center w-full h-14 relative z-30 border-b">
      <h1 className="text-xl font-medium tracking-wider">
        <Link to={'/'}>Resume Management</Link>
      </h1>
      <nav className="flex flex-wrap items-center justify-center mx-auto gap-10">
        {LINKS.map((link) => (
          <p key={link.label}>
            <Link to={link.href}>{link.label}</Link>
          </p>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
};

export default Navbar;
