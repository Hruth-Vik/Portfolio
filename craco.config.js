/****
 * CRACO config to suppress noisy source-map warnings from transitive deps (three-stdlib, mediapipe)
 * and to keep CRA default behavior otherwise.
 */

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Exclude specific packages from source-map-loader to avoid missing .map warnings
      const rules = webpackConfig.module.rules || [];
      rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((one) => {
            if (one.enforce === 'pre' && String(one.use?.loader || one.loader || '').includes('source-map-loader')) {
              one.exclude = Array.from(new Set([
                ...(one.exclude || []),
                /node_modules\/three-stdlib\//,
                /node_modules\/@mediapipe\/tasks-vision\//,
              ]));
            }
          });
        }
      });

      // Also ignore warnings for these modules just in case
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map.*three-stdlib/,
        /Failed to parse source map.*@mediapipe/,
      ];

      return webpackConfig;
    },
  },
};
