import Head from "next/head";
import PhraseCard from "@components/PhraseCard";

export default function Phrase({ data }) {

  return (
    <>
      <Head>
        <title>Happy Birthday in {data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header className="bg-white shadow">
          <div className="flex items-center justify-start h-16">
            <div className="max-w-7xl mx-auto flex items-center space-x-4 py-6 px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12"
                  src={`/flags/${data.id}.svg`}
                  alt={`Flag of ${data.title}`}
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">
                  {data.title}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <a
                  href="/"
                  className="p-1 mr-8 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main>
          {data.variations.map((variation) => (
            <PhraseCard phraseData={variation} />
          ))}
        </main>
      </div>
    </>
  );
}
