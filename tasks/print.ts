// SPDX-FileCopyrightText: 2022 Devan Non <devanon@chainstride.capital>
//
// SPDX-License-Identifier: Apache-2.0

import { HardhatRuntimeEnvironment } from 'hardhat/types/runtime'
export default async function example(params: any, hre: HardhatRuntimeEnvironment): Promise<void> {
  const accounts = await hre.ethers.getSigners()
  console.log('Accounts:')
  for (const account of accounts) {
    console.log(account.address)
  }
}
