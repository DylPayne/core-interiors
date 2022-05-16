export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg md:px-6 md:py-8 dark:white">
      <div className="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto">
        <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
          <img
            src="/logo.png"
            className="mr-3 h-12"
            alt="Core Logo"
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://rhys.co.za" className="hover:underline">
          Rhys Software and Design™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
