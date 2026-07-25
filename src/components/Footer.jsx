function Footer() {
  return (
    <footer className="bg-ink py-8">
      <div className="max-w-7xl mx-auto px-8 flexflex-col md:flex-row items-center">
        <p className="text-sm text-center text-gray-200 font-light tracking-wide">
          © {new Date().getFullYear()} Jarifa Tasnim — All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}

export default Footer;
