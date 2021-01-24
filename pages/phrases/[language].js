import { getAllPhraseLanguages, getWordData } from "lib/phrases";
import Phrase from "pages/phrases/Phrase";

export default function Post({ postData }) {
  return <Phrase data={postData} />;
}

export async function getStaticPaths() {
  const paths = getAllPhraseLanguages();
  console.log("getStaticPaths", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("getStaticProps", params);
  const postData = getWordData(params.language);
  return {
    props: {
      postData,
    },
  };
}
