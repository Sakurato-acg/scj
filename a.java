public class a {
    public static void main(String[] args) {
        Linklist1 list = new Linklist1();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        list.printList();
    }
}

class Node {
    public int data;
    public Node next;

    public Node(int data) {
        this.data = data;
    }

    public Node() {
    }

    @Override
    public String toString() {
        return "Node{" +
                "data=" + data +
                ", next=" + next +
                '}';
    }
}

class Linklist1 {
    public Node head;
    public Node rear;
    public int size;

    public Linklist1() {
        rear = head = null;
        size = 0;
    }

    public void push(int data) {
        Node hd = new Node(data);
        if (size == 0) {
            hd.next = hd;
            rear = head = hd;
            size++;
        } else {
            rear.next = hd;
            hd.next = head;
            rear = hd;
            size++;
        }
    }

    // 打印全部节点
    public void printList() {
        Node nd = new Node();
        nd = head;
        try {
            // 判断头结点下一个必须是否有元素存在，不能再指向头结点了，不然死循环
            while (nd.next != head) {
                System.out.print(nd.data);
                System.out.print("->");
                nd = nd.next;
            }
            System.out.print(nd.data);
            System.out.print("->");
            System.out.print(head.data);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}