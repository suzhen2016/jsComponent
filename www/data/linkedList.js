"use strict"
// 链表
class Chain{
    
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    
    //添加尾部节点
    append (data) {
        let node = new Node(data);
        if(this.head==null){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length +=1
        return true;
    }

    //打印链表值
    print(){
        let curren = this.head;
        let str = ''
        while (curren) {
            try {
                str += JSON.stringify(curren.data) + '-->';
                curren= curren.next;
            } catch (error) {
                console.log(error)
            }
        }
        str +='null';
        console.log('当前的链表',this.length,str)
    }

    //插入数据
    insert(index,data){
        if(index==this.length){ //处理位置为最后的
            this.append(data)
        }else if(index>this.length || index < 0){
            return false;
        }else{
            let node = new Node(data)
            if(index==0){ //处理位置为0的
                node.next = this.head;
                this.head = node;
            }else{
                let inser_before_index = 1,
                curren_node = this.head;
                while (inser_before_index<index) {
                    inser_before_index +=1;
                    curren_node = curren_node.next;
                    console.log('内',inser_before_index,index)
                }
                node.next = curren_node.next;            
                curren_node.next = node;
            }
            this.length +=1;
            console.log(this.length)
            return true;    
        }
        
    }

    //删除数据
    remove(index){
        if(index<0 || index>this.length)return null;
        else{
            let del_node = null,
                pre_index = 0,//前一个节点索引 向上找
                pre_node = null,//前一个节点
                curren_node = null; //当前的节点
            if(index==0){
                del_node = this.head;
                this.head = del_node.next;
            }else{
                curren_node= this.head;
                while (pre_index<index) {
                    pre_node = curren_node;
                    curren_node = curren_node.next;
                    pre_index +=1;
                    console.log(pre_index,index,pre_index<index,curren_node)
                }
                if(!curren_node.next){ //判定是否是尾元数；
                    this.tail = pre_node;
                }
                del_node = curren_node;
                pre_node.next = curren_node.next
                
            }
            this.length--;
            del_node.next = null;
            return del_node.data;

        }
            
        
    }
    
    //查找数据
    getNode(index){
       
        if( index < 0 || index > this.length ){
             return false; //边界
        }else {
            console.log(index,this.head ,this.length)
            let curren_index = 0,
            curren_node = this.head;
            while (curren_index < index) {
                curren_index ++;
                curren_node = curren_node.next;
            }

            return curren_node.data;
        }
        
    }

    //删除头部链表
    remove_head(){
        return this.remove(0)
    }

    //删除尾部链表
    remove_tail(){
        return this.remove(this.length-1)
    }

    //获得头部链表
    get_head(){
        return this.head.data;
    }

    //获得尾部链表
    get_tail(){
        return this.tail.data;
    }

    //获得当前的长度
    get_size(){
        return this.length;
    }
}

//创建数据节点
function Node(data){
    this.data = data
    this.next = null
}

//返回当前文件需要暴露的对象；
module.exports = Chain;