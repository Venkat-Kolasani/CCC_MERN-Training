let count = 0;

function increase() {
    count = count + 1;
    document.getElementById('count').innerHTML = count; 
}

function decrease() {
    count = count - 1;
    document.getElementById('count').innerHTML = count;
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function addTask() {
    let task = document.getElementById('task').value;

    if (!task.trim()) return;

    let li = document.createElement('li');
    li.innerHTML = task;
    document.getElementById('list').appendChild(li);
    document.getElementById('task').value = '';
}