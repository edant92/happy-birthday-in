import Head from "next/head";
import languages from "data/words.json";
import { capitalize } from "utils/utils";

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Birthday in...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container px-8 mx-auto pt-8 lg:px-4">
          <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-5xl title-font">
              Say Happy Birthday in{" "}
              <span className="font-bold underline">{languages.length}</span>{" "}
              different languages
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-6 gap-4">
            {languages.map((language) => {
              return (
                <div key={language.id} className="rounded-lg shadow-lg">
                  <a href={`/${language.language}`}>
                    <img
                      className="block h-auto w-full"
                      src={`/flags/${language.id}.svg`}
                      alt={`Flag of ${language.language}`}
                    />
                  </a>
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <a
                        className="no-underline hover:underline text-black"
                        href={`/${language.language}`}
                      >
                        {capitalize(language.language)}
                      </a>
                    </h1>
                  </header>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
