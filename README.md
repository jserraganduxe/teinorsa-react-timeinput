# React time input

##### For what is this?

  - This is for a input times in hours, minutes and seconds.
  - Uses cases can be for example how mutch time I wasted, how mutch time I work today...

##### How it works?
  - You can work in milliseconds (For example 41848214 milliseconds = 11:37:28)
  - You can work in hours format (11:37:28) 

##### Extra features
  - Have a function `millisecondsToFormat` which get `time` in MS as param and return `HH:MM:SS`
  - Have a function `formatToMilliseconds` which get as params `hours, minutes, seconds` and return `ms`

### Installation

Install react-timeinput executing :

```sh
$ npm install --save @teinorsa/react-timeinput
```
### Usage
```sh
import ReactTimeInput from '@teinorsa/react-timeinput';
...
<ReactTimeInput {...props} />
```

### Props

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| prop | type | default
| ------ | ------ | ------ |
| divKey | string or number | 1
| inputProps | object (here can be name, onChange...) | {}
| renderHours | boolean | true
| renderMinutes | boolean | true
| renderSeconds | boolean | true
| defaultValue | string (milliseconds or HH:MM:SS) | ''
| worksInMilliseconds | boolean | true
| styled | boolean | false
| onChange | function (return val with MS or HH:MM:SS depending worksInMilliseconds) | false

## Examples
#### Example 1

#### Code

```sh
import React from 'react';
import './App.css';
import ReactTimeInput from '@teinorsa/react-timeinput';
function App() {
  return (
    <div className="App">
      <ReactTimeInput divKey={1} defaultValue='41848214' worksInMilliseconds={true} styled={true}  />
    </div>
  );
}

export default App;
```
#### Result
![ResulteExample1](https://i.gyazo.com/2065d90b249e0032c158d4cd72d6c17a.png)

#### Example 2

#### Code

```sh
import React from 'react';
import './App.css';
import ReactTimeInput from '@teinorsa/react-timeinput';
function App() {
  return (
    <div className="App">
        <ReactTimeInput 
            divKey={1} 
            defaultValue='35:40:13' 
            worksInMilliseconds={false}  
            renderSeconds={false} 
            inputProps={{name: 'mytimeinput', id: 'myid'}} 
        />
    </div>
  );
}

export default App;
```
#### Result
![ResulteExample2](https://i.gyazo.com/2bbb6c316af8ef1b0764e0c2328e43b2.png)