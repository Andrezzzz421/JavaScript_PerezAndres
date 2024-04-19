function generadortablero() {
    const N = 8; // Tamaño del tablero (8x8)
    const tablero = Array.from({ length: N }, () => Array(N).fill('O')); // Inicializar el tablero con 'O' (casillas vacías)

    // Función para verificar si una reina amenaza a otra
    function sinriesgo(row, col) {
        // Verificar la fila y columna
        for (let i = 0; i < N; i++) {
            if (tablero[row][i] === 'R' || tablero[i][col] === 'R') {
                return false;
            }
        }

        // Verificar las diagonales
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (tablero[i][j] === 'R') {
                return false;
            }
        }
        for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
            if (tablero[i][j] === 'R') {
                return false;
            }
        }

        return true;
    }

    // Función para colocar las reinas
    function reinasposicion(row) {
        if (row === N) {
            // Todas las reinas han sido colocadas
            for (const row of tablero) {
                console.log(row.join(' '));
            }
            console.log('****');
            return true; // Detener la búsqueda después de encontrar una solución
        }

        for (let col = 0; col < N; col++) {
            if (sinriesgo(row, col)) {
                tablero[row][col] = 'R'; // Colocar una reina
                if (reinasposicion(row + 1)) {
                    return true; // Encontrar solo una solución
                }
                tablero[row][col] = 'O'; // Retroceder (backtrack)
            }
        }
        return false; // No se encontró una solución en esta fila
    }

    reinasposicion(0); // Comenzar desde la primera fila
}

generadortablero(); // Llamar a la función para generar el tablero
