import { Document as RichTextDocumnet } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type RichTextType = {
  document: RichTextDocumnet;
}

export default function RichText({ document }: RichTextType) {
  if (!document) {
    return null;
  }
  return <>{documentToReactComponents(document)}</>;
}