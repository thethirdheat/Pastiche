// leet code question 108

//let sArBST = (ar)=>{
//    let ret=[]
//    const invMerg = (ar)=>{
//        if(!ar.length){
//            return
//        }
//
//        let mid = Math.floor(ar.length/2)
//        console.log(ar)
//        let left =  ar.slice(0,mid)
//        let right =  ar.slice(mid+1,ar.length)
//
//        ret.push(ar[mid])
//        invMerg(right)
//        invMerg(left)
//    }
//    invMerg(ar)
//    console.log(ret,'this is ret')
//}
//
//
// //let bar= [-10,-3,0,5,9,10,111]
// let bar= [-10,-3,0,5,9]
//sArBST(bar)

let max=1000
let obj={}
for(let i =1;i<  max;i++){
    for(let j=1;j<max;j++){
        let cur = Math.pow(i,3)+Math.pow(j,3)
        //console.log(cur,'hi')
        if(obj[cur]===undefined){
            obj[cur]=[[i,j]]
        }else{
            obj[cur].push([i,j])
        }

    }
}
//let vals=Object.values(obj).filter(x=>x.length>2)
//console.log(vals)


/*
 * Complete the 'oddDigitPrime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 *  3. INTEGER t
 */

function oddDigitPrime(l, r, t) {
    // Write your code her  
    const digits=(num)=>num.toString().split("").reduce((acc,el)=>{acc.push(parseInt(el));
    return acc},[])

    function ods(ar){
//        return ar.reduce((acc,el)=>{
//        el%2==0&&(acc=false)
//        return acc
//    },true)
        let ret=true
        for(let i=0;i < ar.length;i++){
            if(ar[i]%2===0){
                ret=false
            }
        }
        return ret
    }
    function type(num){
        ar=num.toString("").split()

        let less
        let greater
        for (let i =0;i< ar.length;i++){
            if(parseInt(ar[i])%2===0){
                return 0
            }
            if(parseInt(ar[i])<=5){
                less=true
            }
            if(parseInt(ar[i])>5){
                greater=true
            }
            if(less&&greater){
                return 0
            }
        }
        if( less){
            return 1
        }
        if(greater){
            return 2
        }
        return 0
//        let ret=ar.filter(x=>x>5)
//        if( ar.length===ret.length){
//            return 2
//        }else if ( ret.length===0){
//            return 1
//        }else{
//            return 0
 ///       }

    }
     let siev= (num,ar)=>{
         let cur=ar[ar.length-1]
         let p=true
         while ( num>ar[ar.length-1]){
             for(let i =0;i<ar.length;i++){
                 if(cur%ar[i]===0){
                     p=false
                 }
             }
             if(p){
                 ar.push(cur)
             }
             p=true
             cur+=2
         }
         //console.log(ar)
         return ar

     }
    
    
    const isP= (num)=>{
        if(num<2){
            return false
        }
        let d=digits(num)
        if(!ods(d)){
            return false
        }
        if(type(d)!=t){
            return false
        }
//        for(let i =3;i < num;i+=2){
//            if(num%i==0){
//                return false
//            }
//        }
        return true
    }

    let count=0
    if(l%2==0){
        l=l+1
    }
    let prs=[2,3]


    for(let i =l;i<= r;i+=2){
        console.log("-----------------")
        if(prs[prs.length-1]<i){
            console.log(prs)
            prs=siev(i,prs)
        }
        if(prs[prs.length-1]===i){
            if(type(i)==t){
                count+=1
            }
        }

        //if(isP(prs[prs.length-1])){
            //console.log(i)
         //   count+=1
//            let digs=digits(i);
//            console.log(digs,ods(digs), type(digs))
//            if( ods(digs)){
//                if(type(digs)===t){
//                    count+=1
//                }
//
//            }


        //}
    }
    return count

    //console.log(pr)

}
let v= new Set
console.log(v)
v.add([1,2].toString())
console.log(v)
v.add([1,2].toString())
console.log(v)

console.log(v[0],'hi')
console.log(v.size)




/*mind mid*/
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const jet = new Cat("Jet");
const pavlov = new Dog("Pavlov");


///const myBoundSays = jet.says.myBind(pavlov);
//const BoundSays = jet.says.bind(pavlov)

//myBoundSays("meow", "a tree"); // Pavlov says meow to a tree!
//BoundSays("meow", "a tree"); // Pavlov says meow to a tree!


/*
 * Complete the function below.
 phone number
 */
function letterCombinations(str) {
    let alf={'2':["a","b","c"], '3':['d','e','f'],
    '4':["g","h","i"], '5':['j','k','l'],
    '6':["m","n","o"], '7':['p','q','r','s'],
    '8':["t","u","v"], '9':['w','x','y','z']}
   
    if(str.length===0){
        return [""]
    }
    let ret= []
    for( let i = 0;i < str.length;i++){
        if( alf[str[i]]){
            for(let j=0;j<alf[str[i]].length;j++){
                //console.log(alf[str[i]][j],'thsi is str[i]',str[i],str.slice(i+1))
                if(1){

                let oths=letterCombinations(str.slice(i+1))
                //console.log(alf[str[i]][j],oths,'end')
                //ret.push(oths.map(el=>`${alf[str[i]][j]}${el}`))
                ret.push(oths.map(el=>alf[str[i]][j].concat(el)))
                //return str[i][j].concat(letterCombinations(str.slice(i)))
                }
            }
        }
        
    }
    console.log(ret)
    return ret
}
//letterCombinations('45')
//console.log('wtf'.slice('wtf'.length),'hi')
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


let constructMaximumBinaryTree = function(nums) {
    debugger
    if(nums.length<1){
        return null
    }
    
    if(nums.length===1){
        return new TreeNode(nums[0])
    }
    let max = nums[0]
    let ind=0
    for( let i =0;i < nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
            ind=i
        }
    }
    
    let rot = new TreeNode(nums[ind])

    let l=nums.slice(0,ind)
    let r=nums.slice(ind)
    if(l.length){
    console.log(ind,rot,l,r,'this is inda')
        rot.left= constructMaximumBinaryTree(nums.slice(0,ind))
    }
    if(r.length){
   // console.log(ind,rot,l,r,'this is inda')
        rot.right= constructMaximumBinaryTree(nums.slice(ind+1))
    }
    return rot
};
console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))
nums=[1,2,3]
ind=1
//    console.log(nums.slice(0,ind))
//    console.log(nums.slice(ind))