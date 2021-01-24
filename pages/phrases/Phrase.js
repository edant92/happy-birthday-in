import Head from "next/head";
import {capitalize} from "utils/utils";

export default function Phrase({ data }) {
  return (
    <>
      <Head>
        <title>Happy Birthday in...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="text-gray-700 body-font">
          <div className="container px-8 mx-auto py-36 lg:px-4">
            <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
              <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-5xl title-font">
                {data.formal}
              </h1>
            </div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
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
            <p className="w-full mt-12 mb-8 text-sm text-center text-gray-500">
              <a
                href="#"
                className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
              >
                First Action
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
              >
                Second Action
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
