module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || '/$2a$10$ra1z0n2XnSnbMP/ipTMHeOqqrI7i8Rssm/z8MHTxgb7LamV7LpfXu',
    DATABASE_URL: process.env.DATABASE_URL || 'https://powerful-badlands-73155.herokuapp.com/',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder-mifflin@localhost/bookmarks-test'
}