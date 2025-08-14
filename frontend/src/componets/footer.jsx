import footerimg from "../assets/footer.jpeg"; // Adjust the path as necessary
import footervid from "../assets/Udyam.mp4"; // Adjust the path as necessary

export default function Footer() {
  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${footerimg})` }} // replace with your img path
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(2,4,53,0.91)_0%,rgba(22,4,90,0.9)_100%)]"></div>
      <div className="px-10 md:px-26 pt-15 space-y-20">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-10">
            <p className="text-2xl font-semibold">UDYAM REGISTRATION</p>
            <p>
              Ministry of MSME
              <br />
              Udyog Bhawan - New Delhi
            </p>
            <p className="">
              <span className="font-bold">Email:</span> champions@gov.in
            </p>
            <div>
              <p className="font-bold">Contact Us</p>
              <p className="font-bold">For Grievances / Problems</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="font-semibold mb-4">Our Services</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2 hover:underline text-gray-300 text-sm hover:cursor-pointer ">
                <svg
                  className="w-3 h-3 font-semibold text-bold text-gray-800 dark:text-white"
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
                    stroke-width="4"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                CHAMPIONS
              </li>
              <li className="flex items-center gap-2 hover:underline text-gray-300 text-sm hover:cursor-pointer">
                <svg
                  className="w-3 h-3 font-semibold text-bold text-gray-800 dark:text-white"
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
                    stroke-width="4"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                MSME Samadhaan
              </li>
              <li className="flex items-center gap-2 hover:underline text-gray-300 text-sm hover:cursor-pointer">
                <svg
                  className="w-3 h-3 font-semibold text-bold text-gray-800 dark:text-white"
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
                    stroke-width="4"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                MSME Sambandh
              </li>
              <li className="flex items-center gap-2 hover:underline text-gray-300 text-sm hover:cursor-pointer">
                <svg
                  className="w-3 h-3 font-semibold text-bold text-gray-800 dark:text-white"
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
                    stroke-width="4"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                MSME Dashboard
              </li>
              <li className="flex items-center gap-2 hover:underline text-gray-300 text-sm hover:cursor-pointer">
                <svg
                  className="w-3 h-3 font-semibold text-bold text-gray-800 dark:text-white"
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
                    stroke-width="4"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                Entrepreneurship Skill Development Programme (ESDP)
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Video</h2>
            <video controls className="w-full h-auto rounded">
              <source src={footervid} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="relative z-10 border-t w-full border-white/30 mt-6 py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>
              © Copyright <span className="font-bold">Udyam Registration.</span>{" "}
              All Rights Reserved, Website Content Managed by Ministry of Micro
              Small and Medium Enterprises, GoI
            </p>
            <div className="flex gap-2">
              <a href="#" className="hover:text-gray-300">
                <span className="p-2 rounded-full bg-gray-400/30 flex items-center justify-center">
                  <svg
                    class="w-5 h-5  text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                  </svg>
                </span>
              </a>
              <a href="#" className="hover:text-gray-300">
                <span className="p-2 rounded-full bg-gray-400/30 flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a href="#" className="hover:text-gray-300">
                <span className="p-2 rounded-full bg-gray-400/30 flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
