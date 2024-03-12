import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
  '@lib': path.join(files, 'lib'),
  '@config': path.join(files, 'config'),
  '@utils': path.join(files, 'utils'),
  '@models': path.join(files, 'models'),
});
