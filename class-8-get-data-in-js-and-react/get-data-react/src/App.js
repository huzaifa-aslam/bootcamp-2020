import React, { useEffect, useState } from "react";

function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {
  // fetch("https://api.github.com/users/huzaifa-aslam/repos")
  // .then(resp=>resp.json())
  // .then(res=>{console.log(res);
  //  setRepos(res)
  // })

  async function getData(){
    // const getApi=await fetch("https://api.github.com/users/huzaifa-aslam/repos");
    // const data=await getApi.json();
    // console.log(data)
    // setRepos(data)

    const postApi=await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      body: JSON.stringify({
        title: 'da',
        body: 'bar',
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const data=await postApi.json()
    console.log(data)

  }

  getData()

  }, []);
  return (
    <div className="">
      <h1>hello world </h1>
      {repos.map((item,ind)=>{
        return(
        <li key={ind}>{item.name}</li>
        )
      })}
    </div>
  );
}

export default App;
