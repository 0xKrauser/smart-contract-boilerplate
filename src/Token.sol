// SPDX-FileCopyrightText: 2022 Devan Non <devanon@chainstride.capital>
//
// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import {ERC20} from 'solmate/tokens/ERC20.sol';

contract Token is ERC20('Token', 'TOK', 18) {}
