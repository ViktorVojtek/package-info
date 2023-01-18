## package-info

There could be a moment in working on a project where as a developer you need to maintain your components based on multiple versions of other packages for a lots of reasons.  

This package provides a simple hook to get version information about a package you need to know from a *package.json* file.

### Installation
----------

```bash
npm install package-info
```
or 

```bash
yarn add package-info
```

### Usage

```javascript
import React from 'react';

// This is the package.json file you want to get information from,
// imported from its path relative to the current file.
import packageJson from './package.json';

import usePackageInfo from 'package-info';

const App = () => {
  const {version, name} = usePackageInfo({
    packageJsonFile: packageJson,
    packageName: 'lodash',
  });

  if (version === '3.0.0') {
    // Render component based on version of lodash 3.0.0
    ...
  }

  // Render component based on other versions of lodash
  return (
    <div>
      <h1>Package name: {name}</h1>
      <p>Version: {version}</p>
    </div>
  );
};
```


