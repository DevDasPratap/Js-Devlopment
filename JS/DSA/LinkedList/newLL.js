/**
 * LinkedList
 * nodes are linked together by a referance fielda
 * 
 * two types of linkedlist:
 *  - singly linked list
 *    (Head)[value/data | pointer] -> [value/data | pointer] -> [value/data | pointer] -> [value/data | pointer(null)](Tail)
 *  - doubly linked list
 *    (Head)[ prointer to previous node | value/data | pointer to next node] <-> [ prointer to previous node | value/data | pointer to next node(null)] (Tail)
 * 
 * how linked list diferance from array?
 * 
 * linkedlist:
 *  - linear
 *  - non contigeous
 *  - node(value+pointer)
 *  - getting element is hard
 *  - insert/deleteion/update is easy
 *  - extra menory
 * 
 * Array:
 *  - linear
 *  - contigeous
 *  - just value
 *  - getting element is easy
 *  - insert/deleteion/update is complex
 *  - menory efficient
 * 
 * Usecases:
 *  - if you want to access by index fast => array
 *  - insert/delete at head or tail frequintly => linkedlist
 *  - memory efficient => array
 *  - do lost of traversa/manupulation => linkedlist
 */