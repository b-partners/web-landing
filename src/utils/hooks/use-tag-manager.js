const tagManager = (eventName) => {
    window.dataLayer.push({
        'event': 'click',
        'clickClass': eventName,
    });
};

export const useTagManager = () => tagManager;
