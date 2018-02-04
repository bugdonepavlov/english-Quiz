module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        "import/no-extraneous-dependencies" : 0,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-closing-tag-location": 0,
        "jsx-a11y/label-has-for": 0,
        "no-unused-expressions": 0,
    }
};