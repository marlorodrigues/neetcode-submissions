/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

//   class ListNode {
//     val: number
//     next?: ListNode

//       constructor(val = 0, next = null) {
//           this.val = val;
//           this.next = next;
//       }
//  }

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {

        if(!list1){
            return list2
        }
        if(!list2){
            return list1
        }

        var dummy: ListNode = new ListNode()
        var newList = dummy

        while(list1 && list2){
            if(list1.val < list2.val){
                newList.next = list1
                list1 = list1.next
            }
            else {
                newList.next = list2
                list2 = list2.next
            }

            newList = newList.next
        }

        if(list1){
            newList.next = list1
        }
        else if(list2){
            newList.next = list2
        }

        return dummy.next
    }
}
