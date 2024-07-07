This repository is uplodaing various projects built in React-Native with Typescript.

All projects are built for private purpose : just for fun, for studying, for experiments and etc. It's not for public use, but feel free to use if anyone needs it.

Each project is managed separately by each branch corresponding to. 

### List of branches
- [main](https://github.com/heizence/React-Native-toy-projects) (only contains minimum configurations for React-Native app)
- [basicCalculator](https://github.com/heizence/React-Native-toy-projects/tree/basicCalculator)

# Getting started

## Prerequisite

- JDK version >= 17.0.0
- XCode version >= 15.4
- CocoaPods version >= 1.15.5
- @react-native-community/cli version = 13.0.0(for RN 0.74.0).
For more information about cli version, visit https://github.com/react-native-community/cli?tab=readme-ov-file

## Installation

### 1. Clone repository

```
git clone https://github.com/heizence/React-Native-toy-proejcts
```

### 2. Switch to a branch to run

All branches have different dependencies or requirements since each branch deals with different project. You need to move to a branch you'd like to run before installing dependencies.

**"main" branch only contains minimum configuration for React-Native app, not anything useful.**

It's okay to skip this step if you want. However, you'll need to install dependencies again if additional dependencies are required.

### 3. Install dependencies

```
# using npm
npm install

# OR using Yarn
yarn install
```

For iOS, installing(or updating) pod files is normally required.

In root/iOS directoy, install(or update) pod files.

```
# for install
pod install

# for update
pod update
```

## Start application

Same as starting normal react-native applications.

**For Android**

```
# using npm
npm run android

# OR using Yarn
yarn android
```

**For iOS**

```
# using npm
npm run ios

# OR using Yarn
yarn ios
```
