import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions"
    ],
    framework: {
        name: "@storybook/angular",
        options: {}
    },
    staticDirs: [
        {
            from: '../src/assets', // Path to the source folder with assets in the Angular project
            to: '/assets' // Virtual path to access Storybook (localhost:6006/assets/)
        }
    ],
    webpackFinal: async (config) => { // for correct operation of material icons, including svg
        config.module?.rules?.push({
            test: /\.svg$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/icons/[name][ext]'
            }
        });
        return config;
    }
};
export default config;
