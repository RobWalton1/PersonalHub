module.exports = {
  content: ["./views//*.ejs", "./views//*.html"],
  theme: {
     extend: {
        backgroundImage: {
           "register-image": "url('../images/register.jpg')",
           "login-image": "url('../images/login.jpg')",
        },
     },
  },
  plugins: [require("daisyui")],
  daisyui: {
     styled: true,
     themes: true,
     base: true,
     utils: true,
     logs: true,
     rtl: false,
     prefix: "",
     darkTheme: "dark",
  },
};