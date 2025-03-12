import * as Repack from '@callstack/repack';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import packageJson from './package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default {
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions(),
  },
  module: {
    rules: [
      ...Repack.getJsTransformRules(),
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [
    new Repack.RepackPlugin(),
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'NearformMobileCommunity',
      remotes: {
        NativeComponents: 'NativeComponents@http://localhost:3000/android/components.container.js.bundle'
      },
      shared: Object.entries(packageJson.dependencies).reduce((acc, [name, version]) => {
        acc[name] = { singleton: true, eager: true, requiredVersion: version }
        return acc
      }, {}),
    })
  ],
};
