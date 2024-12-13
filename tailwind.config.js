/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                '--orange': '#FF5733', 
                'custom-baslik': '#000000',
            },
        },
    },
    plugins: [],
};

