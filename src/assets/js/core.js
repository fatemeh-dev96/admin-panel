document.addEventListener('DOMContentLoaded', function() {
        const htmlElement = document.documentElement;
        const languageToggle = document.getElementById('languageToggle');
        const languageText = languageToggle.querySelector('.language-text');
        const rtlStylesheet = document.querySelector('link[href*="bootstrap.rtl.min.css"]');
        const ltrStylesheet = document.querySelector('link[href*="bootstrap.min.css"]:not([href*="rtl"])');

        // Function to set language and direction
        function setLanguage(isRTL) {
            // Update HTML attributes
            htmlElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
            htmlElement.setAttribute('lang', isRTL ? 'fa' : 'en');
            
            // Update button text
            languageText.textContent = isRTL ? 'فارسی' : 'English';
            
            // Toggle Bootstrap stylesheets
            rtlStylesheet.disabled = !isRTL;
            ltrStylesheet.disabled = isRTL;
            
            // Save preference
            localStorage.setItem('isRTL', isRTL);
        }

        // Initialize based on saved preference
        const savedIsRTL = localStorage.getItem('isRTL') === 'true';
        setLanguage(savedIsRTL);

        // Toggle language on click
        languageToggle.addEventListener('click', function() {
            const isCurrentlyRTL = htmlElement.dir === 'rtl';
            setLanguage(!isCurrentlyRTL);
        });
    });
