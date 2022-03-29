/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// var mergeTwoLists = function (list1, list2) {
//   // return empty node if both nodes are empty
//   if (!list1 && !list2) return list1;
//   // return the list with defined node if either 1 is empty
//   if (list1 && !list2) return list1;
//   if (!list1 && list2) return list2;

//   let nodeMerge = (node1, listnode1, listnode2) => {
//     // node 1 is the head
//     // i need to compare listnode1 and listnode1, smaller will go in
//     // repeat untill no more next
//     if (!listnode1 && !listnode2) return node1;
//     if (!listnode1 && listnode2) {
//       node1.next = listnode2
//       nodeMerge(node1.next, listnode1, listnode2.next)
//     }
//     if (listnode1 && !listnode2) {
//       node1.next = listnode1
//       nodeMerge(node1.next, listnode1.next, listnode2)
//     }

//     let nextNode1;
//     let nextNode2;
//     let currentNode1;
//     let currentNode2;

//     if(listnode1 && listnode2){

//       // do comparison
//       if (listnode1.val <= listnode2.val) {
//         node1.next = listnode1;
//         nextNode1 = node1.next;
//         currentNode1 = listnode1.next

//         nodeMerge(nextNode1, currentNode1, listnode2);
//       } else {
//         node1.next = listnode2;
//         nextNode1 = node1.next;
//         currentNode2 = listnode2.next

//         nodeMerge(nextNode1, listnode1, currentNode2);
//       }
//     }


//     return node1;
//   }
//   // need a variable to store the current node
//   let currentNode1 = list1;
//   let currentNode2 = list2;

//   // create new node outside of while loop first
//   if (currentNode1 && currentNode2) {
//     if (currentNode1.val <= currentNode2.val) {
//       // store list1 into my new node
//       let newNode = new ListNode(list1.val, null);
//       // set currentNode to be next node
//       currentNode1 = currentNode1.next || undefined
//       nodeMerge(newNode, currentNode1, currentNode2);
//     } else {
//       let newNode = new ListNode(list2.val, null);
//       currentNode2 = currentNode2.next || undefined
//       nodeMerge(newNode, currentNode1, currentNode2);
//     }
//   }




// };

var mergeTwoLists = function (list1, list2) {
  // return empty node if both nodes are empty
  if (!list1 && !list2) return list1;
  // return the list with defined node if either 1 is empty
  if (list1 && !list2) return list1;
  if (!list1 && list2) return list2;

  // need a variable to store the current node
  let currentNode1 = list1;
  let currentNode2 = list2;
  let newNode;
  let nextNode;

  if (currentNode1 && currentNode2) {
    if (currentNode1.val <= currentNode2.val) {
      newNode = new ListNode(currentNode1.val, null);
      currentNode1 = currentNode1.next
      nextNode = newNode;
    } else {
      newNode = new ListNode(currentNode2.val, null);
      currentNode2 = currentNode2.next
      nextNode = newNode;
    }
  }
  while (currentNode1 && currentNode2) {
    if (currentNode1.val <= currentNode2.val) {
      nextNode.next = new ListNode(currentNode1.val, null);
      nextNode = nextNode.next;
      currentNode1 = currentNode1.next
    } else {
      nextNode.next = new ListNode(currentNode2.val, null);
      nextNode = nextNode.next;
      currentNode2 = currentNode2.next
    }
  }

  while (currentNode1) {
    nextNode.next = new ListNode(currentNode1.val, null);
    nextNode = nextNode.next;
    currentNode1 = currentNode1.next
  }
  while (currentNode2) {
    nextNode.next = new ListNode(currentNode2.val, null);
    nextNode = nextNode.next;
    currentNode2 = currentNode2.next
  }

  return newNode


};

let head = new ListNode(1, null);
let node1 = new ListNode(2, null);
let node2 = new ListNode(4, null);
head.next = node1;
node1.next = node2;


let head2 = new ListNode(1, null);
let node3 = new ListNode(3, null);
let node4 = new ListNode(2, null);
head2.next = node3;
node3.next = node4;

console.log(mergeTwoLists(head,head2));
// console.log(node2);
