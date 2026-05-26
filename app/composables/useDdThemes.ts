export function useDdThemes() {
  const { locale } = useI18n();
  const collection = `dd_themes_${locale.value}` as 'dd_themes_es' | 'dd_themes_en';

  return useAsyncData(`dd-themes-${locale.value}`, () =>
    queryCollection(collection).order('order', 'ASC').all()
  );
}
