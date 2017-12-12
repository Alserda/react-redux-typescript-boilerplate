/**
 * Allows hot module replacement for webpack
 */
declare var module: NodeModule;
interface NodeModule {
  hot: {
    accept(path:string, callback:() => void): void;
  }
}
