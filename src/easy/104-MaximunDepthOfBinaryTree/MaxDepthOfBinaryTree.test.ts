import { TreeNode, maxDepth } from "./MaxDepthOfBinaryTree";

describe(`
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
`, () => {
    test(`
    Test of 2 nodes
    `, () => {
        const tree = new TreeNode(10,new TreeNode(1),new TreeNode(25,)); 
        expect(maxDepth(tree)).toStrictEqual(2);
    });
    test(`
    Test of 3 nodes
    `, () => {
        const tree = new TreeNode(10,new TreeNode(5,new TreeNode(2)),new TreeNode(25,)); 
        expect(maxDepth(tree)).toStrictEqual(3);
    });

});