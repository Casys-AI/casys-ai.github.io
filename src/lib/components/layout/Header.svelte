<header class="flex flex-col antialiased">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 order-1">
        <div class="flex justify-between items-center">
            <div class="flex justify-start items-center">
                <a href="https://flowbite.com" class="flex mr-6">
                    <img src="https://flowbite.s3.amazonaws.com/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <button id="dropdownUserNameButton" data-dropdown-toggle="dropdownUserName" class="flex justify-between items-center p-2 rounded-lg dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" type="button">
                    <span class="sr-only">Open user menu</span>
                    <div class="flex items-center">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" class="mr-3 w-8 h-8 rounded-full" alt="Bonnie avatar" />
                        <div class="text-left">
                            <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Bonnie <span class="hidden md:inline">Green</span></div>
                        </div>
                    </div>
                    <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5m0 6 4 4 4-4"/>
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownUserName" class="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="bottom">
                    <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" class="mr-3 w-8 h-8 rounded-full" alt="Michael avatar" />
                        <div class="text-left">
                            <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Michael Gough</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">michael@company.com</div>
                        </div>
                    </a>
                    <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" class="mr-3 w-8 h-8 rounded-full" alt="Roberta avatar" />
                        <div class="text-left">
                            <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Roberta Casas</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">roberta@company.com</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex justify-between items-center lg:order-2">
                <ul class="hidden flex-col mt-0 mr-4 w-full text-sm font-medium text-gray-900 md:flex md:flex-row dark:text-white">
                    <li>
                        <a href="#" class="py-3 px-4 hover:text-primary-600 dark:hover:text-primary-500" aria-current="page">Changelog</a>
                    </li>
                    <li>
                        <a href="#" class="py-3 px-4 hover:text-primary-600 dark:hover:text-primary-500" aria-current="page">Support</a>
                    </li>
                    <li>
                        <a href="#" class="py-3 px-4 hover:text-primary-600 dark:hover:text-primary-500" aria-current="page">Docs</a>
                    </li>
                </ul>
                <button type="button" class="hidden py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 md:inline-block focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Feedback</button>
                <button type="button" id="toggleMobileMenuButton" data-collapse-toggle="toggleMobileMenu" class="items-center p-2 text-gray-500 rounded-lg md:ml-2 md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <span class="sr-only">Open menu</span>
                    <svg class="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/> </svg>
                </button>
            </div>
        </div>
    </nav>

    <nav id="toggleMobileMenu" class="hidden order-3 bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 md:block dark:border-gray-800 md:order-2">
        <div class="px-0 lg:px-6">
            <div class="flex items-center">
                <ul class="flex flex-col mt-0 w-full text-sm font-medium md:flex-row">
                    <li class="block border-b dark:border-gray-700 md:inline md:border-b-0">
                        <a href="#" class="block py-3 px-4 border-b-2 text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:border-primary-500 border-primary-600" aria-current="page">Overview</a>
                    </li>
                    <li class="block border-b dark:border-gray-700 md:inline md:border-b-0">
                        <a href="#" class="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600">Company</a>
                    </li>
                    <li class="block border-b dark:border-gray-700 md:inline md:border-b-0">
                        <a href="#" class="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600">Team</a>
                    </li>
                    <li class="block border-b dark:border-gray-700 md:inline md:border-b-0">
                        <a href="#" class="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600">Features</a>
                    </li>
                    <li class="block border-b dark:border-gray-700 md:inline md:border-b-0">
                        <a href="#" class="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600">Marketplace</a>
                    </li>
                    <li class="block border-b dark:border-gray-700 md:inline md:border-b-0">
                        <a href="#" class="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600">Resources</a>
                    </li>
                    <li class="block border-b dark:border-gray-700 md:inline md:border-b-0">
                        <a href="#" class="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600">Forum</a>
                    </li>
                    <li class="block md:inline">
                        <a href="#" class="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600">Support</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <nav class="order-2 bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 md:order-3">
        <div class="flex flex-col items-center py-3 px-4 md:flex-row lg:px-6">
            <form class="relative mb-4 w-full md:mr-4 md:max-w-sm md:mb-0">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search">
            </form>
            <div class="grid grid-cols-2 gap-4 items-center w-full md:gap-0 md:flex md:w-auto">
                <button type="button" class="py-2.5 px-5 md:mr-4 text-sm font-medium text-gray-900 focus:outline-none justify-center bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"><svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"> <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/> </svg> Create a Team</button>
                <button type="button" class="text-white bg-primary-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center"><svg class="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/></svg> New Project</button>
            </div>
        </div>
    </nav>
</header>