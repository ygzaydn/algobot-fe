export const signInText = {
  en: {
    titleText: {
      0: {
        state: 0,
        text: "Sign in",
      },
      1: {
        state: 1,
        text: "Sign up",
      },
    },
    fields: {
      0: [
        {
          name: "Your email address",
          key: "email",
          type: "text",
        },
        { name: "Password", key: "password", type: "password" },
      ],
      1: [
        {
          name: "Your email address",
          key: "email",
          type: "text",
        },
        { name: "Password", key: "password", type: "password" },
        { name: "Re-enter your password", key: "repassword", type: "password" },
      ],
    },

    buttonText: {
      0: "Sign in",
      1: "Sign up",
    },

    additionalText: {
      0: {
        status: true,
        text: "Forgot your password?",
        navigateTo: "/resetpassword",
      },
      1: {
        status: false,
      },
    },
  },
  tr: {
    titleText: {
      0: {
        state: 0,
        text: "Giriş yap",
      },
      1: {
        state: 1,
        text: "Kayıt ol",
      },
    },
    fields: {
      0: [
        {
          name: "E-mail adresi",
          key: "email",
          type: "text",
        },
        { name: "Parola", key: "password", type: "password" },
      ],
      1: [
        {
          name: "E-mail adresi",
          key: "email",
          type: "text",
        },
        { name: "Parola", key: "password", type: "text" },
        {
          name: "Parolanızı tekrar girin",
          key: "repassword",
          type: "password",
        },
      ],
    },

    buttonText: {
      0: "Giriş yap",
      1: "Kayıt ol",
    },

    additionalText: {
      0: {
        status: true,
        text: "Şifrenizi mi unuttunuz?",
        navigateTo: "/resetpassword",
      },
      1: {
        status: false,
      },
    },
  },
};
