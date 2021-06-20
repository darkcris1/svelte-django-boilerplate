import autoprefixer from "autoprefixer";

const production = !process.env.ROLLUP_WATCH;

export default {
    plugins: [
        ...(production
            ? [
                  autoprefixer({
                      grid: true,
                      overrideBrowserslist: [
                          "> 1%",
                          "last 2 versions",
                          "not ie <= 8",
                      ],
                  }),
              ]
            : []),
    ],
};
