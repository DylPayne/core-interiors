export default function Footer() {
  return (
    <footer class="p-4 bg-white rounded-lg md:px-6 md:py-8 dark:white">
      <div class="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto">
        <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
          <img
            src="/logo.png"
            class="mr-3 h-12"
            alt="Core Logo"
          />
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://rhys.co.za" class="hover:underline">
          Rhys Software and Design™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}