const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="md:flex gap-5 lg:hover:cursor-pointer">
        <a href="/home">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/images">
          <li>Images</li>
        </a>
        <a href="/contacts">
          <li>Contacts</li>
        </a>
      </ul>
    </nav>
  );
};

export default Menu;
