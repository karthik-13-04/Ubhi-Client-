export default function HtmlFragment({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
