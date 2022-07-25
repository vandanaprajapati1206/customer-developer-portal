import React from "react";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
export const CodingBlock = ({ content }) => {
  return (
    <CopyBlock
      language="json"
      text={content}
      theme={tomorrowNight}
      wrapLines={true}
      showLineNumbers={false}
      codeBlock
    />
  );
};
