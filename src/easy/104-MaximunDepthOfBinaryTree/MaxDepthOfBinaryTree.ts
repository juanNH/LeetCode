
//Definition for a binary tree node.
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function maxDepth(root: TreeNode | null): number {
    const searchMaxDepth = (root: TreeNode | null): number => {
        if (!root) {
            return 0;
        }
        const rDepth = searchMaxDepth(root.right);
        const lDepth = searchMaxDepth(root.left);
        if (lDepth > rDepth)
            return (lDepth + 1);
        return (rDepth + 1);
    }
    return searchMaxDepth(root);
};