// SPDX-FileCopyrightText: 2022 Devan Non <devanon@chainstride.capital>
//
// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "forge-std/Test.sol";

import "../src/Token.sol";

contract TokenTest is Test {
    Token t;

    function setUp() public {
        t = new Token();
    }

    function testName() public {
        assertEq(t.name(), "Token");
    }
}
