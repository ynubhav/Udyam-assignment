import logo from "../assets/logo.webp"; // Adjust the path as necessary
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 bg-[#1806b9cc] shadow-md w-full py-1 max-h-20">
      <div className="max-w-6xl mx-auto flex text-[#ffffffb3] justify-between items-center px-4">
        <img
          src={logo}
          alt="Udyam Logo"
          className="h-[56.5px] w-[300px] mr-10"
        />
        <nav className="w-full flex justify-around font-medium">
          <a
            href="#"
            className="hidden lg:flex hover:underline transition-all delay-50 h-full hover:text-white hover:underline-offset-6 decoration-2 "
          >
            Home
          </a>
          <a
            href="#"
            className="hidden lg:flex hover:underline transition-all delay-50 h-full hover:text-white hover:underline-offset-6 decoration-2 "
          >
            NIC Code
          </a>
          <a
            href="#"
            className="hidden lg:flex items-center gap-2 border-b-2 border-transparent hover:border-white transition-all delay-50 h-full hover:text-white"
          >
            Usefull Documents
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#"
            className="hidden lg:flex items-center gap-2 border-b-2 border-transparent hover:border-white transition-all delay-50 h-full hover:text-white"
          >
            Print / Verify
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#"
            className="hidden lg:flex items-center gap-2 border-b-2 border-transparent hover:border-white transition-all delay-50 h-full hover:text-white"
          >
            Update Details
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
                d="m19 9-7 7-7-7"
              />
            </svg>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
          <a
            href="#"
            className="hidden lg:flex items-center gap-2 border-b-2 border-transparent hover:border-white transition-all delay-50 h-full hover:text-white"
          >
            Login
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
