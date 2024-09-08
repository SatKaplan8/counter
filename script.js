document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let count = 0;

    document.getElementById('increment').addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });

    document.getElementById('decrement').addEventListener('click', () => {
        count--;
        counterElement.textContent = count;
    });

    document.getElementById('reset').addEventListener('click', () => {
        count = 0;
        counterElement.textContent = count;
    });
});
