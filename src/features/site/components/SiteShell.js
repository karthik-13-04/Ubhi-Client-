import SiteMarkup from '../content/SiteMarkup';
import SiteProfileAdminEnhancer from './SiteProfileAdminEnhancer';
import AdminApp from './admin/AdminApp';
import SiteRuntimeBridge from './SiteRuntimeBridge';
import SiteRuntimeScripts from './SiteRuntimeScripts';
import { siteGlobalStyles } from '../styles/site-styles';
import { loadSiteAssetMap } from '../server/site-assets';

export default async function SiteShell({ pathname }) {
  const assetMap = await loadSiteAssetMap();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: siteGlobalStyles }} />
      <SiteRuntimeBridge />
      <SiteRuntimeScripts pathname={pathname} />
      <SiteMarkup assetMap={assetMap} />
      <SiteProfileAdminEnhancer />
      <AdminApp />
    </>
  );
}
