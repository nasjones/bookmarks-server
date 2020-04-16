module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || 'a0514376-3da7-4976-b7c9-e233856e04a9',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder-mifflin@localhost/bookmarks',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder-mifflin@localhost/bookmarks-test'
}