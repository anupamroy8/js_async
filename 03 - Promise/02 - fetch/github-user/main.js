
function fetchData() {
    url = 'https://api.github.com/users/nnnkit';
    fetch(url).then((response)=> {
      return response.json();
    }).then((data) => {
    console.log(data);
    let obj = {};
    obj.name = data.name;
    obj.login = data.login;
    obj.avatar_url = data.avatar_url;
    obj.bio = data.bio;
    obj.company = data.company;
    obj.follower = data.followers_url;
    // console.log(obj.follower);
    console.log(obj)
    function fetchFollower() {
        url = `${obj.follower}`;
        console.log(obj.follower)
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch(() => console.error('error'))
    }
    fetchFollower();
    })
}
fetchData();


//   function fetchFollower() {
//     url = "https://api.github.com/users/nnnkit/followers";
//     fetch(url).then((response)=> {
//       return response.json();
//     }).then((data) => {
//       console.log(data);
//     }).catch(()=> console.error('error'))
//   }

//   fetchFollower()