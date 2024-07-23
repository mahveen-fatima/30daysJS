// Day-11 Promises and Async/Await
// 1.Understanding promises

//1
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("A message after 2 seconds")
    }, 2000)
})

promiseOne.then((message) => {
    console.log(message);
})

//2
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This error message after 2 seconds"))
    }, 2000)
})

promiseTwo
 .then((message) => {
    console.log(message);
 })
 .catch((error) => {
    console.error("Promsie rejected:", error.message)
 })


// 2. Chaining promises
//1
function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 1');
      }, 1000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 2');
      }, 2000);
    });
  }
  
  function fetchData3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 3');
      }, 3000);
    });
  }
  
  fetchData1()
    .then((data1) => {
      console.log(data1);
      return fetchData2();
    })
    .then((data2) => {
      console.log(data2);
      return fetchData3();
    })
    .then((data3) => {
      console.log(data3);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });


// 3. Using Async/Await
//1
async function resolvedVal() {
    const promiseThree = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved message after 2 seconds")
        }, 2000)
    });
    try {
        const result = await promiseThree;
        console.log(result);
    } catch (error) {
        console.error("Promise rejected:", error);
    }
}
resolvedVal()

//2
async function rejectedPromise() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('rejected error message after 2 seconds'));
      }, 2000);
    });
  
    try {
      const result = await myPromise;
      console.log(result);
    } catch (error) {
      console.error('Promise rejected:', error.message);
    }
  }
  
  rejectedPromise();


//4. Fetching data from an api
//1

const apiURL = 'https://api.github.com/users/mahveen-fatima';

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Response data:', data);
  })
  .catch((error) => {
    console.error('Fetch error:', error); 
  });

//2
async function fetchData() {
    const apiURL = 'https://api.github.com/users/mahveen-fatima';
  
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  fetchData();
  
//5.Concurrent promises
//1
function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 1');
      }, 1000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 2');
      }, 2000);
    });
  }
  
  function fetchData3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 3');
      }, 3000);
    });
  }
  
  Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((values) => {
      console.log('All data:', values);
    })
    .catch((error) => {
      console.error('One or more promises rejected:', error);
    });

//2
function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 1');
      }, 3000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 2');
      }, 2000);
    });
  }
  
  function fetchData3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from server 3');
      }, 1000);
    });
  }
  
  Promise.race([fetchData1(), fetchData2(), fetchData3()])
    .then((value) => {
      console.log('First resolved data:', value);
    })
    .catch((error) => {
      console.error('First rejected promise:', error);
    });
  
  