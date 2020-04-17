module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || '/$2a$10$ra1z0n2XnSnbMP/ipTMHeOqqrI7i8Rssm/z8MHTxgb7LamV7LpfXu',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://aaqrnmkuxxeprx:d5259b21d9d9ca4ef2342560eda5ab946301f51a2108878c6ccdf6de85209ce0@ec2-54-210-128-153.compute-1.amazonaws.com:5432/d11omn2g7ef5rf',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder-mifflin@localhost/bookmarks-test'
}