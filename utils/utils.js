export const copyPhraseToClipboard = (phrase) => {
  navigator.clipboard.writeText(phrase).then(
    function () {
      console.log(`Copied ${phrase} to clipboard`);
    },
    function () {
      console.error(`Failed to copy ${phrase} to clipboard`);
    }
  );
};
