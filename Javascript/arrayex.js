// Array Literal
 
topics=["HTML", "CSS","JS", "BS", "React"]
console.log(topics)
console.log(typeof(topics))
 
// new Keyword
 
topics=new Array("HTML","CSS","JS","BS")
console.log(topics)
console.log(typeof(topics))
 
 
// Access Elements of an Array
 
topics=["HTML", "CSS","JS", "BS", "React"]
console.log(topics)
console.log(topics[2])
 
number=[2,4,6,8,10]
answer=number.map(Math.sqrt)
console.log(answer)
 
number=[1,2,3,4,5,6,7,8,9,10,8,1,2,3,8,8,8,8,8,8]
console.log(number.indexOf(8))
console.log(number.lastIndexOf(8))
console.log(number.includes(-6))
 
answer=number.map(index=>index*10)
console.log(answer)
 
 
topics=["HTML", "CSS","JS", "BS", "React"]
 
console.log(topics.slice(1,3))
 
// 1<3 - 1,2
// 1<=3 - 1,2,3
 
 
 
 
console.log(topics.reverse())
topics.sort()
console.log(topics)
console.log(topics.reverse())
 
answer=topics.unshift("Front End")
console.log(answer)
console.log(topics)
 
console.log(topics.shift())
console.log(topics)
 
topics.sort()
console.log(topics)
 
// arrayname.splice(index, howmanyvaluearedeletedcount, [new array values])
topics.splice(2,0,"Bulma")
topics.splice(2,2,"Java")
topics.splice(2,1)
console.log(topics)
 
console.log(topics.join(" - "))
 
console.log(topics.toString())
 
answer=topics.push("Redux")
console.log(answer)
console.log(topics)
 
console.log(topics.pop())
console.log(topics)
 
Skills=["HTML","CSS","JS","BS"]
HTMLTopics=["Tags","Media","Form"]
 
answer=Skills.concat(HTMLTopics)
console.log(answer)
 
console.log(Skills+HTMLTopics)
 
 
mark=[40,30,12,90,78,89,30,23,80,30]
answer=mark.filter(values=>values>35)
console.log(answer)
