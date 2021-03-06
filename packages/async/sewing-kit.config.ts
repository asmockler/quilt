import {createPackage, Runtime} from '@sewing-kit/config';
import {quiltPackage} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index'});
  pkg.entry({name: 'babel', root: './src/babel-plugin', runtime: Runtime.Node});
  pkg.entry({
    name: 'sewing-kit',
    root: './src/sewing-kit',
    runtime: Runtime.Node,
  });
  pkg.entry({
    name: 'assets',
    root: './src/assets',
  });
  pkg.use(quiltPackage());
});
