import Link from 'next/link'

export default function Header (): JSX.Element {
  return (
    <header>
      <nav className="mb-2.5">
          <div className="container flex flex-wrap justify-between items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Scms</span>
              <div className="flex items-center lg:order-2">
                  <Link href="/authorization" className="text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-indigo-800 ring-2 ring-indigo-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-1.5 mr-2 dark:hover:bg-indigo-950 focus:outline-none">Login</Link>
              </div>
          </div>
      </nav>
    </header>
  )
}
