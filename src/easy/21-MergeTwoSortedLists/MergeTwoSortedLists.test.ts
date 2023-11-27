import { ListNode, mergeTwoLists } from "./MergeTwoSortedLists";

describe(`
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`, () => {
    test(`
    Test of 2 nodes
    `, () => {
        const list1Node = new ListNode();
        const list1Node2 = new ListNode();
        const list1Node3 = new ListNode();
        list1Node.val = 1;
        list1Node2.val = 2;
        list1Node3.val = 4;
        list1Node2.next = list1Node3;
        list1Node.next = list1Node2;
        const list2Node = new ListNode();
        const list2Node2 = new ListNode();
        const list2Node3 = new ListNode();
        list2Node.val = 1;
        list2Node2.val = 3;
        list2Node3.val = 4;
        list2Node2.next = list2Node3;
        list2Node.next = list2Node2;

        const list3Node1 = new ListNode();
        const list3Node2 = new ListNode();
        const list3Node3 = new ListNode();
        const list3Node4 = new ListNode();
        const list3Node5 = new ListNode();
        const list3Node6 = new ListNode();
        list3Node6.next = null;
        list3Node1.val = 1;
        list3Node2.val = 1;
        list3Node3.val = 2;
        list3Node4.val = 3;
        list3Node5.val = 4;
        list3Node6.val = 4;
        list3Node5.next = list3Node6;
        list3Node4.next = list3Node5;
        list3Node3.next = list3Node4;
        list3Node2.next = list3Node3;
        list3Node1.next = list3Node2;
        expect(mergeTwoLists(list1Node,list2Node)).toStrictEqual(list3Node1);
    });
    test(`
    Test of 2 nodes nulls
    `, () => {
        expect(mergeTwoLists(null,null)).toStrictEqual(null);
    });
});