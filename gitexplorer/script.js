async function getUser(user) {
  try {
    stat.innerHTML = `<h2>Fetching data...</h2>`
    user = user.toLowerCase().trim()
    const url = `https://api.github.com/users/${user}`
    const response = await fetch(url)
    const data = await response.json()
    if(response.status === 404) {
      throw new Error('User not found')
    }
    printData(data)
  } catch (error) {
    stat.innerHTML = `<h2>Error Occured ${error.message}</h2>`
    console.log(error)
  }
}

function printData(data) {
  stat.innerHTML = `<h2>Data fetched successfully</h2>`
  render.innerHTML = `
  <h2>${data.name}</h2>
  <img src="${data.avatar_url}" alt="${data.name}" width="200">
  <p>${data.bio}</p>
  <p>Followers: ${data.followers}</p>
  <p>Following: ${data.following}</p>
  <p>Public Repos: ${data.public_repos}</p>
  <p>Public Gists: ${data.public_gists}</p>
  <p>Created At: ${data.created_at}</p>
  <p>Updated At: ${data.updated_at}</p>
  <p>Location: ${data.location}</p>
  <p>Blog: ${data.blog}</p>
  <p>Email: ${data.email}</p>
`
}

const username = document.querySelector('#username')
const fetchBtn = document.querySelector('#fetchBtn')
const stat = document.querySelector('#status')
const render = document.querySelector('#userData')

fetchBtn.addEventListener('click', async () => {
  const user = await getUser(username.value)
  console.log(username.value)
  console.log(user);
})
