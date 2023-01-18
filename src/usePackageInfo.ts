export type PackageJson = {
  dependencies: any;
  devDependencies: any;
} & Record<string, any>;

export type PackageJsonInfo = {
  version: string;
  name: string;
};

export type UsePackageJsonInfoInputOptions = {
  packageJsonFile: PackageJson;
  packageName: string;
};

const usePackageJsonInfo = (options: UsePackageJsonInfoInputOptions): PackageJsonInfo => {
  const { packageJsonFile, packageName } = options;

  if (!packageName) {
    throw new Error('Package title is required. Provide a package title.');
  }

  const packageVersion: string =
    (packageJsonFile?.dependencies as any)[packageName] ||
    (packageJsonFile?.devDependencies as any)[packageName];

  if (!packageVersion) {
    throw new Error(
      `Package "${packageName}" not found. Check package.json file or check the package title you've provided.`,
    );
  }

  const info = {
    version: packageVersion,
    name: packageName,
  };

  return info;
};

export default usePackageJsonInfo;
