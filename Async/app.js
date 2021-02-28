//console.log(1);
//console.log(2);

//setTimeout(() => {
  //  console.log('callback fucntion fired');

//}, 2000);

//console.log(3);
//console.log(4);

const getTodos = (resource, callback) =>{

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
  })
  request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText)
       // callback(undefined, data);
       resolve(data)
    } else if(request.readyState === 4) {
       // callback('could not fetch data', undefined);
       reject('error getting resource')    
      }
})

request.open('GET', resource);
request.send();
}

getTodos('todos/josh.json').then(data => {
  console.log('promise resolved:', data);
  return getTodos('todos/luis.json')
}).then(data => {
  console.log('promise 2 resolved', data);
  return getTodos('todos/shaun.json');
}).then(data => {
  console.log('promise 3 resolved', data);   
}).catch(err => {
  console.log('promise rejected:', err)
});

//getTodos('todos/josh.json', (err, data) => {
 //console.log(data)
 //getTodos('todos/luis.json', (err, date)=> {
  // console.log(data)
  // getTodos('todos/shaun.json', (err, data) => {
   //  console.log(data)
  // })
// })
//});

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve('some data');
    reject('some error')
  })

}

getSomething().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})


// fetch api

//fetch('todos/josh.json').then((response) => {
//  console.log('resolved', response);
 // return response.json();
//}).then(data => {
 // console.log(data);
//}).catch((err) => {
 // console.log('rejected', err)
//})
// async and await
const getTodos = async () => {
  const response = await fetch('todos/josh.json');

  if(response.status !== 200){
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();
  return data;
};  
getTodos();

//console.log(1)
//console.log(2);

getTodos()
  .then(data => console.log('resolved:', data));
  .catch(err => console.log('rejected:', err.message))

//console.log(3)
//console.log(4)