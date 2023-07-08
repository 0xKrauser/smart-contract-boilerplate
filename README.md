# smart-contract-boilerplate

[![test](https://github.com/0xKrauser/smart-contract-boilerplate/actions/workflows/test.yml/badge.svg)](https://github.com/0xKrauser/smart-contract-boilerplate/actions/workflows/test.yml)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/0xKrauser/smart-contract-boilerplate)

**Smart contract development environment boilerplate, inspired by [hardhat-foundry-template](https://github.com/foundry-rs/hardhat-foundry-template)**


### Gitpod

This repo can be opened in an ephemeral dev environment on Gitpod, the `.gitpod.yml` workflow will take care of installing the necessary dependencies and tools we highlighted below.


### Installation

  * Install Foundry
  If you haven't already, install [Foundry](https://book.getfoundry.sh/getting-started/installation)
  and initialize it on this project with
    ```bash
      forge install
    ```
  * Install npm Dependencies
    ```bash
      yarn
    ```
  * You can now run the following commands to check if tests are running properly.
    ```bash
    yarn test:forge
    yarn test:hardhat
    ```


### Reuse

This repo starts with a minimal integration of [Reuse Software](https://reuse.software/) to keep licensing clean and tidy for developers and consumers alike. If you want to make use of this schema too, install the [Reuse Helper Tool](https://git.fsfe.org/reuse/tool). You can then run
```bash
yarn reuse lint
```
to check which files are missing license headers.


### Notes

Whenever you install new libraries using Foundry, make sure to update your `remappings.txt` file by running `yarn remappings`. This is required because we use `hardhat-preprocessor` and the `remappings.txt` file to allow Hardhat to resolve libraries you install with Foundry.