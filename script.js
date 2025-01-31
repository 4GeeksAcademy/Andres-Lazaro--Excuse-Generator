window.onload = function() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed on', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car', 'my glasses'];
    let when = ['before the class', 'while I was sleeping', 'during my workout', 'at lunch'];

    // Función para generar excusa aleatoria
    function generateExcuse() {
        let whoIndex = Math.floor(Math.random() * who.length); // Índice aleatorio para 'who'
        let actionIndex = Math.floor(Math.random() * action.length); // Índice aleatorio para 'action'
        let whatIndex = Math.floor(Math.random() * what.length); // Índice aleatorio para 'what'
        let whenIndex = Math.floor(Math.random() * when.length); // Índice aleatorio para 'when'

        // Generar excusa concatenando elementos aleatorios de las matrices
        let excuse = who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];
        return excuse;
    }

    // Establecer la excusa generada en el elemento con id="excuse"
    document.getElementById('excuse').innerHTML = generateExcuse();
};
