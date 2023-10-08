// Updated by trungquandev.com's author on May 13 2023
// Sample Eslint config for React project
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-hooks", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn", //useEffect không chứa depen -> báo warning
    "react/prop-types": 0, // không báo lỗi khi không chứa prop types
    "react/display-name": 0, // báo lỗi trong console vị trí display name -> không cần thiết
    "no-console": 1, // không chứa console khi build , chỉ dùng trong dev fix
    "no-lonely-if": 1, // không để lại if ở trong else
    "no-unused-vars": 1, // tạo biến var nhưng không dùng đến --> báo warning
    "no-trailing-spaces": 1, // thừa dấu cách trong code
    "no-multi-spaces": 1, // không thừa dấu cách
    "no-multiple-empty-lines": 1, // không thừa dòng xuống hàng
    "space-before-blocks": ["error", "always"], // khoảng cách trước 1 khối {}
    "object-curly-spacing": [1, "always"], // luôn thừa dấu cách trong object
    // indent: ["warn", 2], // tab thụt lùi vào
    // semi: [1, "never"], // dấu chấm phẩy cuối
    quotes: ["error", "double"], //dấu ngoặc đôi
    "array-bracket-spacing": 1, // không thua khoang cach trong array
    // "linebreak-style": 0, // ngắt dòng gì đó không hiểu
    "no-unexpected-multiline": "warn", // khong dự đoán trước --> warning
    "keyword-spacing": 1, // nên có 1 cách khoảng trống trong code
    // "comma-dangle": 1, // không có dấu phẩy ở cuối dòng cuối cùng
    "comma-spacing": 1, // khong co dấu cách trong object
    "arrow-spacing": 1, // phải có 1 khoang trống trong arrow function
  },
};
