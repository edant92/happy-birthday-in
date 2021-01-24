import { getAllPhraseLanguages, getWordData } from "lib/phrases";
import Phrase from "@components/Phrase";

export default function Post({ postData }) {
  return <Phrase data={postData} />;
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  const paths = getAllPhraseLanguages();
  return {
    paths,
    fallback: false,
  };
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps({ params }) {
  const postData = getWordData(params.language);
  return {
    props: {
      postData,
    },
  };
}
