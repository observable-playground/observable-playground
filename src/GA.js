export default () => {
    if ('%NODE_ENV%' === 'production') {
        console.log('initing GA');
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-40041298-4');
    }
}