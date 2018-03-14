/* SystemJS module definition */
declare var module: NodeModule;
//to import data from JSON files (config data; not API mocks)
declare module "*.json" {
	const value: any;
	export default value;
}
interface NodeModule {
  id: string;
}
