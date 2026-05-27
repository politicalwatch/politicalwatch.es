export function useDdThemes() {
  const routeLocale = useRouteLocale();
  const collection = `dd_themes_${routeLocale}` as 'dd_themes_es' | 'dd_themes_en';

  return useAsyncData(`dd-themes-${routeLocale}`, () =>
    queryCollection(collection).order('order', 'ASC').all()
  );
}
