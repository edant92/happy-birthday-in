import {copyPhraseToClipboard} from "utils/utils";

export default function PhraseCard({ phraseData }) {


  return(
    <div className="container px-8 mx-auto pt-16 lg:px-4">
      <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg mx-auto">
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-3xl title-font">
          {phraseData.text}
        </h1>
        <span>{phraseData.i}</span>
        <div className="flex justify-between items-center mt-5">
          <div
            className="flex cursor-pointer"
            onClick={() => copyPhraseToClipboard(phraseData.text)}
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
            onClick={() => copyPhraseToClipboard(data.text)}
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
  )

}