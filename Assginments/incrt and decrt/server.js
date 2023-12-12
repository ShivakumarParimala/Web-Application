

document.getElementById('increment').addEventListener('click', () => {
    const count = parseInt(document.getElementById('count').textContent);
    document.getElementById('count').textContent = count + 1;
});

document.getElementById('decrement').addEventListener('click', () => {
    const count = parseInt(document.getElementById('count').textContent);
    document.getElementById('count').textContent = count - 1;
});