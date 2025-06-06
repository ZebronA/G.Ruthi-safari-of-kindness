function Navbar() {
  return (
    <nav className="fixed rounded-[] bg-brand-black top-0 z-50 w-full ">
      <div className=" max-w-screen-xl mx-auto px-24 py-4 flex items-center justify-between relative">

        {/* Left Links */}
        <div className="flex gap-6 text-sm font-medium ">
          <a href="/" className="text-brand-white hover:text-brand-green-dark transition">
            Home
          </a>
          <a href="/impact" className="text-brand-white hover:text-brand-green-dark transition">
            Impact
          </a>
          <a href="/stories" className="text-brand-white hover:text-brand-green-dark transition">
            Stories
          </a>
        </div>

        {/* Center Logo / Title */}
        <div className=" absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl font-bold text-brand-black tracking-wide whitespace-nowrap">
            Safari of Kindness
          </h1>
        </div>

        {/* Right Links */}
        <div className="flex gap-6 text-sm  font-medium">
          <a href="/get-involved" className="text-brand-white hover:text-brand-green-dark transition">
            Get Involved
          </a>
          <a href="/donate" className="text-brand-white hover:text-brand-green-dark transition">
            Donate
          </a>
          <a href="/contact" className="text-brand-white hover:text-brand-green-dark transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
