const dummy = (blogs) => {
  return 1
}
const totalLikes = (blogs) => {
  const acc = blogs.map(({ likes }) => likes).reduce((prev, curr) => prev + curr)
  return acc
}

module.exports = {
  dummy,
  totalLikes
}
