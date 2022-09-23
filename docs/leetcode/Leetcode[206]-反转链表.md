

## Leetcode[206]-反转链表

### 题干
::: tip
给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1：**

![img](/algorithm/base/rev1ex1-166389740499813.jpg)

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

**示例 2：**

![img](/algorithm/base/rev1ex2-166389740499815.jpg)

```
输入：head = [1,2]
输出：[2,1]
```

**示例 3：**

```
输入：head = []
输出：[]
```



**提示：**

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`



**进阶：**链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
:::

### 分析

对于`反转链表`来说，和传统的反转数组不同，我们不需要关心链表里面存储的值是多少，我们只需要关系链表的`指向`。

反转链表 == 反转链表指向

ok 基本思路确定，那么如何反转链表的指向呢？

- 首先我们现在需要确定链表的尾节点
- 然后使尾节点指向，上一个节点
- 然后使用上一个节点指向上上一个节点
- 是不是很像递归，由最后的返回结果向上返回。

::: tip
1.要注意要断掉原有节点的指向不然会造成死循环

![image-20220923100420590](/algorithm/base/image-20220923100420590.png)

2.还要注意递归的结束条件-`尾节点为Null或者节点的下个节点为Null`
:::
### 解法1

````java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {

        if (head == null || head.next == null) {
            return head;
        }

        // 第一次lastHead有返回值的时候 
        // 1 2 3 4 5
        // lastHead = 5   head-- 4
        ListNode cur =  reverseList(head.next);
        

        // 此时head==4这个节点，我们让他下一个节点5这个节点的next指向指向他(4) 这样就完成了反转
        head.next.next = head;

        // 不要忘记断开原有节点(4)的指向哦 不然会造成死循环
        head.next = null;

        // 我们把每次反转后的结果传递给上一层
        return cur;
    }
}
````
