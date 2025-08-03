import path from "path";

module.exports = {
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en", "zh"],
  },
  // Optional: Specify where your translation files are
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/locales",
};
