import Head from "next/head";
import { capitalize } from "utils/utils";

export default function Phrase({ data }) {
  const copyPhraseToClipboard = (phrase) => {
    navigator.clipboard.writeText(phrase).then(
      function () {
        console.log("fuck yeah");
      },
      function () {
        /!* clipboard write failed *!/;
      }
    );
  };

  return (
    <>
      <Head>
        <title>Happy Birthday in...</title>
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
                  alt={`Flag of ${data.language}`}
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">
                  {capitalize(data.language)}
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
          <div className="container px-8 mx-auto py-16 lg:px-4">
            <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg mx-auto">
              <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-3xl title-font">
                {data.formal}
              </h1>
              <span>Formal</span>
              <div className="flex justify-between items-center mt-5">
                <div
                  className="flex cursor-pointer"
                  onClick={() => copyPhraseToClipboard(data.formal)}
                >
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                    Copy
                  </span>
                </div>
                <div
                  className="flex cursor-pointer"
                  onClick={() => copyPhraseToClipboard(data.formal)}
                >
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
