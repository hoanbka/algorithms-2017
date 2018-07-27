var largestPlateau = map => {
    let visited = map.map(e => e.map(f => false))
    let r = 0;
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[0].length; j++) {
            if (!visited[i][j]) {
                let s = 0;
                let queue = [
                    [i, j]
                ];
                visited[i][j] = true;
                while (queue.length > 0) {
                    [x, y] = queue.pop()
                    s++
                    if (x > 0 && map[x - 1][y] == map[x][y] && !visited[x - 1][y]) {
                        queue.push([x - 1, y])
                        visited[x - 1][y] = true;
                    }
                    if (x + 1 < map.length && map[x + 1][y] == map[x][y] && !visited[x + 1][y]) {
                        queue.push([x + 1, y])
                        visited[x + 1][y] = true;
                    }
                    if (y > 0 && map[x][y - 1] == map[x][y] && !visited[x][y - 1]) {
                        queue.push([x, y - 1])
                        visited[x][y - 1] = true;
                    }
                    if (y + 1 < map[0].length && map[x][y + 1] == map[x][y] && !visited[x][y + 1]) {
                        queue.push([x, y + 1])
                        visited[x][y + 1] = true;
                    }
                }
                r = s > r ? s : r
            }
        }
    }
    return r;
}