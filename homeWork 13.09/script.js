// const url = "https://jsonplaceholder.typicode.com/posts";

// const url_1 = "https://jsonplaceholder.typicode.com/albums";

// const url_2 = "https://jsonplaceholder.typicode.com/todos";


const inputForm = document.querySelector(".inputForm");
const div_root = document.querySelector("#root");
const user_name = document.querySelector(".users");
const user_email = document.querySelector(".email");
const submit = document.querySelector(".submit");

async function asyncData(username, email) {
    const url = `https://jsonplaceholder.typicode.com/users/?username=${username}&email=${email}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const not_found = document.createElement("p");
not_found.className = "notFound";

const div_info = document.createElement("div");
div_info.className = "divInfo";

const p_id = document.createElement("p");
const p_name = document.createElement("p");
const p_username = document.createElement("p");
const p_email = document.createElement("p");
const p_phone = document.createElement("p");
const p_web = document.createElement("p");
const input_web = document.createElement("input");
input_web.className = "input_web";
const btn_search = document.createElement("button");

inputForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = user_name.value;
    const email = user_email.value;
    const userData = await asyncData(username, email);

    if (userData.length === 0) {
        div_info.innerHTML = "";

        not_found.innerText = "Not found";
        div_root.append(not_found);
    } else {
        not_found.innerText = "";
        div_info.classList.remove("divInfo");
        p_username.innerText = "User Name : " + userData[0].username;
        p_email.innerHTML = "Email : " + userData[0].email;
        p_id.innerHTML = "Id : " + userData[0].id;
        p_name.innerHTML = "Name : " + userData[0].name;
        p_phone.innerHTML = "Phone : " + userData[0].phone;
        p_web.innerHTML = "Website : ";
        input_web.value = userData[0].website;

        div_info.append(
            p_id,
            p_name,
            p_username,
            p_email,
            p_phone,
            p_web,
            input_web
        );
        div_root.append(div_info);
        btn_search.className = "search";
        btn_search.innerHTML = "SEARCH";
        div_info.append(btn_search);
        div_info.append(input_web, btn_search);
    }
});

asyncData(user_name, user_email);



// JS for Profile

btn_search.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/profile.html";
});

const post_btn = document.querySelector('.posts')
const albums_btn = document.querySelector('.albums')
const todos_btn = document.querySelector('.todos')

// const back = document.querySelector('.btn_back')

post_btn.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/posts.html'
})


albums_btn.addEventListener('click', () => {

    window.location.href = 'http://127.0.0.1:5501/albums.html'
})

todos_btn.addEventListener('click', () => {

    window.location.href = 'http://127.0.0.1:5501/todos.html'
})

back.addEventListener('click', () => {

    window.location.href = 'http://127.0.0.1:5501/project_1/index.html'
})

// JS for Albums

const div_rootAlbums = document.querySelector('#rootAlbums')
const albums_value = document.querySelector('.albums')
const not_foundAlbums = document.createElement('p')
not_foundAlbums.className = 'not_found'

async function dataAlbums() {
    const url = `https://jsonplaceholder.typicode.com/albums`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function renderAlbums(data) {
    div_rootAlbums.innerHTML = ''
    data.forEach(elem => {
        const p_title = document.createElement('p')
        p_title.innerHTML = elem.title
        p_title.className = 'p_title'
        div_rootAlbums.append(p_title);
    });
}

albums_value.addEventListener('keyup', async (e) => {
    e.preventDefault();
    not_foundAlbums.innerHTML = 'NOT FOUND';
    const res = albums_value.value;
    const title_data = await dataAlbums();

    if (res === '') {
        div_rootAlbums.innerHTML = '';
    } else {
        const result = title_data.filter((elem) => elem.title.includes(res));

        if (result.length) {
            renderAlbums(result);
        } else {
            div_rootAlbums.innerHTML = '';
            res.innerHTML = '';
            div_rootAlbums.append(not_foundAlbums);
        }
    }
});

const back = document.querySelector('.btn_back')
back.addEventListener('click', () => {

    window.location.href = 'http://127.0.0.1:5501/project_1/index.html'
})


// JS for Post

const div_rootPost = document.querySelector('#rootPost')
const post_value = document.querySelector('.posts')
const not_foundPost = document.createElement('p')
not_foundPost.className = 'not_found'
async function dataPost() {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function renderPost(data) {
    div_rootPost.innerHTML = ''
    data.forEach(elem => {
        const p_title = document.createElement('p')
        p_title.className = 'p_title'

        p_title.innerHTML = elem.title
        div_rootPost.append(p_title);
    });
}

post_value.addEventListener('keyup', async (e) => {
    e.preventDefault();
    not_foundPost.innerHTML = 'NOT FOUND';
    const res = post_value.value;
    const title_data = await dataPost();

    if (res === '') {
        div_rootPost.innerHTML = '';
    } else {
        const result = title_data.filter((elem) => elem.title.includes(res));

        if (result.length) {
            renderPost(result);
        } else {
            div_rootPost.innerHTML = '';
            res.innerHTML = '';
            div_rootPost.append(not_foundPost);
        }
    }
});
// const back = document.querySelector('.btn_back')
// back.addEventListener('click', () => {

//     window.location.href = 'http://127.0.0.1:5501/project_1/index.html'
// })


// JS for todos

const div_rootTodos = document.querySelector('#rootTodos')
const todos_value = document.querySelector('.todos')
const not_foundTodos = document.createElement('p')
not_foundTodos.className = 'not_found'
async function dataPost() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function renderTodos(data) {
    div_rootTodos.innerHTML = ''
    data.forEach(elem => {
        const p_title = document.createElement('p')
        p_title.className = 'p_title'
        p_title.innerHTML = elem.title
        div_rootTodos.append(p_title);
    });
}

todos_value.addEventListener('keyup', async (e) => {
    e.preventDefault();
    not_foundTodos.innerHTML = 'NOT FOUND';
    const res = todos_value.value;
    const title_data = await dataTodos();

    if (res === '') {
        div_rootTodos.innerHTML = '';
    } else {
        const result = title_data.filter((elem) => elem.title.includes(res));

        if (result.length) {
            renderTodos(result);
        } else {
            div_rootTodos.innerHTML = '';
            res.innerHTML = '';
            div_rootTodos.append(not_foundTodos);
        }
    }
});


// const back = document.querySelector('.btn_back')
// back.addEventListener('click', () => {

//     window.location.href = 'http://127.0.0.1:5501/project_1/index.html'
// })