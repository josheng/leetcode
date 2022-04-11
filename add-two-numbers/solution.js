/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  // linked list helper function
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      var newNode = new ListNode(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  }

var addTwoNumbers = (l1, l2) => {

  // 2 singly linked list
  // contain positive int
  // reverse order
  // create 2 array to store the values
  let list_arr1 = [];
  let list_arr2 = [];
  let sum;
  let sum_arr = [];
  // unshift all node value to the array
  // travel the node using recursion
  let travel1 = (list) => {
    list_arr1.unshift(list.val);
    if (!list.next) return;
    travel1(list.next)
  }
  let travel2 = (list) => {
    list_arr2.unshift(list.val);
    if (!list.next) return;
    travel2(list.next)
  }
  // console.log(sum);
  travel1(l1);
  travel2(l2);
  // use BigInt for int more then 16 place
  if (list_arr1.length > 16 || list_arr2.length > 16) {
    sum = BigInt(list_arr1.join('')) + BigInt(list_arr2.join(''));
  } else {
    sum = parseInt(list_arr1.join('')) + parseInt(list_arr2.join(''));
  }
  // convert the sum back into array, reversed
  for (let element of sum.toString()) {
    sum_arr.unshift(parseInt(element));
  }
  // console.log(list_arr1);
  // console.log(list_arr2);
  // console.log(sum_arr);

  // use the linked list helper
  let linked_list = new SinglyLinkedList();
  // push the element into the list
  for (let element of sum_arr){
    linked_list.push(element);
  }

  // // console.log([...sum.toString()]);
  // console.log(linked_list.head);
  // return the head node
  return linked_list.head;
};



let l1 = new ListNode(2, null);
let l2 = new ListNode(4, null);
let l3 = new ListNode(3, null);
let l4 = new ListNode(5, null);
let l5 = new ListNode(6, null);
let l6 = new ListNode(4, null);

l1.next = l2;
l2.next = l3;
l4.next = l5;
l5.next = l6;

addTwoNumbers(l1,l4);
