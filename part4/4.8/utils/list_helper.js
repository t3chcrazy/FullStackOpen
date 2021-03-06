const dummy = blogs => {
    return 1
}

const totalLikes = blogs => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }
    return blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
    const maxLikes = Math.max.apply(null, blogs.map(blog => blog.likes))
    return blogs.find(blog => blog.likes === maxLikes)
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
}