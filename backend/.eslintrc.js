module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {

    },
    "settings": {
        "import/resolver": {
            "alias": [
                ["@", "./"]
            ]
        }
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "arrow-body-style": 0,
        "comma-dangle": 0,
        "import/prefer-default-export": 0,
        "indent": 0,
        "linebreak-style": 0,
        "max-len": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "no-shadow": 0,
        "no-unused-vars": 0
    }
};