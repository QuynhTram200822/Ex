import web3 from './web3';
import Record from './build/Record.json';

const instance = new web3.eth.Contract(
    Record.abi, // Lấy 'abi' từ tệp JSON (không cần parse)
    '0xE6E61ce2Ad181972B83FA85AC47a9cd8a3010B39' // Địa chỉ hợp đồng đã được triển khai
);

export default instance;

//Whenever there is a change in Solidity code, use this few commands
//Step 1: cd ethereum
//Step 2: node compile.js
//Step 3: node deploy.js
//Step 4: Paste the contract deployed address above