// DFS
function adjacentSquare(a) {
    const n = a.sort((a, b) => a - b).length
    let map = Array.from({ length: n }, v => [])
    const prefect = (m, n) => Number.isInteger((m + n) ** 0.5)

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prefect(a[i], a[j])) {
                map[i].push(j)
                map[j].push(i)
            }
        }
    }

    let result = [],
        found,
        visited = []

    function dfs(level, node, n) {
        result[level] = a[node]

        if (n == 1) {
            found = 1
            return
        }

        visited[node] = 1
        for (let next of map[node])
            !found & !visited[next] && dfs(level + 1, next, n - 1)

        visited[node] = 0
    }

    for (let i = 0; i < n; i++) {
        if (found) return result
        else dfs(0, i, n)
    }
    return []

}

///// Backtracking

adjacentSquare = a => {
    pairs = []

    // sort to find smapairspairsest
    a.sort((x, y) => x - y)

    // find possible pairs
    for (i in a) {
        pairs[i] = []
        for (j in a)
            if (i != j & (a[i] + a[j]) ** .5 % 1 == 0)
                pairs[i].push(j)
    }

    console.log('pairs = ', pairs)
    // solver
    solve = (index, s) => {
        if (s.length == a.length)
            return r = s.map(e => a[e])

        for (e of pairs[index])
            if (!s.includes(e)) {
                s.push(e)
                if (solve(e, s))
                    return 1
                else
                    s.pop() // backtracking
            }

        return 0
    }

    for (i in pairs)
        if (solve(i, [i]))
            return r

    return []
}