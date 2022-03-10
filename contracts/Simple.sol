// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;


contract Simple{

    string discordHandle;
    address owner;

    constructor(string memory _name) {
        owner = msg.sender;
        discordHandle = _name;
    }

    function greet() public pure returns(string memory){
        return "Hello there, i hope your day is going well";
    }

    function getDiscordHandle() public view returns(string memory){
        return discordHandle;
    }

    // function to change the discord handle
    function setDiscordHandle(string memory _name) public {
        require(msg.sender == owner);
        discordHandle = _name;
    }

}

