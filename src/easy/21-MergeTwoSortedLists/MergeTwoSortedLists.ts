// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null
    const newList = new ListNode();
    validateList(list1, list2, newList);
    return newList;
};

function validateList(list1: ListNode | null, list2: ListNode | null, newList: ListNode): void {
    if (!list1 && !list2) {
        return;
    }
    newList.next = new ListNode();
    if (!list1) {
        newList.val = list2?.val as number;
        if (!list2?.next) newList.next = null
        validateList(list1, list2?.next as ListNode, newList.next as ListNode);
        return
    } else if (!list2) {
        newList.val = list1.val;
        if (!list1.next) newList.next = null
        validateList(list1.next, list2, newList.next  as ListNode);
        return
    }
    newList.val = list1.val <= list2.val ? list1.val : list2.val
    if (list1.val <= list2.val) {
        validateList(list1.next, list2, newList.next);
    } else {
        validateList(list1, list2.next, newList.next);
    }
}
