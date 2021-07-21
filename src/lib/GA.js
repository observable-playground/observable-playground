require('./autotrack');

window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-40041298-4', 'auto');

// autotrack.js plugins
// https://github.com/googleanalytics/autotrack
ga('require', 'cleanUrlTracker');
ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker', {
    events: ['click', 'auxclick', 'contextmenu']
});
ga('require', 'urlChangeTracker');
ga('require', 'pageVisibilityTracker');

ga('send', 'pageview');