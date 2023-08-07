const set =  new Set([1, 2, 3]);

set.add(4);
set.delete(2);
set.add(4); // set will ignore this
console.log(set.has(4));
console.log(set.size);
set.clear();

for(const item  of set) {
    console.log(item)
}