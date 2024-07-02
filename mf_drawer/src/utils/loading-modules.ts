export async function loadingModules() {
  try {
    const modules = await Promise.all([
      import('mf_videos/AppVideosPage'),
      import('mf_videos/AppFavoritesPage')
    ]);

    return {
      AppVideosPage: modules?.[0]?.AppVideosPage ?? null,
      AppFavoritesPage: modules?.[1]?.AppFavoritesPage ?? null
    }

  } catch (error) {
    console.error(error)
    return null
  }
}