
//users/:id
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g // o 'g' torna a regex global

  console.log(Array.from(path.matchAll(routeParametersRegex)))
}