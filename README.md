# meteor-package-test
This meteor project reproduces issue [#11320](https://github.com/meteor/meteor/issues/11320) in Meteor.

To Run this package:
1. Setup WSL2 environment.
2. Open Bash shell.
3. Go to a drive that is not the root drive for WSL2 (typically root drive is on C: drive).  e.g. go to E: drive: `cd /mnt/e`.
4. Clone project and try to build it.

```
git clone https://github.com/brucejo75/meteor-package-test
cd meteor-package-test
meteor npm install
npm start
```

Build will fail trying to install the npm package in the `brucejo:cow-say` package.

