// SPDX-FileCopyrightText: 2022 Devan Non <devanon@chainstride.capital>
//
// SPDX-License-Identifier: Apache-2.0

import '@nomicfoundation/hardhat-ethers'
import '@nomicfoundation/hardhat-chai-matchers'
import { use as chaiUse, expect } from 'chai'
import { chaiEthers } from 'chai-ethers'
import hre from 'hardhat'
import { Token } from 'typechain-types'

chaiUse(chaiEthers)

describe('Token', function () {
  it('Should return name Token', async function () {
    const Token = await hre.ethers.getContractFactory('Token')
    const token = <Token>await Token.deploy()
    await token.waitForDeployment()

    expect(await token.name()).to.equal('Token')
  })
})
