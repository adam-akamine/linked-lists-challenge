/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;
  return {

    getHead: function (){
      return head;
    },

    getTail: function () {
      if(!head) {
        return null;
      }
      var node = head;
      while(node.next!==null) {
        node = node.next;
      }
      return node;
    },

    add: function (value) {
      var newNode = {};
      newNode = {
        value: value,
        next: null
      };
      var current = head;
      //case: no head, no tail
      if(head === null && tail === null) {
        head = newNode;
        tail = newNode;
      }
      //case: head exists, tail exists
      else {
        current = head;
        while(current.next) {
          current = current.next;
        }
        current.next = newNode;
        tail = newNode;
      }
      length++;
      return newNode;
    },

    addToFront: function (value) {
      var newNode = {};
      newNode = {
        value: value,
        next: null
      };
      var current = head;
      //case: no head, no tail
      if(head === null && tail === null) {
        head = newNode;
        tail = newNode;
      }
      //case: head exists, tail exists
      // add to front of list
      else {
        newNode = {
          value: value,
          next: head
        };
        head = newNode;
      }
      length++;
      return newNode;
    },

    remove: function(index) {
      var node = head;
      var prev = node;
      var count = 0;

      //check if removing head
      if(index === 0) {
        console.log("removing head");
        head = node.next;
        length--;
        return true;
      }
      // check if index is outside of list length
      if(index > length || index < 0) {
        console.log("index is out of range.");
        return false;
      }
      else {
        while(count < index) {
          prev = node;
          node = node.next;
          count++;
        }
        console.log("prev: " + prev.value);
        //console.log("prev.next: " + prev.next.value);
        if(node) {
          prev.next = node.next;
          length--;
          return true;
        }
        else {
          return false;
        }
      }
    },

    get: function(index) {
      var node = head;
      var count = 0;
      while(count < index  && node !== null) {
        node = node.next;
        count++;
      }
      if(node === null) {
        //console.log("item not found.");
        return false;
      }
      else {
        console.log("node[" + index + "] = "  + node.value);
        return node;
      }
    },

    insert: function(value, index) {
      var newNode = {
        value: value,
        next: null
      };
      var node = head;
      var prev = node;
      var count = 0;
      // check if index is outside of list length
      if(index >= length || index < 0) {
        console.log("index is out of range.");
        return false;
      }
      // check if index is at index 0
      if(index === 0) {
        newNode.next = node;
        head = newNode;
        return true;
      }
      else {
        while(count < index) {
          prev = node;
          node = node.next;
          count++;
        }
        prev.next = newNode;
        newNode.next = node;
        return true;
      }
    },

    displayList: function() {
      var listString = "";
      var arrayOfStrings = [];
      if(head === null) {
        document.getElementById("output").innerHTML = "List is empty.";
      }
      else {
        var node = head;
        while(node.next !== null) {
          listString = node.value.concat(listString + "\n");
          node = node.next;
        }
        listString = node.value.concat(listString);
        //arrayOfStrings = listString.split(", ");
        document.getElementById("output").innerHTML = listString;
      }
    },

    removeAll: function () {
      head = null;
      tail = null;
    }
  };
}