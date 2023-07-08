// SPDX-FileCopyrightText: 2023 Johannes Krauser III <krauser@hey.com>
//
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs'
import 'hardhat-abi-exporter'
import 'hardhat-preprocessor'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'
import { HardhatUserConfig, task } from 'hardhat/config'

dotenv.config()

import print from './tasks/print'

function getRemappings() {
  return fs
    .readFileSync('remappings.txt', 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => line.trim().split('='))
}

task('accounts', 'Prints the list of accounts').setAction(print)

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 888,
      },
    },
  },
  paths: {
    sources: './src', // Use ./src rather than ./contracts as Hardhat expects
    cache: './cache_hardhat', // Use a different cache for Hardhat than Foundry
  },
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: false,
      from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    },
  },
  // This fully resolves paths for imports in the ./lib directory for Hardhat
  preprocess: {
    eachLine: (hre) => ({
      transform: (line: string) => {
        if (line.match(/^\s*import /i)) {
          getRemappings().forEach(([find, replace]) => {
            if (line.match(find)) {
              line = line.replace(find, replace)
            }
          })
        }
        return line
      },
    }),
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    coinmarketcap: process.env.CMC_API_KEY,
    currency: 'USD',
    src: './src',
  },
  abiExporter: {
    path: './abis',
    clear: true,
    runOnCompile: true,
    flat: true,
  },
  mocha: {
    timeout: 500000,
  },
}

export default config
