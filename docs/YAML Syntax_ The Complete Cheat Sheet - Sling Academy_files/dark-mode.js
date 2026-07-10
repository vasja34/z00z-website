window.addEventListener('DOMContentLoaded', () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const body = document.getElementById('page-body');
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const androidColorMeta = document.getElementById('theme-color-meta')

    if (typeof androidDarkColor === 'undefined') {
        androidDarkColor = '#1f2937';
    }

    if (typeof androidLightColor === 'undefined') {
        androidLightColor = '#1e3a8a';
    }

    // SVG icons
    const sunIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m9-9h-2m-14 0H3m16.364-5.636l-1.414 1.414M6.343 17.657l-1.414-1.414m12.728 0l-1.414 1.414M6.343 6.343L4.929 7.757" />
        </svg>
    `;

    const moonIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3.001 7 7 0 0021 12.79z" />
        </svg>
    `;

    function useDarkTheme(isDark) {
        if (isDark) {
            body.classList.add('dark');
            themeIcon.innerHTML = sunIcon;
            themeText.textContent = "Dark Mode is ON";
            androidColorMeta.setAttribute('content', androidDarkColor);
        } else {
            body.classList.remove('dark');
            themeIcon.innerHTML = moonIcon;
            themeText.textContent = "Dark Mode is OFF";
            androidColorMeta.setAttribute('content', androidLightColor);
        }
    }

    // Check localStorage for user preference
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        useDarkTheme(true);
    } else if (currentTheme === 'light') {
        useDarkTheme(false);
    } else {
        if (prefersDarkScheme.matches) {
            useDarkTheme(true);
        } else {
            useDarkTheme(false);
        }
    }

    // Handle system preference change
    prefersDarkScheme.addEventListener('change', (e) => {
        if (localStorage.getItem('theme') === null) {
            useDarkTheme(e.matches);
        }
    });

    // Theme switcher logic
    themeSwitcher.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'light');
            useDarkTheme(false); 
        } else {
            localStorage.setItem('theme', 'dark');
            useDarkTheme(true); 
        }
    });
});