import HtmlFragment from './HtmlFragment';
import { loadFragment } from '../lib/site-fragments';

export default function RoutePage({ fragmentName }) {
  const html = loadFragment(fragmentName).replace(
    /class="page"/,
    'class="page is-active"'
  );

  return <HtmlFragment html={html} />;
}
