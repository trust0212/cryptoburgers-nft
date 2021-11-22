/**
 * This is the function for the backend:
 * 
 * You receive the address at the endpoint
 * 
 */
 const { MerkleTree } = require('merkletreejs');
 const keccak256 = require('keccak256');

 const whiteListArray = require('../packages/backend/src/model/whitelist.model.js');
 const leaves = whiteListArray.map(v => keccak256(v));
 const tree = new MerkleTree(leaves, keccak256, { sort: true });
 const root = tree.getHexRoot();
 const leaf = keccak256(inputs.address);
 const proof = tree.getHexProof(leaf);
 const verified = tree.verify(proof, leaf, root);

 if (verified) {

    // Call the mintWhitelist function in the contract like mint with all the parameters.
    // leaf: address of the user
    // proof: proof

 } else {
     
    //  Not whitelisted

 }