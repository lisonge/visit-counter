import { build } from 'esbuild';

// TODO 需要寻求更好的信息输出体验

build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outfile: './dist/index.js',
    sourcemap: true,
    watch: process.argv.includes('--watch')
        ? {
              onRebuild(error, result) {
                  if (error != null) {
                      console.log('rebuild success', result);
                  } else {
                      console.log('rebuild failed', result);
                  }
              },
          }
        : undefined,
    plugins: [
        {
            // see https://github.com/evanw/esbuild/issues/1719
            name: 'fix-node-html-parser',
            setup(build) {
                build.onResolve({ filter: /^node-html-parser$/ }, () => {
                    return { path: require.resolve('node-html-parser') };
                });
            },
        },
    ],
})
    .then((buildResult) => {
        console.log('finished', buildResult);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
