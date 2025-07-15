import next from "@next/eslint-plugin-next";
import typescript from "@typescript-eslint/eslint-plugin";
import hooks from "eslint-plugin-react-hooks";
import sort from "eslint-plugin-simple-import-sort";

const isProduction = process.env.NODE_ENV === "production";

export default [
  {
    plugins: {
      "@next/next": next,
      "@typescript-eslint": typescript,
      "react-hooks": hooks,
      "simple-import-sort": sort,
    },
    rules: {
      // Next.js rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // React rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Environment-specific rules
      "no-debugger": isProduction ? "error" : "off",
      "no-console": isProduction
        ? ["warn", { allow: ["warn", "error"] }]
        : "off",

      // General code quality
      eqeqeq: ["error", "always"],
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
    },
  },
  {
    ignores: ["**/node_modules/", "**/.next/", "**/out/", "**/dist/"],
  },
];
