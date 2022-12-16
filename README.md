# useConditionalEffect
### on npm (https://www.npmjs.com/package/@amir253700/use-conditional-effect)

<h1>About</h1>

This is a small react hook library that extends the capabilities of react useEffect hook. This allows the user to to stop execution of the useEffect under specified condition inside hook's function regardless of the change of dependencies.

# table of content
1. [The problem ](#problem)
2. [Solution ](#solution)
3. [Installation](#installation)
4. [Usage ](#usage) 
7. [License ](#license)

### Problem
Built-in react useEffect hook accepts two arguments: a callback function and a list of dependencies. Each time one of the items inside the dependency list is changed the useEfect runs again and the callback function will be called. But sometimes you may need that under some conditions the useEffect should not run the function again even if the dependency array has changed.

```
  useEffect(()=>{
        //do some calculation but when the for the first
        //time the firstNumber was bigger than the second
        //Number dont run this useEffect anymore<br>
    },[firstNumber,secondNumber])
```

### Solution
you can simply use this hook to solve this problem. The only thnig that should be noticed is the callback function that must return an object if a condition has met in order to stop execution of useEffect next time otherwise it has to return false. Also it has to be mentioned that dependency argument doesn't need to be an array. It can be an object,a number or anything else. 



### Installation
This module is distributed via npm which is bundled with node and should be installed as one of your project's dependencies:<br>
<code>npm install --save @amir253700/use-conditional-effect</code>

### Usage
here is a brief code sample for solving the mentioned problem above:



```
useConditionalEffect(()=>{
    if(firstNumber>secondNumber){
      return {finished:true,cleanup:()=>console.log("running clean up function!")}
    }else{
      //in this case the hook acts like a normal useEffect and runs again when dependencies are changed.
      return false 
    }
  },[firstNumber,secondNumber])
```

### license
MIT

